import { type RouteObject } from 'react-router';

import { ROUTES } from '~constants/routes';
import { NotFoundPage } from '~pages/not-found-page';

export const notFound: RouteObject = {
    path: ROUTES.notFound,
    element: <NotFoundPage />,
};
