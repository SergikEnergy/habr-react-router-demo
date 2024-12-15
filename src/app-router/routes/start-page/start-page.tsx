import { Navigate, RouteObject } from 'react-router-dom';
import { BaseLayout } from '~components/base-layout';

import { ROUTES } from '~constants/routes';
import { PageSteps } from '~types/page-steps';
import { stepsRoot } from './steps-root';

export const startPage: RouteObject = {
    path: ROUTES.mainPage,
    element: <BaseLayout />,
    children: [
        {
            index: true,
            element: <Navigate to={`${ROUTES.stepsRootPage}/${PageSteps.Greeting}`} />,
        },
        stepsRoot,
    ],
};
