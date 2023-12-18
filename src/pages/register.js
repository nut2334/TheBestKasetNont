import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import myTheme from "../core-ui/theme";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = React.useState(true);
  const [usernameCheck, setUsernameCheck] = React.useState(true);
  const [usernameReg, setUsernameReg] = React.useState(true);

  const [email, setEmail] = React.useState(true);
  const [emailCheck, setEmailCheck] = React.useState(true);
  const [emailReg, setEmailReg] = React.useState(true);

  const [password, setPassword] = React.useState(true);
  const [passwordCheck, setPasswordCheck] = React.useState(true);

  const [comfirmPassword, setComfirmPassword] = React.useState(true);
  const [comfirmPasswordCheck, setComfirmPasswordCheck] = React.useState(true);

  const [showPassword, setShowPassword] = React.useState(false);
  const [showComfirmPassword, setShowComfirmPassword] = React.useState(false);

  const [firstName, setFirstName] = React.useState(true);
  const [firstNameValidate, setFirstNameValidate] = React.useState(true);

  const [lastName, setLastName] = React.useState(true);
  const [lastNameValidate, setLastNameValidate] = React.useState(true);

  const [sameLang, setSameLang] = React.useState(true);

  const [tel, setTel] = React.useState(true);
  const [telValidate, setTelValidate] = React.useState(true);

  const url = "http://localhost:3001";

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowComfirmPassword = () => {
    setShowComfirmPassword(!showComfirmPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownComfirmPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setUsername(data.get("username"));
    setEmail(data.get("email"));
    setPassword(data.get("password"));
    setComfirmPassword(data.get("comfirmPassword"));
    setFirstName(data.get("firstName"));
    setLastName(data.get("lastName"));
    setTel(data.get("tel"));

    if (
      usernameCheck &&
      emailCheck &&
      passwordCheck &&
      comfirmPasswordCheck &&
      firstNameValidate &&
      lastNameValidate &&
      telValidate
    ) {
      const userData = {
        username: username,
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        tel: tel,
      };
      fetch(url + "/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  const onBlurUsername = (event) => {
    const userData = {
      username: event.target.value,
    };
    const reg = new RegExp("^[a-zA-Z0-9_]{6,}$");
    if (reg.test(userData.username)) {
      setUsernameReg(true);
      sendToBackend(userData);
    } else {
      setUsernameReg(false);
    }
  };
  const onBlurEmail = (event) => {
    const userData = {
      email: event.target.value,
    };
    const emailRegExp = new RegExp(
      "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$"
    );
    if (emailRegExp.test(userData.email)) {
      setEmailReg(true);
      sendToBackend(userData);
    } else {
      setEmailReg(false);
    }
  };
  const validatePassword = (event) => {
    const regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regExp.test(event.target.value)) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }
  };

  const checkComfirmPassword = (event) => {
    if (event.target.value == password) {
      setComfirmPasswordCheck(true);
    } else {
      setComfirmPasswordCheck(false);
    }
  };
  const checkLang = (event) => {
    const thaiRegExp = /^[ก-๏เ-๙]+$/;
    const englishRegExp = /^[a-zA-Z]+$/;

    let isFirstNameThai = thaiRegExp.test(event.target.value);
    let isFirstNameEnglish = englishRegExp.test(event.target.value);
    let isLastNameThai = thaiRegExp.test(event.target.value);
    let isLastNameEnglish = englishRegExp.test(event.target.value);

    switch (event.target.id) {
      case "firstName":
        if (isFirstNameThai) {
          setFirstNameValidate(true);
        } else if (isFirstNameEnglish) {
          setFirstNameValidate(true);
        } else {
          setFirstNameValidate(false);
        }
        break;
      case "lastName":
        if (isLastNameThai) {
          setLastNameValidate(true);
        } else if (isLastNameEnglish) {
          setLastNameValidate(true);
        } else {
          setLastNameValidate(false);
        }
        break;
    }
    if (thaiRegExp.test(firstName) && thaiRegExp.test(lastName)) {
      setSameLang(true);
    } else if (englishRegExp.test(firstName) && englishRegExp.test(lastName)) {
      setSameLang(true);
    } else {
      setSameLang(false);
    }
  };

  const validateTel = (event) => {
    const regExp = /^0[0-9]{9}$/;
    if (regExp.test(event.target.value)) {
      setTelValidate(true);
    } else {
      setTelValidate(false);
    }
  };

  const sendToBackend = (jsonData) => {
    let api = url;
    if (jsonData.hasOwnProperty("username")) {
      api = api + "/checkinguser";
    } else if (jsonData.hasOwnProperty("email")) {
          api = api + "/checkingemail";
    }
    console.log(api);
    axios.post(api,jsonData , {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response.data)
      if (response.data.same == false) {
        if (response.data.username) {
          setUsernameCheck(false);
        } else if (response.data.email) {
          setEmailCheck(false);
        }
      } else {
        if (response.data.username) {
          setUsernameCheck(true);
        } else if (response.data.email) {
          setEmailCheck(true);
        }
      }
    });
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "green" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            สมัครสมาชิก
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  error={!username || !usernameCheck || !usernameReg}
                  helperText={
                    !username
                      ? "กรุณากรอก Username"
                      : "" || !usernameCheck
                      ? "Username นี้มีผู้ใช้งานแล้ว"
                      : "" || !usernameReg
                      ? "ต้องมีอักษร 6 ตัวขึ้นไป"
                      : ""
                  }
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
                  helperText={
                    !email
                      ? "กรุณากรอก Email"
                      : "" || !emailCheck
                      ? "Email นี้มีผู้ใช้งานแล้ว"
                      : "" || !emailReg
                      ? "กรุณากรอก Email ให้ถูกต้อง"
                      : ""
                  }
                  onChange={(event) => setEmail(event.target.value)}
                  onBlur={onBlurEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(event) => setPassword(event.target.value)}
                  onBlur={validatePassword}
                  error={!password || !passwordCheck}
                  fullWidth
                  helperText={
                    !password
                      ? "กรุณากรอกรหัสผ่าน"
                      : "" || !passwordCheck
                      ? "ต้องมีตัวอักษร 8 ตัวขึ้นไป และมีตัวเลขอย่างน้อย 1 ตัว"
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(event) => setComfirmPassword(event.target.value)}
                  onBlur={checkComfirmPassword}
                  error={!comfirmPassword || !comfirmPasswordCheck}
                  fullWidth
                  helperText={
                    !comfirmPassword
                      ? "กรุณายืนยันรหัสผ่าน"
                      : "" || !comfirmPasswordCheck
                      ? "รหัสผ่านไม่ตรงกัน"
                      : ""
                  }
                  id="comfirmPassword"
                  required
                  label="ยืนยันรหัสผ่าน"
                  variant="outlined"
                  type={showComfirmPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle comfirm password visibility"
                          onClick={handleClickShowComfirmPassword}
                          onMouseDown={handleMouseDownComfirmPassword}
                        >
                          {showComfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(event) => setFirstName(event.target.value)}
                  onBlur={(event) => checkLang(event)}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="ชื่อ"
                  error={!firstName || !firstNameValidate || !sameLang}
                  helperText={
                    !firstName
                      ? "กรุณากรอกชื่อ"
                      : "" || !firstNameValidate
                      ? "ชื่อต้องเป็นภาษาไทย หรือ ภาษาอังกฤษ"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(event) => setLastName(event.target.value)}
                  onBlur={(event) => checkLang(event)}
                  required
                  fullWidth
                  id="lastName"
                  label="นามสกุล"
                  name="lastName"
                  autoComplete="family-name"
                  error={!lastName || !lastNameValidate || !sameLang}
                  helperText={
                    !lastName
                      ? "กรุณากรอกนามสกุล"
                      : "" || !lastNameValidate
                      ? "นามสกุลต้องเป็นภาษาไทย หรือ ภาษาอังกฤษ"
                      : "" || !sameLang
                      ? "ชื่อและนามสกุลต้องเป็นภาษาเดียวกัน"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(event) => setTel(event.target.value)}
                  onBlur={validateTel}
                  required
                  fullWidth
                  name="tel"
                  label="เบอร์โทรศัพท์"
                  id="tel"
                  autoComplete="tel"
                  error={!tel || !telValidate}
                  helperText={
                    !tel
                      ? "กรุณากรอกเบอร์โทรศัพท์"
                      : "" || !telValidate
                      ? "เบอร์โทรศัพท์ไม่ถูกต้อง"
                      : ""
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              style={{ color: "#fff" }}
            >
              ยืนยัน
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
