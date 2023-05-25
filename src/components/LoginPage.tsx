import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Styles.css'
import image from '../components/image.png'
import logo from '../components/logo.png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (

    <Box sx={{ flexGrow: 1 }}>

      <div className="container">

        <Grid className="main_grid" container spacing={0}>

          <Grid xs={6} md={6} className ='left_container'>

            <Stack spacing={2} direction="column">

                    <Stack spacing={0} direction="column" className='heading_column'>
                        <div className="site_logo"> <img src={logo}/> </div>
                        <h1 className='left_container_heading'>Sign in</h1>
                        <Stack spacing={0.5} direction="row">
                            <h5 className='left_container_heading_paragraph'>Don’t have an accqount?</h5>
                            <div className="signin_link"> Sign Up </div>
                        </Stack>
                    </Stack>

                    <Stack spacing={2} direction="column" className="login_fields">
                        <TextField id="outlined-basic" className='text_fields' required label="Email address" margin="normal" autoFocus variant="outlined" autoComplete="email" />
                        <TextField id="outlined-password-input" className='text_fields' required label="Password" margin="normal" type="password" autoComplete="current-password" />
                    </Stack>

                    {/* <Grid container spacing={1} direction="column-reverse">
                      <Grid xs={6} md={6} >
                        <TextField id="outlined-basic" className='text_fields' required label="Email address" margin="normal" autoFocus variant="outlined" autoComplete="email" />
                      </Grid>
                      <Grid xs={6} md={6} >
                        <TextField id="outlined-basic" className='text_fields' required label="Email address" margin="normal" autoFocus variant="outlined" autoComplete="email" />
                      </Grid>
                    </Grid> */}

                    <Stack spacing={15} direction="row" className='signin_class'>
                        <FormGroup className='checkbox_class'>
                            <FormControlLabel className='check_mark' control={<Checkbox value="remember" color="primary" />} label="Remember Me"/>
                        </FormGroup>
                        <Button className='forgot_password' href="#text-buttons">Forgot Password?</Button>
                    </Stack>

                    <Stack spacing={8} direction="column" className="bottom_container">
                        <Button className='signin_btn' variant="contained">Sign in</Button>
                        <Stack className="footer">
                            <h4>© 2010-2022 Informatics International Limited. All Rights Reserved</h4>
                        </Stack>
                    </Stack>

            </Stack>

          </Grid>

          <Grid xs={6} md={6} className ='right_container'>

              <div className="signin_img">
                <img src={image}/>
              </div>

              <Stack className="welcome_text" spacing={2}>
                  <h1 className='right_container_heading'>Welcome to <div className='next_line'>Infoins</div></h1>
                  <h5 className='right_container_paragraph'>To keep connected with us please login with your personal <div className="next_line">information.</div> </h5>
              </Stack>

          </Grid>

        </Grid>

      </div>

    </Box>

  );
}