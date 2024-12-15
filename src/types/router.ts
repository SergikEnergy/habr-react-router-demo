import { STEP_PARAMS_NAME } from '~constants/routes';

export type EntryPageContextValue = {
    someProp: string;
};

export type EntryLoaderData = { hasExtension: Promise<boolean> };

export type StepParams = {
    [STEP_PARAMS_NAME]: string;
};
