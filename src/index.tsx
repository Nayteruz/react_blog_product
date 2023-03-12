import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoryProvider } from 'app/providers/StoryProvider';
import App from './app/App';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

render(
    <BrowserRouter>
        <StoryProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoryProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
