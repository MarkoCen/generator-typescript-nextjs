import { Router } from 'express';
import { join } from 'path';
import { parse } from 'url';

const router = Router();

router.use((req, _, next) => {
  const parsedUrl = parse(req.url, true);
  req.body = { parsedUrl };
  next();
});

router.route('/robots.txt').get(({ body }, res) => {
  return res.sendFile(join(process.cwd(), 'static', body.parsedUrl.pathname));
});

router.route('/favicon.ico').get(({ body }, res) => {
  return res.sendFile(join(process.cwd(), 'static', body.parsedUrl.pathname));
});

export default router;
