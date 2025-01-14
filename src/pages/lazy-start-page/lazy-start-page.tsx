import { Suspense } from 'react';
import { Await, useLoaderData, useParams } from 'react-router';

import { CustomSpinner } from '~components/custom-spinner';
import { EntryLoaderData, StepParams } from '~types/router';
import { MainPage } from '~pages/main-page';
import { PageSteps } from '~types/page-steps';

const EXTENSION_CHECKED_TEXT = 'Идет процесс проверки ...';

export const LazyStartPage = () => {
    const data = useLoaderData() as EntryLoaderData;
    const { paramName } = useParams<StepParams>();

    /*
        те шаги, которые не требуют проверки, выосим за Await - иначе мы можем не получить
        fallback при переходе с изначальных страниц на финальную при данной кастомной реализации
        лоадера
    */
    if (paramName === PageSteps.Start || paramName === PageSteps.Greeting) {
        return <MainPage hasExtension={true} />;
    }

    return (
        <Suspense fallback={<CustomSpinner tip={EXTENSION_CHECKED_TEXT} />}>
            <Await resolve={data.hasExtension} errorElement={<div>Error during render page!</div>}>
                {(props: boolean) => <MainPage hasExtension={props} />}
            </Await>
        </Suspense>
    );
};
