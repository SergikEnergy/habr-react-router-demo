import { Outlet } from 'react-router';
import classes from './main-pages-layout.module.css';
import { EntryPageContextValue } from '~types/router';

export const MainPagesLayout = () => {
    // пример, как можно вместо нативного реакт контекста использовать такой же для компонента Outlet - не создавая дополнительных хуков - встроенная функциональность

    const contextFromRouter: EntryPageContextValue = {
        someProp: 'any values here as inside React.Context',
    };

    return (
        <div className={classes.entryLayout}>
            <div className={classes.entryInternals}>
                <Outlet context={contextFromRouter} />
            </div>
        </div>
    );
};
