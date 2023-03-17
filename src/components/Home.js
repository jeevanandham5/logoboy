import React from 'react'
import './home.css';
import TextField from '@mui/material/TextField';
import  Box  from '@mui/material/Box';
import gag from '../asset/images/gag.PNG'


    



const Home = () => {
  return (
    <>
    <Box sx={{
         width: 1920,
         height: 300,
         backgroundColor: '#b0c9ff',
        
    }} 
    className='Background'>
    <div className='heading'>
        <h2>Stunning startup logos to go</h2>
        <h3>Create your logo in seconds with Logobly logo maker</h3>
        <div className="inputbox">
            <div className="input">
         <TextField id="outlined-basic"  label="your brand" variant="outlined" />
         </div>
         
         </div>
           <h4>Free to create. Pay to download.</h4>
        </div>
       
        </Box>
        <img src={gag}  alt='gagimage' className="gag"/>
        <Box className="bottom" sx={{ 
                   height:260,
                   backgroundColor: '#f8f8f8', 
                    }}>
                      <div className="subheading">
                     <h4>Featured on</h4>
                     </div>
                     <div className="bottomsub">
                    <img decoding="async" width="600" height="200" 
                    src="https://logobly.com/wp-content/uploads/logo_startup_resources_03.png" 
                   
                    alt="Logo Startup Resources" 
                    loading="lazy" 
                    srcset="https://logobly.com/wp-content/uploads/logo_startup_resources_03.png 600w, https://logobly.com/wp-content/uploads/logo_startup_resources_03-300x100.png 300w"
                     sizes="(max-width: 600px) 100vw, 600px"></img>
                     <img decoding="async" width="600" height="200" 
                     src="https://logobly.com/wp-content/uploads/logo_product_hunt_03.png" 
                    
                     alt="Logo Product Hunt" 
                     loading="lazy" 
                     srcset="https://logobly.com/wp-content/uploads/logo_product_hunt_03.png 600w, https://logobly.com/wp-content/uploads/logo_product_hunt_03-300x100.png 300w" 
                     sizes="(max-width: 600px) 100vw, 600px"></img>
                     <img decoding="async" width="600" height="200"
                      src="https://logobly.com/wp-content/uploads/logo_indie_hackers_03.png" 
                      alt="Logo Indie Hackers" 
                      loading="lazy"
                       srcset="https://logobly.com/wp-content/uploads/logo_indie_hackers_03.png 600w, https://logobly.com/wp-content/uploads/logo_indie_hackers_03-300x100.png 300w" 
                       sizes="(max-width: 600px) 100vw, 600px"></img>
                       </div>
                   </Box>
    </>
   
  )
}

export default Home