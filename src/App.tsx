import { RouterProvider } from 'react-router/dom';
import classes from './app.module.css';
import { AppRouter } from './app-router';

export const App = () => {
    return (
        <main className={classes.content}>
            <RouterProvider router={AppRouter} />
        </main>
    );
};
