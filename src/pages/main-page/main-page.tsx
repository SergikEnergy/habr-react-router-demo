import { FC } from 'react';
import { Navigate, useParams } from 'react-router';
import { ROUTES } from '~constants/routes';
import { PageSteps } from '~types/page-steps';
import { StepParams } from '~types/router';
import { EnterPage } from '~pages/enter-page';

type MainPageProps = {
    hasExtension: boolean;
};

export const MainPage: FC<MainPageProps> = ({ hasExtension }) => {
    const { paramName } = useParams<StepParams>();

    if (!hasExtension && paramName === PageSteps.Final) {
        return <Navigate to={`${ROUTES.stepsRootPage}/${PageSteps.ExtensionNotInstalled}`} />;
    }

    return <EnterPage />;
};
