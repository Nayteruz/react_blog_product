import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoryProvider } from '@/app/providers/StoryProvider';
import App from './app/App';
import '@/shared/config/i18n/i18n';
import '@/app/styles/index.scss';

const container = document.getElementById('root');
if (!container) {
    throw new Error('Root not found!');
}
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <StoryProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoryProvider>
    </BrowserRouter>,
);
export { Theme } from '@/shared/const/theme';
