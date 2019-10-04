import React from 'react';
import renderer from 'react-test-renderer';
import GreetingsButton from '../../../../client/components/common/GreetingsButton';

describe('<GreetingsButton />', () => {
    it('snapshot testing', () => {
        const tree = renderer.create(<GreetingsButton text={'Click Me!'} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
