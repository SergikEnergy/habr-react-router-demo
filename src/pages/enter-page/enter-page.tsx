import { useNavigate, useParams } from 'react-router-dom';
import classes from './enter-page.module.css';
import { StepParams } from '~types/router';
import { PageSteps } from '~types/page-steps';
import { ROUTES } from '~constants/routes';
import { getPageParts } from './utils/get-page-parts';
import { Button } from '~components/button';

export const EnterPage = () => {
    const { paramName } = useParams<StepParams>();
    const navigate = useNavigate();

    const existedParams = Object.values(PageSteps);
    if (!existedParams) {
        navigate(ROUTES.notFound, { replace: true });
    }

    const {
        buttonTopText,
        buttonBottomText,
        title,
        subtitle,
        bottomBottomAction,
        bottomTopAction,
        buttonTopIcon,
        buttonBottomIcon,
        isButtonBottomDisabled,
        isButtonTopDisabled,
    } = getPageParts(paramName ?? PageSteps.Greeting);

    return (
        <div className={classes.enter}>
            <div className={classes.title}>
                <h3>{title}</h3>
                {subtitle && <p>{subtitle}</p>}
            </div>
            <div className={classes.buttons}>
                <Button
                    type="primary"
                    disabled={isButtonTopDisabled}
                    onButtonClick={bottomTopAction}
                    icon={buttonTopIcon}
                >
                    {buttonTopText}
                </Button>
                <Button
                    type="secondary"
                    disabled={isButtonBottomDisabled}
                    icon={buttonBottomIcon}
                    onButtonClick={bottomBottomAction}
                >
                    {buttonBottomText}
                </Button>
            </div>
        </div>
    );
};
