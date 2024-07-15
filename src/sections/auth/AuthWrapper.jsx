import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// project import
import AuthFooter from 'components/cards/AuthFooter';
import Logo from 'components/logo';
import AuthCard from './AuthCard';

// assets
import AuthBackground from 'assets/images/auth/AuthBackground';
import { Container } from '@mui/material';
import ImgLogin from 'assets/images/auth/BgImgLogin.png'

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

export default function AuthWrapper({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', padding: '0px' }}>
      {/* <AuthBackg round /> */}
      <div className="container-fluid bg-dark-blue px-0">
        <Grid sx={{ padding: '0px' }}>
          {/* <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
            <Logo />
          </Grid> */}
          <Grid container sx={{ padding: '0px' }}>
            <Grid item xs={6} sx={{ padding: '0px' }}>
              <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}> 
                <div className='w-100 h-100'>                  
                  <img className='object-fit-cover h-100 w-100' src={ImgLogin} alt="ImgLogo"/>  
                </div>    
              </Box>                     
            </Grid>
            <Grid item xs={6}>
              <Grid item xs={12} container justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
                <Grid item>
                  <AuthCard className='bg-transparent'>{children}</AuthCard>   
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12}>
            <Grid
              item
              xs={12}
              container
              justifyContent="center"
              alignItems="center"
              sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
            >
              <Grid item>
                <AuthCard>{children}</AuthCard>
              </Grid>
            </Grid>
          </Grid> */}
          {/* <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
            <AuthFooter />
          </Grid> */}
        </Grid>
      </div>
    </Box>
  );
}

AuthWrapper.propTypes = { children: PropTypes.node };
