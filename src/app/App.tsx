import "./styles/index.scss";
import {classNames as cn} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={cn('app', {}, [theme])}>
            <Navbar />
            <AppRouter/>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    );
};

export default App;