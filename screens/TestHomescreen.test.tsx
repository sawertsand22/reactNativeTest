import React from 'react';
import { render } from '@testing-library/react';
import HomeScreen from './sreens/HomeScreen';

describe('HomeScreen', () => {
it('renders Rick and Morty'), () => {
const { getByText } = render(<MyComponent />);

expect(getByText('Rick')).toBeInTheDocument(); // Проверяем наличие текста "Рик"
expect(getByText('Morty')).toBeInTheDocument(); // Проверяем наличие текста "Морти"
});
});