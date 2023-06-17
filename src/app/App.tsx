import { Suspense, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { getUserMounted, userActions } from '@/entities/User';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Layout } from '@/shared/ui/Layout';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';

function App() {
    const dispatch = useAppDispatch();
    const userMounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={cn('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <Layout className="content-page">
                    <Sidebar />
                    {userMounted && <AppRouter />}
                </Layout>
            </Suspense>
        </div>
    );
}

export default App;
