import "./styles/index.scss";
import {classNames as cn} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {Layout} from "shared/ui/Layout";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={cn('app', {}, [theme])}>
            <Navbar />
            <Layout className="content-page">
                <Sidebar/>
                <AppRouter/>
            </Layout>
        </div>
    );
};

export default App;