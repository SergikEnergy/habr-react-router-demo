import { FC } from 'react';
import classes from './custom-spinner.module.css';
import { FadeLoader } from 'react-spinners';

type CustomSpinnerProps = {
    tip?: string;
};

export const CustomSpinner: FC<CustomSpinnerProps> = ({ tip = '' }) => {
    return (
        <div className={classes.spinner}>
            <FadeLoader width={5} height={15} color="#b30eac" />
            {tip && <div className={classes.tip}>{tip}</div>}
        </div>
    );
};
