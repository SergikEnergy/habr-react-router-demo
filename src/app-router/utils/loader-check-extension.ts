import { type Params } from 'react-router';

import { STEP_PARAMS_NAME } from '~constants/routes';
import { PageSteps } from '~types/page-steps';

const LOADER_VISIBLE_DURATION_MS = 3000;

// flag для проверки успешности проверки - можно поэкспериментировать и поменять
const PROMISE_RESOLVED: boolean = false;

// для кеширования результата проверки
const cache: { isAlreadyChecked?: boolean } = {};

// здесь может быть любая асинхронная проверка
const customCheck = () =>
    new Promise<boolean>((resolve) => {
        if (cache.isAlreadyChecked !== undefined) {
            resolve(cache.isAlreadyChecked);
        } else {
            setTimeout(() => {
                cache.isAlreadyChecked = PROMISE_RESOLVED;
                resolve(PROMISE_RESOLVED);
            }, LOADER_VISIBLE_DURATION_MS);
        }
    });

/*
    Функция-лоадер может принимать аргументы следующего типа:
        type LoaderFunctionArgs<Context> = {
            context?: Context;
            params: Params<string>;
            request: Request;
        }
*/

export const loaderCheckExtension = ({ params }: { params: Params<typeof STEP_PARAMS_NAME> }) => {
    const currentStep = params.paramName;

    // пропускаем проверку для определенных страниц - у нас это первая и вторая страницы - не требуют проверки наличия расширения
    if (currentStep === PageSteps.Start || currentStep === PageSteps.Greeting) {
        return { hasExtension: true };
    }

    /* возвращаем промис - причем без await - чтобы в дальнейшем использовать
       Suspense и fallback, если здесь использовать await - то перехода по роуту не случится
       до завершения await (в версии реакт-роутер-дом до 7 - нужно было использовать
       defer({returnedObject})) для получения аналогичного эффекта
    */
    const hasExtension = customCheck();

    return { hasExtension };
};
