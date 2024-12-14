import { FC } from 'react';
import classes from './main-page.module.css';

type MainPageProps = {
    hasExtension: boolean;
};

export const MainPage: FC<MainPageProps> = ({ hasExtension }) => {
    return <section className={classes.main}>fffffffff</section>;
};
