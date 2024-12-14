import classes from './logo.module.css';
import LogoIcon from '../../assets/logo.png';

export const Logo = () => {
    return (
        <div className={classes.logo}>
            <img src={LogoIcon} alt="logo-block" />
        </div>
    );
};
