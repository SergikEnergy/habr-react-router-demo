import { RouteObject } from 'react-router-dom';

import { ROUTES } from '~constants/routes';
import { LazyStartPage } from '~pages/lazy-start-page';

import { MainPagesLayout } from '~components/main-pages-layout';
import { loaderCheckExtension } from 'src/app-router/utils/loader-check-extension';

export const stepsRoot: RouteObject = {
    path: ROUTES.stepsRootPage,
    element: <MainPagesLayout />,
    children: [
        {
            path: ROUTES.stepPage,
            element: <LazyStartPage />,
            loader: loaderCheckExtension,
        },
    ],
};
