import React from 'react';
import logo from '../asset/logo/applogo3.png';
import '../App.css';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import styled from '@mui/system/styled';


const Bluebtn = styled(Button)({
    background:'#118df0',
    color:'#ffff',
    "&:hover":{
        background:'#155fa0'
        
    }
})

const Header = () => {
  return (
   <>
<header> <Container fixed>
    <div className='containerone'>
   
        <nav>
            <img src={logo} alt="images"/>
          
        </nav>
        <div className='button'>
        <NavLink to="https://icons8.com/icon/set/logos/color" target={'_blank'} className="btnlink"><Bluebtn variant="contained" size="large">
        Create your logo
        </Bluebtn></NavLink>
        </div>
       
    </div>
    </Container>
</header>
 
   </>
  )
}

export default Header