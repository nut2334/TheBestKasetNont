import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import myTheme from "../core-ui/theme";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const ForgotError = () => {
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
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ลืมรหัสผ่าน
          </Typography>
          <Box sx={{marginTop: 8}}>
          <Typography component="h1" variant="h6">
            ไม่มีบัญชีที่ตรงกับข้อมูลที่ระบุ
          </Typography>
          </Box>
          <NavLink to="/Forgot" style={{ textDecoration: "none" }}>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, color: "white" }}
            color="primary"
          >
            ลองอีกครั้ง
          </Button>
          </NavLink>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ForgotError;
