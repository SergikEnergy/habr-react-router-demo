import { createBrowserRouter } from 'react-router';

import { notFound } from './routes/not-found';
import { startPage } from './routes/start-page';
import { anyRoute } from './routes/any-route';

export const AppRouter = createBrowserRouter([startPage, notFound, anyRoute]);
