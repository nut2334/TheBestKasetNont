// import React from "react";
// import myTheme from "../core-ui/theme";
// import { ThemeProvider } from "@mui/material/styles";
// import Avatar from "@mui/material/Avatar";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import InputAdornment from "@mui/material/InputAdornment";
// import IconButton from "@mui/material/IconButton";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import Grid from "@mui/material/Grid";
// import axios from "axios";

// const ResetPassword = () => {
//   const [password, setPassword] = React.useState(true);
//   const [passwordCheck, setPasswordCheck] = React.useState(true);

//   const [comfirmPassword, setComfirmPassword] = React.useState(true);
//   const [comfirmPasswordCheck, setComfirmPasswordCheck] = React.useState(true);

//   const [showPassword, setShowPassword] = React.useState(false);
//   const [showComfirmPassword, setShowComfirmPassword] = React.useState(false);

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };
//   const handleClickShowComfirmPassword = () => {
//     setShowComfirmPassword(!showComfirmPassword);
//   };
//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };
//   const handleMouseDownComfirmPassword = (event) => {
//     event.preventDefault();
//   };
//   const validatePassword = (event) => {
//     const regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     if (regExp.test(event.target.value)) {
//       setPasswordCheck(true);
//     } else {
//       setPasswordCheck(false);
//     }
//   };
//   const checkComfirmPassword = (event) => {
//     if (event.target.value == password) {
//       setComfirmPasswordCheck(true);
//     } else {
//       setComfirmPasswordCheck(false);
//     }
//   };
//   const handleSubmit = (event) => {
//     axios
//       .post("http://localhost:3001/reset_password", {
//         password: event.target.password.value,
//       })
//       .then(function (response) {
//         response.login == true ? alert("สำเร็จ") : alert("ไม่สำเร็จ");
//       });
//   };
//   return (
//     <ThemeProvider theme={myTheme}>
//       <Container component="main" maxWidth="xs">
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             รีเซ็ตรหัสผ่าน
//           </Typography>

//           <Box
//             component="form"
//             noValidate
//             sx={{ mt: 1, marginTop: 5 }}
//             onSubmit={handleSubmit}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   onChange={(event) => setPassword(event.target.value)}
//                   onBlur={validatePassword}
//                   error={!password || !passwordCheck}
//                   fullWidth
//                   helperText={
//                     !password
//                       ? "กรุณากรอกรหัสผ่าน"
//                       : "" || !passwordCheck
//                       ? "ต้องมีตัวอักษร 8 ตัวขึ้นไป และมีตัวเลขอย่างน้อย 1 ตัว"
//                       : ""
//                   }
//                   id="password"
//                   required
//                   label="รหัสผ่าน"
//                   variant="outlined"
//                   type={showPassword ? "text" : "password"}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={handleClickShowPassword}
//                           onMouseDown={handleMouseDownPassword}
//                         >
//                           {showPassword ? <Visibility /> : <VisibilityOff />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   onChange={(event) => setComfirmPassword(event.target.value)}
//                   onBlur={checkComfirmPassword}
//                   error={!comfirmPassword || !comfirmPasswordCheck}
//                   fullWidth
//                   helperText={
//                     !comfirmPassword
//                       ? "กรุณายืนยันรหัสผ่าน"
//                       : "" || !comfirmPasswordCheck
//                       ? "รหัสผ่านไม่ตรงกัน"
//                       : ""
//                   }
//                   id="comfirmPassword"
//                   required
//                   label="ยืนยันรหัสผ่าน"
//                   variant="outlined"
//                   type={showComfirmPassword ? "text" : "password"}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle comfirm password visibility"
//                           onClick={handleClickShowComfirmPassword}
//                           onMouseDown={handleMouseDownComfirmPassword}
//                         >
//                           {showComfirmPassword ? (
//                             <Visibility />
//                           ) : (
//                             <VisibilityOff />
//                           )}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2, color: "white" }}
//               color="primary"
//               type="submit"
//             >
//               ยืนยัน
//             </Button>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default ResetPassword;
