import React from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom'

const Listproduct = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  
  return (
    
    <Container component="main" maxWidth="md">
      <Grid container spacing={2}>
         <Grid item xs={12} sm={6}>
    <TextField id="outlined-basic" label="ชื่อสินค้า" variant="outlined" fullWidth  /></Grid>
    <Grid item xs={12} sm={6}>
    <TextField
          id="outlined-select-currency"
          select
          label="ประเภทสินค้า"
          defaultValue="EUR"
          fullWidth 
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
    </TextField>
    </Grid>
    <Grid item xs={12} sm={6}>
    <TextField
          id="outlined-select-currency"
          select
          label="หมวดหมู่สินค้า"
          defaultValue="EUR"
          fullWidth 
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
    </TextField>
    </Grid>
    <Grid item xs={12} sm={6}>
    <TextField
          id="outlined-select-currency"
          select
          label="ตรามาตรฐาน"
          defaultValue="EUR"
          fullWidth
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
    </TextField>
    </Grid>
    <Grid item xs={12} sm={6}>
    <Button variant="contained" color='secondary' startIcon={<SearchIcon />} style={{ marginRight: '8px' }}>ค้นหา</Button>
    <NavLink to="/Product">
    <Button variant="contained" color='primary' startIcon={<AddIcon />}>เพิ่มสินค้า</Button>
    </NavLink>
    </Grid>
    </Grid>
    <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </Container>
  )
}

export default Listproduct