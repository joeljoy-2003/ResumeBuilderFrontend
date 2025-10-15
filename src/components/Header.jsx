import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';


function Header() {
  const content = "A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews."
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
            >
              <img src='https://cdn-icons-png.flaticon.com/512/6614/6614677.png' alt='' style={{ width: "50px" }} ></img>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link to={"/"} style={{textDecoration:"none",color:"white"}}> RBuilder</Link>
          </Typography>
            <Tooltip title={content}><Button color="inherit">About US</Button></Tooltip>
          </Toolbar>
        </AppBar>
      </Box>

    </>
  )
}

export default Header