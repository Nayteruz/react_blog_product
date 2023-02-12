import "./styles/index.scss";
import {Link, Route, Routes} from "react-router-dom";
import {classNames as cn} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router"

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={cn('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <AppRouter />
        </div>
    );
};

export default App;