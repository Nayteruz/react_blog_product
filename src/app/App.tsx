import { classNames as cn } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Layout } from 'shared/ui/Layout';
import { Suspense } from 'react';

function App() {
    return (
        <div className={cn('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <Layout className="content-page">
                    <Sidebar />
                    <AppRouter />
                </Layout>
            </Suspense>
        </div>
    );
}

export default App;
