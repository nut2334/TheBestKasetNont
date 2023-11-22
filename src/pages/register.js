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
                  error={!username}
                  helperText={!username ? 'กรุณากรอก Username' : ''}
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
                  error={!email}
                  helperText={!email ? 'กรุณากรอก Email' : ''}
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
                  error={!comfirmPassword}
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