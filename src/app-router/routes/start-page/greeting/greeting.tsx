import { Navigate, RouteObject } from 'react-router-dom';
import { BaseLayout } from '~components/base-layout';

import { ROUTES } from '~constants/routes';
import { PageSteps } from '~types/page-steps';

export const greetingStep: RouteObject = {
    path: ROUTES.mainPage,
    element: <BaseLayout />,
    children: [
        {
            index: true,
            element: <Navigate to={`${ROUTES.stepsRootPage}/${PageSteps.Start}`} />,
        },
        stepsRoot,
    ],
};
