import { FC, PropsWithChildren, ReactNode } from 'react';
import classes from './button.module.css';
import classNames from 'classnames';
import { ClipLoader } from 'react-spinners';
import { ButtonType } from '~types/buttons';

type ButtonProps = {
    onButtonClick?: () => void;
    type?: ButtonType;
    icon?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    children,
    disabled = false,
    type = 'primary',
    loading = false,
    icon = '',
    onButtonClick,
    className: parentClassName = '',
}) => {
    const isPrimaryButton = type === 'primary';
    return (
        <button
            onClick={onButtonClick}
            className={classNames(parentClassName, classes.button, classes.block, {
                [classes.disabled]: disabled,
                [classes.primary]: isPrimaryButton,
                [classes.secondary]: !isPrimaryButton,
            })}
            disabled={disabled}
        >
            {loading && <ClipLoader size={16} color={type === 'primary' ? '#fff' : '#000'} />}
            {!loading && Boolean(icon) && icon}
            {children}
        </button>
    );
};
