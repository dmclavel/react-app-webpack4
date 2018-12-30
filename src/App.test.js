import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
    let app;

    beforeEach(() => {
        app = shallow(<App />);
    });

    it('should contain two navigation links', () => {
        expect(app.find('NavLink')).toHaveLength(2);
    });
});