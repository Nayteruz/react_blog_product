import { screen, fireEvent } from '@testing-library/react';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import { Sidebar } from './Sidebar';

describe('Test Sidebar component', () => {
    test('render Sidebar', async () => {
        componentRender(<Sidebar />);
        const page = await screen.findByTestId('sidebar');
        expect(page).toBeInTheDocument();
    });

    test('toggle Sidebar', async () => {
        componentRender(<Sidebar />);
        const toggleBtn = await screen.getByTestId('sidebar-toggle');
        expect(await screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        setTimeout(async () => {
            expect(await screen.getByTestId('sidebar')).toHaveClass('collapsed');
        }, 0);
    });
});
