import { Navigate, RouteObject } from 'react-router-dom';

import { ROUTES } from '~constants/routes';

export const anyRoute: RouteObject = {
    path: ROUTES.anyRoute,
    element: <Navigate to={ROUTES.notFound} replace={true} />,
};
