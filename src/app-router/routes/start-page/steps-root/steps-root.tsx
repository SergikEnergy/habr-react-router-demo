import { Navigate, RouteObject } from 'react-router-dom';

import { ROUTES } from '~constants/routes';
import { LazyStartPage } from '~pages/lazy-start-page';

import { MainPagesLayout } from '~components/main-pages-layout';
import { loaderCheckExtension } from '../../../utils/loader-check-extension';
import { PageSteps } from '~types/page-steps';

export const stepsRoot: RouteObject = {
    path: ROUTES.stepsRootPage,
    element: <MainPagesLayout />,
    children: [
        {
            index: true,
            element: <Navigate to={`${ROUTES.stepsRootPage}/${PageSteps.Greeting}`} />,
        },
        {
            path: ROUTES.stepPage,
            element: <LazyStartPage />,
            loader: loaderCheckExtension,
        },
    ],
};
