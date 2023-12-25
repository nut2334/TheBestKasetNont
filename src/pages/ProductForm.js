import React, { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  MenuItem,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import myTheme from "../core-ui/theme";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Divider } from '@mui/material';

const App = () => {
  {/*ชื่อสินค้า*/}
  const [productName, setProductName] = useState("");
  {/*หมวดหมู่สินค้า*/}
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/categories");
      const data = await response.json();
      setCategories(data);
    };
    fetchData();
  }, []);
  {/*รูปปก*/}
  const [productImage, setProductImage] = useState(null);
  {/*วิดีโอ*/}
  const [productVideo, setProductVideo] = useState(null);
  {/*รูปเพิ่มเติม*/}
  const [additionalImages, setAdditionalImages] = useState([]);
  {/*รายละเอียดสินค้า*/}
  const [description, setDescription] = useState("");
  {/*มาตรฐานที่ได้รับ*/}
  const [standardproducts, setStandardproducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/standardproducts");
      const data = await response.json();
      setStandardproducts(data);
    };
    fetchData();
  }, []);
  {/*การใช้งานเว็บไซต์*/}
  const web_activity = [{
    activityID: "activity01",
    activityName: "ประชาสัมพันธ์",
  },{
    activityID: "activity02",
    activityName: "จองสินค้าผ่านเว็บไซต์",
    description: "เก็บข้อมูลการติดต่อของลูกค้าเพียงอย่างเดียว",
  },{
    activityID: "activity03",
    activityName: "จองสินค้าผ่านเว็บไซต์",
    description: "เกษตรกรและลูกค้าสามารถถนัดหมายเวลาได้",
  }];
  const [openDialog, setOpenDialog] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleProductImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  const handleProductVideoChange = (e) => {
    setProductVideo(e.target.files[0]);
  };

  const handleAdditionalImagesChange = (e) => {
    const selectedImage = e.target.files[0];

    if (additionalImages.length < 8) {
      setAdditionalImages([...additionalImages, selectedImage]);
    } else {
      alert("ไม่สามารถเพิ่มรูปภาพเพิ่มเติมได้ รูปภาพไม่ควรเกิน 8 รูป");
    }
  };

  const handleRemoveAdditionalImage = (index) => {
    const updatedImages = [...additionalImages];
    updatedImages.splice(index, 1);
    setAdditionalImages(updatedImages);
  };

  const handleOpenDialog = (index) => {
    setCurrentImageIndex(index);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const onSubmit = async () => {};

  const [producttypes, setProducttypes] = useState([]);
  
  
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/producttypes");
      const data = await response.json();
      setProducttypes(data);
    };
    fetchData();
  }, []);
  

  const [selectedStandard, setSelectedStandard] = useState(
    standardproducts.length > 0 ? standardproducts[0] : null
  );

  const handleStandardChange = (event) => {
    const selectedStandardName = event.target.value;
    const selectedStandard = standardproducts.find(
      (option) => option.standard_name === selectedStandardName
    );
    setSelectedStandard(selectedStandard);
  };
  const [selectedType, setSelectedType] = useState(
    producttypes.length > 0 ? producttypes[0] : null
  );
  const handleTypeChange = (event) => {
    const selectedTypeName = event.target.value;
    const selectedType = producttypes.find(
      (option) => option.TypeName === selectedTypeName
    );
    setSelectedType(selectedType);
  }
const reservation_status = [{
  statusID: "reservationOpenAlways",
  statusName: "เปิดรับจองตลอด",
},{
  statusID: "reservationOpenPeriod",
  statusName: "เปิดรับจองตามช่วงเวลา",
},{
  statusID: "reservationClose",
  statusName: "ปิดรับจอง",
}
];

const [selectedStatus, setSelectedStatus] = useState(
  reservation_status.length > 0 ? reservation_status[0] : null
);
const handleReservationStatusChange = (event) => {
  const selectedStatusName = event.target.value;
  const selectedStatus = reservation_status.find(
    (option) => option.statusName === selectedStatusName
  );
  setSelectedStatus(selectedStatus);
}
  return (
    <ThemeProvider theme={myTheme}>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 5,
            marginBottom: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "green" }}>
            <AddBusinessIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            เพิ่มสินค้า
          </Typography>
        </Box>
        <form>
          <Grid container spacing={2} sx={{ marginBottom: 1 }}>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="ชื่อสินค้า"
                variant="outlined"
                fullWidth
                onChange={(e) => setProductName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-select-currency"
                select
                label="หมวดหมู่สินค้า"
                defaultValue={
                  categories.length > 0 ? categories[0].category_name : ""
                }
                fullWidth
              >
                {categories.map((option) => (
                  <MenuItem
                    key={option.category_id}
                    value={option.category_name}
                  >
                    {option.category_name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h7">
                <AddPhotoAlternateIcon
                  sx={{ marginRight: "5px" }}
                  color="primary"
                />
                รูปปก
              </Typography>
              <input
                type="file"
                accept="image/*"
                onChange={handleProductImageChange}
              />
              {productImage && (
                <div style={{ marginTop: "10px" }}>
                  <img
                    src={URL.createObjectURL(productImage)}
                    alt="Product Cover"
                    style={{
                      width: "100px",
                      height: "100px",
                      margin: "5px",
                      cursor: "pointer",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              )}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h7">
                <VideoFileIcon sx={{ marginRight: "5px" }} color="primary" />
                วิดีโอ
              </Typography>
              <input
                type="file"
                accept="video/*"
                onChange={handleProductVideoChange}
              />
              {productVideo && (
                <div style={{ marginTop: "10px" }}>
                  <video
                    src={URL.createObjectURL(productVideo)}
                    alt="Product Video"
                    style={{ width: "100px", height: "100px" }}
                    controls
                  />
                </div>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h7">
                {" "}
                <AddPhotoAlternateIcon
                  sx={{ marginRight: "5px" }}
                  color="primary"
                />
                รูปเพิ่มเติม (ไม่เกิน 8 รูป)
              </Typography>
              <input
                type="file"
                accept="image/*"
                onChange={handleAdditionalImagesChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Container style={{ overflowX: "auto" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {additionalImages.slice(0, 8).map((image, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginRight: "10px",
                      }}
                    >
                      <img
                        src={image && URL.createObjectURL(image)}
                        alt={`additionalImage-${index}`}
                        style={{
                          width: "100px",
                          height: "100px",
                          margin: "5px",
                          cursor: "pointer",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        onClick={() => handleOpenDialog(index)}
                      />
                    </div>
                  ))}
                </div>
              </Container>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="description"
                label="รายละเอียดสินค้า"
                type="text"
                multiline
                fullWidth
                rows={4}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}><Divider/></Grid>

            <Grid item xs={6}>
              <TextField
                id="outlined-select-currency"
                select
                label="มาตรฐานที่ได้รับ"
                value={selectedStandard ? selectedStandard.standard_name : ""}
                onChange={handleStandardChange}
                fullWidth
              >
                {standardproducts.map((option) => (
                  <MenuItem
                    key={option.standard_id}
                    value={option.standard_name}
                  >
                    {option.standard_name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* ตรวจสอบค่าที่ถูกเลือก*/}
            {selectedStandard && (
              <React.Fragment>
                <Grid item xs={6}>
                  <TextField
                    id="standardNumber"
                    label="หมายเลข"
                    value={selectedStandard.number || ""}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h7">ใบรับรอง</Typography>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProductImageChange}
                  />
                  {productImage && (
                    <div style={{ marginTop: "10px" }}>
                      <img
                        src={URL.createObjectURL(productImage)}
                        alt="Product Cover"
                        style={{
                          width: "100px",
                          height: "100px",
                          margin: "5px",
                          cursor: "pointer",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">วันหมดอายุ</Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker sx={{ width: "100%" }} />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}><Divider/></Grid>
              </React.Fragment>
            )}
            <Grid item xs={6}>
              <TextField select fullWidth label="การใช้งานเว็บไซต์">
                {web_activity.map((activity) => (
                  <MenuItem
                    key={activity.activityID}
                    value={activity.activityID}
                  >
                    {activity.description ? (
                      <>
                        <Typography variant="subtitle1">
                          {activity.activityName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {activity.description}
                        </Typography>
                      </>
                    ) : (
                      <Typography variant="subtitle1">
                        {activity.activityName}
                      </Typography>
                    )}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            {/* ตรวจสอบค่าที่ถูกเลือก*/}
            {selectedType && selectedType.TypeID == "type02" && (
              <React.Fragment>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="ราคามัดจำ"
                    variant="outlined"
                    fullWidth
                    number
                  />
                  </Grid>
                <Grid item xs={6}>
                  <TextField
                    select
                    fullWidth
                    label="สถานะการจอง"
                    onChange={handleReservationStatusChange}
                  >
                    {reservation_status.map((option) => (
                      <MenuItem key={option.statusID} value={option.statusName}>
                        {option.statusName}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                {selectedStatus && selectedStatus.statusID == "reservationOpenPeriod" && (
                  <React.Fragment>
                    <Grid item xs={6}>
                      <Typography variant="subtitle1">วันเริ่มรับจอง</Typography>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker sx={{ width: "100%" }} />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subtitle1">วันสิ้นสุดการจอง</Typography>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker sx={{ width: "100%" }} />
                      </LocalizationProvider>
                    </Grid>
                  </React.Fragment>
                )}
                <Grid item xs={12}><Divider/></Grid>
              </React.Fragment>
            )}
          </Grid>
          <Button onClick={onSubmit} variant="contained">
            ยืนยัน
          </Button>
        </form>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogContent>
            <img
              src={
                additionalImages[currentImageIndex] &&
                URL.createObjectURL(additionalImages[currentImageIndex])
              }
              alt={`additionalImage-${currentImageIndex}`}
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              ปิด
            </Button>
            <Button
              onClick={() => handleRemoveAdditionalImage(currentImageIndex)}
              color="secondary"
              variant="contained"
              startIcon={<DeleteIcon />}
            >
              ลบรูปภาพ
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
};

export default App;
