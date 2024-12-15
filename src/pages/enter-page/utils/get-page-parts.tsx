import { ReactNode } from 'react';
import { PageSteps } from '~types/page-steps';
import ExtensionIcon from '~assets/extension-icon.png';
import GoggleIcon from '~assets/google-icon.png';
import BackIcon from '~assets/back-icon.png';
import TableIcon from '~assets/table-icon.png';
import DownloadIcon from '~assets/download-icon.png';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '~constants/routes';

type GetPagePartsFunc = (step: string) => {
    title: string;
    subtitle?: string;
    buttonTopText: string;
    buttonBottomText: string;
    buttonTopIcon?: ReactNode;
    isButtonTopDisabled?: boolean;
    buttonBottomIcon?: ReactNode;
    isButtonBottomDisabled?: boolean;
    bottomTopAction?: () => void;
    bottomBottomAction?: () => void;
};

export const getPageParts: GetPagePartsFunc = (step) => {
    const navigate = useNavigate();

    switch (step) {
        case PageSteps.Start: {
            return {
                title: 'Вход через расширение',
                buttonTopText: 'К таблицам',
                buttonBottomText: 'Назад на главную',
                buttonTopIcon: (
                    <img src={TableIcon} alt="tables icon" style={{ display: 'inline-block' }} />
                ),
                buttonBottomIcon: (
                    <img src={BackIcon} alt="arrow back icon" style={{ display: 'inline-block' }} />
                ),
                bottomTopAction: () => navigate(`${ROUTES.stepsRootPage}/${PageSteps.Final}`),
                bottomBottomAction: () => navigate(`${ROUTES.stepsRootPage}/${PageSteps.Greeting}`),
            };
        }

        case PageSteps.ExtensionNotInstalled: {
            return {
                title: 'Расширение не обнаружено или отключено',
                subtitle: 'Для продолжения необходимо установить и включить расширение браузера',
                buttonTopText: 'Установить расширение',
                buttonBottomText: 'Назад на главную',
                buttonTopIcon: (
                    <img
                        src={DownloadIcon}
                        alt="extension icon"
                        style={{ display: 'inline-block' }}
                    />
                ),
                buttonBottomIcon: (
                    <img src={BackIcon} alt="arrow back icon" style={{ display: 'inline-block' }} />
                ),
                bottomBottomAction: () => navigate(`${ROUTES.stepsRootPage}/${PageSteps.Greeting}`),
            };
        }

        case PageSteps.Final: {
            return {
                title: 'Приложение готово к работе',
                subtitle: 'Браузерное расширение установлено',
                buttonTopText: 'Продолжить',
                buttonBottomText: 'Назад на главную',
                buttonBottomIcon: (
                    <img src={BackIcon} alt="arrow back icon" style={{ display: 'inline-block' }} />
                ),
                bottomBottomAction: () => navigate(`${ROUTES.stepsRootPage}/${PageSteps.Greeting}`),
            };
        }

        case PageSteps.Greeting:
        default:
            return {
                title: 'Выберите вариант входа',
                buttonTopText: 'Войти с расширением',
                buttonBottomText: 'Войти через google',
                buttonTopIcon: (
                    <img
                        src={ExtensionIcon}
                        alt="extension icon"
                        style={{ display: 'inline-block' }}
                    />
                ),
                buttonBottomIcon: (
                    <img
                        src={GoggleIcon}
                        alt="enter with google"
                        style={{ display: 'inline-block' }}
                    />
                ),
                isButtonBottomDisabled: true,
                bottomTopAction: () => navigate(`${ROUTES.stepsRootPage}/${PageSteps.Start}`),
            };
    }
};
