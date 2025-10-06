import { render } from '@testing-library/react-native';
import HomeScreen from '../../app/index';

describe('HomeScreen', () => {
  it('renders welcome message', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('Sustainable Living App Scaffold')).toBeTruthy();
  });
});
