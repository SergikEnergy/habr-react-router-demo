import { createBrowserRouter } from 'react-router-dom';

import { notFound } from './routes/not-found';
import { startPage } from './routes/start-page';

export const AppRouter = createBrowserRouter([startPage, notFound]);
