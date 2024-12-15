import { Logo } from '~components/logo';
import classes from './base-layout.module.css';
import { Outlet } from 'react-router-dom';

export const BaseLayout = () => {
    return (
        <section className={classes.content}>
            <Logo />

            <Outlet />
        </section>
    );
};
