import React from 'react'
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import myTheme from '../core-ui/theme';
import { ThemeProvider } from '@mui/material/styles';
import Container from "@mui/material/Container";


const ForgotName = ({email,onPrev,onNext}) => {
    const [firstName, setFirstName] = React.useState(true);
    const [lastName, setLastName] = React.useState(true);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (typeof firstName !== 'string' || firstName.trim() === '') {
            alert('กรุณากรอกชื่อ');
            return;
        }
        if (typeof lastName !== 'string' || lastName.trim() === '') {
            alert('กรุณากรอกนามสกุล');
            return;
        }
        fetch("http://localhost:3001/forgot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                firstName: firstName,
                lastName: lastName,
            }),
        }).then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            if (data.email == false) {
                alert("โปรดป้อนอีเมลที่ถูกต้อง");
                onPrev();

            }
            else if (data.name == false) {
                onNext();
            }
        })
    }
    return (
        <ThemeProvider theme={myTheme}>
        <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
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
              id="firstName"
              label="ชื่อ"
              name="firstName"
              autoFocus
              onChange={(event) => setFirstName(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="นามสกุล"
              name="lastName"
              autoFocus
              onChange={(event) => setLastName(event.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,color:'white'}}
              color="primary"
              type="submit"
            >
              ยืนยัน
            </Button>
          </Box>
        </Box>
        </Container>
        </ThemeProvider>
    )
}

export default ForgotName