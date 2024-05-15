import Grid from '@mui/material/Grid';
import loginLogo from '../../assets/images/Logo.svg';
import { contentStyles } from './contentsStyle';

const LogoImage : React.FC = () => {
    return (
        <Grid sx={contentStyles.logoImageStyleContainer}>
            <img
                src={loginLogo}
                alt="Logo"
                style={contentStyles.LogoImageStyle}
            />
        </Grid>
    );
}

export default LogoImage;