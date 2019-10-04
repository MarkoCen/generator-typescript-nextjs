import { Request, Response, Router } from 'express';
import { IStoreState } from '../../store/reducers/index.reducer';
import cache from '../lib/cache';
import { nextApp, nextAppHandler } from '../next-app';
import { getInitStoreStates } from '../services/store.service';

async function render(req: Request, res: Response, pagePath, query = {}): Promise<string> {
    if (process.env.NODE_ENV !== 'production') {
        const html = await nextApp.renderToHTML(req, res, pagePath, query);
        return html;
    }

    const { url } = req;
    // @ts-ignore
    const deviceType = req.device.type;
    const key = `ssr-${deviceType}-${url}`;

    if (cache.has(key)) {
        res.setHeader('X-SSR-Cache', 'hit');
        return cache.get(key) as string;
    }

    try {
        const html = await nextApp.renderToHTML(req, res, pagePath, query);
        cache.set(key, html);
        return html;
    } catch (err) {
        nextApp.renderError(err, req, res, pagePath, query);
    }
}

const router = Router();

router.use(async (req, _, next) => {
    const initStates: IStoreState = await getInitStoreStates(req);
    req.body = { ...req.body, initStates };
    next();
});

router.route('/').get(async (req, res) => {
    const html = await render(req, res, '/index');
    res.send(html);
});

router.route('*').get((req, res) => {
    nextAppHandler(req, res);
});

export default router;
