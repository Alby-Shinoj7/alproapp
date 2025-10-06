import renderer from 'react-test-renderer';
import App from '../../App';

describe('App', () => {
  it('renders the headline', () => {
    const tree = renderer.create(<App />).root;
    expect(tree.findByProps({ children: 'Sustainable Living App' })).toBeTruthy();
  });
});
