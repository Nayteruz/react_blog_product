import { useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserMounted, userActions } from '@/entities/User';
import { Layout } from '@/shared/ui/Layout';
import { Sidebar } from '@/widgets/Sidebar';
import { Navbar } from '@/widgets/Navbar';
import { AppRouter } from '@/app/providers/router';

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
