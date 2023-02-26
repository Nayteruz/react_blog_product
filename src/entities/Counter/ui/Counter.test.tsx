import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Test Counter component', () => {
    test('render Counter', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment Counter', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('button-increment'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement Counter', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('button-decrement'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
