import h from 'react-hyperscript';
import { shallow } from 'enzyme';
import { App } from './app';

describe('App Component', () => {
  it('should be defined', () => {
    const app = shallow(h(App));
    expect(app).not.toEqual(undefined);
  });

  it('should have name class', () => {
    const app = shallow(h(App));
    expect(app.hasClass('app')).toEqual(true);
  });
});
