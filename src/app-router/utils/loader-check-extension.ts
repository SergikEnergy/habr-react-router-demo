import { defer, Params } from 'react-router-dom';

import { STEP_PARAMS_NAME } from '~constants/routes';
import { PageSteps } from '~types/page-steps';

const LOADER_VISIBLE_DURATION_MS = 3000;

// flag для проверки успешности проверки - можно поэкспериментировать и поменять
const PROMISE_RESOLVED = true;

// здесь может быть любая асинхронная проверка
const customChecking = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            PROMISE_RESOLVED ? resolve(true) : reject(false);
        }, LOADER_VISIBLE_DURATION_MS);
    });

export const loaderCheckExtension = ({ params }: { params: Params<typeof STEP_PARAMS_NAME> }) => {
    const currentStep = params.paramName;

    // пропускаем проверку для определенных страниц - у нас это первая и вторая страницы - не требуют проверки наличия расширения
    if (currentStep === PageSteps.Start || currentStep === PageSteps.Greeting) {
        return defer({ hasExtension: true });
    }

    const checkExtension = async () => {
        try {
            const extensionInstalled = await customChecking();

            return Boolean(extensionInstalled);
        } catch (err) {
            return false;
        }
    };

    return defer({ hasExtension: checkExtension() });
};
