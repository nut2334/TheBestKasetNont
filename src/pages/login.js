import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import myTheme from '../core-ui/theme';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = React.useState(true);
  const [usernameReg, setUsernameReg] = React.useState(true);
  const [password, setPassword] = React.useState(true); 
  const url = "http://localhost:3001";

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setUsername(data.get("username"));
    setPassword(data.get("password"));
    if(usernameReg){
      const userData = {
        username: username,
        password: password,
      };
      console.log(userData);
      fetch(url + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          if (data.exist == false) {
            alert("Username หรือ Password ไม่ถูกต้อง");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const onBlurUsername = () => {
    const reg = new RegExp("^[a-zA-Z0-9]{6,}$");
    if (reg.test(username)) {
      setUsernameReg(true);
    } else {
      setUsernameReg(false);
    }
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop:1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'green' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            เข้าสู่ระบบ
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              error={!username || !usernameReg}
              helperText={
                !username
                  ? "กรุณากรอก Username"
                  : "" || !usernameReg
                  ? "ห้ามเป็นภาษาไทย และอักขระพิเศษ"
                  : ""
              }
              onChange={(event) => setUsername(event.target.value)}
              onBlur={onBlurUsername}
            />
            <TextField
                  onChange={(event) => setPassword(event.target.value)}
                  error={!password }
                  fullWidth
                  helperText={
                    !password
                      ? "กรุณากรอกรหัสผ่าน"
                      : "" 
                  }
                  id="password"
                  required
                  label="รหัสผ่าน"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="จดจำฉันไว้ในระบบ"
            />
            <Button
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
              sx={{ mt: 3, mb: 2, color: '#fff' }}
            >
              เข้าสู่ระบบ
            </Button>
            <Grid container>
              <Grid item xs>
              <NavLink to="/Forgot" style={{ textDecoration: 'none' }}>
                  ลืมรหัสผ่าน?
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}