import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function Register() {
  const [passwordError, setPasswordError] = React.useState(false);
  const [usernameError, setUsernameError] = React.useState(false);

  const validateUsername = (value) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const password = data.get('password');
    const confirmPassword = data.get('comfirmPassword');
    const username = data.get('username');

    if (!validateUsername(username)) {
      setUsernameError(true);
      return;
    }
    setUsernameError(false);
    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);

    console.log({
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
      comfirmPassword: data.get('comfirmPassword'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      tel: data.get('tel'),
    });
    
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            สมัครสมาชิก
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  error={usernameError}
                  helperText={
                    usernameError
                      ? 'ไม่สามารถใส่ตัวอักษรพิเศษหรือภาษาไทยได้'
                      : ''
                  }
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="รหัสผ่าน"
                  type="password"
                  id="password"
                  error={passwordError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="comfirmPassword"
                  label="ยืนยันรหัสผ่าน"
                  type="password"
                  id="comfirmPassword"
                  error={passwordError}
                  helperText={passwordError ? 'รหัสผ่านไม่ตรงกัน' : ''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="ชื่อ"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="นามสกุล"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="tel"
                  label="เบอร์โทรศัพท์"
                  id="tel"
                  autoComplete="tel"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ยืนยัน
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}