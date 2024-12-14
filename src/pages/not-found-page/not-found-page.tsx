import AnimatedIcon from '../../assets/not-found-icon.svg';
import classes from './not-found-page.module.css';

import { useNavigate } from 'react-router-dom';
import { ROUTES } from '~constants/routes';
import { Button } from '~components/button';

export const NotFoundPage = () => {
    const navigate = useNavigate();

    const goHomeHandler = () => navigate(ROUTES.mainPage);

    const goBackHandler = () => navigate(-1);

    return (
        <section className={classes.wrapper}>
            <AnimatedIcon />
            <div className={classes['message-box']}>
                <h1>404</h1>
                <p>Страница не найдена!</p>
                <div className={classes['buttons']}>
                    <Button onButtonClick={goBackHandler} type="primary">
                        Назад
                    </Button>
                    <Button onButtonClick={goHomeHandler} type="primary">
                        На главную
                    </Button>
                </div>
            </div>
        </section>
    );
};
