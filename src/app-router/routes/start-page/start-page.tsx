import { Navigate, RouteObject } from 'react-router-dom';
import { BaseLayout } from '~components/base-layout';

import { ROUTES } from '~constants/routes';

export const startPage: RouteObject = {
    path: ROUTES.mainPage,
    element: <BaseLayout />,
    children: [
        // {
        //     index: true,
        //     element: <Navigate to={`${ROUTES.stepsRootPage}/${stepName.one}`} />,
        // },
    ],
};
