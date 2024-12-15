import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '~constants/routes';
import { PageSteps } from '~types/page-steps';
import { StepParams } from '~types/router';
import { EnterPage } from '~pages/enter-page';

type MainPageProps = {
    hasExtension: boolean;
};

export const MainPage: FC<MainPageProps> = ({ hasExtension }) => {
    const navigate = useNavigate();
    const { paramName } = useParams<StepParams>();

    if (!hasExtension && paramName === PageSteps.Final) {
        navigate(`${ROUTES.stepsRootPage}/${PageSteps.ExtensionNotInstalled}`);
    }

    return <EnterPage />;
};
