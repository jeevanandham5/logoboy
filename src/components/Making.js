import React from 'react'
import './rating.css'
import applogo from '../asset/logo/applogo3.png';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';


const Making = () => {
  return (
    <>
    <div className="body">
    <h1>Design your brand today</h1>
<p>Use Logobly, the logo maker for founders</p>
    <div className="making">
       
        <a className='lastbtn' target='_blank' href='https://icons8.com/icon/set/logos/color'>Create your logo</a>
    </div>
    </div>
    <div className="footer">
<img src={applogo} alt="applogo"/>
<h1>stay in touch</h1>
<div className="icon">
 <YouTubeIcon sx={{ fontSize: 100 ,color:'#f44336'}}/>
   <FacebookIcon sx={{ fontSize: 100 , color:'#1976d2'}}/>
    <EmailIcon sx={{ fontSize: 100,color:'#9e9e9e' }}/>
<GitHubIcon sx={{ fontSize: 100,color:'#424242' }}/>
<LanguageIcon sx={{ fontSize: 100 ,color:'#0d47a1'}}/>
</div>
<div className="copyrig">
<h4>All copyrights are recived &copy;</h4>
</div>
    </div>
    </>
  )
}

export default Making