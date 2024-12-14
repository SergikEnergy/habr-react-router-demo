import { RouteObject } from 'react-router-dom';

import { ROUTES } from '~constants/routes';
import { NotFoundPage } from '~pages/not-found-page';

export const notFound: RouteObject = {
    path: ROUTES.notFound,
    element: <NotFoundPage />,
};
