import { Navigate, type RouteObject } from 'react-router';

import { ROUTES } from '~constants/routes';

export const anyRoute: RouteObject = {
    path: ROUTES.anyRoute,
    element: <Navigate to={ROUTES.notFound} replace={true} />,
};
