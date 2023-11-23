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
import { ThemeProvider } from '@mui/material/styles';
import myTheme from '../core-ui/theme';

export default function Register() {
  const [username, setUsername] = React.useState(true);
  const [email, setEmail] = React.useState(true);
  const [password, setPassword] = React.useState(true);
  const [comfirmPassword, setComfirmPassword] = React.useState(true);
  const [firstName, setFirstName] = React.useState(true);
  const [lastName, setLastName] = React.useState(true);
  const [tel, setTel] = React.useState(true);
  const [usernameCheck, setUsernameCheck] = React.useState(true);
  const [emailCheck, setEmailCheck] = React.useState(true);
  const [usernameReg, setUsernameReg] = React.useState(true);
  const [emailReg, setEmailReg] = React.useState(true);
  const url = 'http://localhost:3001';
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setUsername(data.get('username'));
    setEmail(data.get('email'));
    setPassword(data.get('password'));
    setComfirmPassword(data.get('comfirmPassword'));
    setFirstName(data.get('firstName'));
    setLastName(data.get('lastName'));
    setTel(data.get('tel'));
  };
  const onBlurUsername = (event) => {
    const userData = {
      username: event.target.value,
    };
    const reg = new RegExp("^[a-zA-Z0-9]{6,}$");
    if(reg.test(userData.username)){
      setUsernameReg(true);
      sendToBackend(userData);
    }
    else{
      setUsernameReg(false);
    }
  }
  const onBlurEmail = (event) => {
    const userData = {
      email: event.target.value,
    };
    const emailRegExp = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
    if(emailRegExp.test(userData.email)){
      setEmailReg(true);
      sendToBackend(userData);
    }
    else{
      setEmailReg(false);
    }
  }
  const sendToBackend = (jsonData) => {
    let api = url;
    console.log(jsonData.username);
    switch(jsonData) {
      case jsonData.username :
        api = api + '/checkinguser';
        break;
      case jsonData.email:
        api = api + '/checkingemail';
        break;
    }
    // if(jsonData.username == 'heart'){
    //   setUsernameCheck(false);
    //   console.log('heart');
    // }
    // else{
    //   setUsernameCheck(true);
    // }
    fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonData,
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
  }

  return (
    <ThemeProvider theme={myTheme}>
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
                  error={!username || !usernameCheck || !usernameReg}
                  helperText={!username ? 'กรุณากรอก Username' : '' || !usernameCheck ? 'Username นี้มีผู้ใช้งานแล้ว' : '' || !usernameReg ? 'ต้องมีอักษร 6 ตัวขึ้นไป' : ''}
                  onChange={(event) => setUsername(event.target.value)}
                  onBlur={onBlurUsername}
                  placeholder="ห้ามเป็นภาษาไทย และอักขระพิเศษ"
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
                  error={!email || !emailCheck || !emailReg}
                  helperText={!email ? 'กรุณากรอก Email' : '' || !emailCheck ? 'Email นี้มีผู้ใช้งานแล้ว' : '' || !emailReg ? 'กรุณากรอก Email ให้ถูกต้อง' : ''}
                  onChange={(event) => setEmail(event.target.value)}
                  onBlur={onBlurEmail}
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
                  error={!password}
                  helperText={!password ? 'กรุณากรอกรหัสผ่าน' : ''}
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
                  error={!comfirmPassword }
                  helperText={!comfirmPassword ? 'กรุณายืนยันรหัสผ่าน' : ''}
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
                  error={!firstName}
                  helperText={!firstName ? 'กรุณากรอกชื่อ' : ''}
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
                  error={!lastName}
                  helperText={!lastName ? 'กรุณากรอกนามสกุล' : ''}
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
                  error={!tel}
                  helperText={!tel ? 'กรุณากรอกเบอร์โทรศัพท์' : ''}
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