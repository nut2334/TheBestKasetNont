import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import myTheme from '../core-ui/theme';
import { ThemeProvider } from '@mui/material/styles';


export default function ForgotEmail({ onNext }) {
  const [email, setEmail] = React.useState(true);
  const handleNext  = () => {
    if (typeof email !== 'string' || email.trim() === '') {
      alert('กรุณากรอกอีเมล');
      return;
    }
    onNext({ email });
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ลืมรหัสผ่าน
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => setEmail(event.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,color:'white'}}
              color="primary"
              onClick={handleNext}
            >
              ถัดไป
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
