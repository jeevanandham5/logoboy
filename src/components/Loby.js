import React from 'react'
import './loby.css';
import BrushIcon from '@mui/icons-material/Brush';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';


const Loby = () => {
  return (
    <>
    <div className="loby">
        <h6>How Matrial logo works </h6>
<div className="lobycont">
<BrushIcon sx={{ fontSize:100 ,color:'#1976d2' }}/>
<h6>Design</h6>
<p>Create your professional brand in seconds with our free logo maker</p>
</div>
<div className="lobycont">
<CloudDownloadIcon sx={{ fontSize:100 ,color:'#1976d2' }}/>
<h6>Download</h6>
<p>Choose your perfect logo and checkout securely</p>
</div>
<div className="lobycont">
<RocketLaunchIcon sx={{ fontSize:100 ,color:'#1976d2' }}/>
<h6>Brand</h6>
<p>Download your company logos and brand your startup</p>
</div>
    </div>
    </>
  )
}

export default Loby