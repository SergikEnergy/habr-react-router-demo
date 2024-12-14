import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

import { CustomSpinner } from '~components/custom-spinner';
import { EntryLoaderData } from '~types/router';
import { MainPage } from '~pages/main-page';

const EXTENSION_CHECKED_TEXT = 'Идет процесс проверки ...';

export const LazyStartPage = () => {
    const data = useLoaderData() as EntryLoaderData;

    return (
        <Suspense fallback={<CustomSpinner tip={EXTENSION_CHECKED_TEXT} />}>
            <Await resolve={data.hasExtension}>
                {(props: boolean) => <MainPage hasExtension={props} />}
            </Await>
        </Suspense>
    );
};
