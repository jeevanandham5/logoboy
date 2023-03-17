import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar'
import brand from '../asset/images/Capture.PNG';
import "./rating.css";


const Ratingpage = () => {
  return (
    <>
  <div className="ratinghead">
    <h2>Trusted by 1000's of entrepreneurs</h2>
    <Stack className="star" spacing={2}>
      
      <Rating name="half-rating-read" defaultValue={5} precision={4} readOnly />
    </Stack>
    <p>"Love how fast you can get a logo and files."

"Great platform if you need a logo. Had a go at it and found the experience very intuitive. Will definitely use in the future."
</p>
<div className="Avatar" >
<Avatar
  alt="Remy Sharp"
  src="https://i.pravatar.cc/300"
  sx={{ width: 90, height: 90, marginBottom: '20px' }}
/>
<h5>Richard Tan</h5>
<p>
Entrepreneur, Carbon Growth
</p>

</div>
<div className="brand">
<img src={brand} alt="brand"></img>
</div>
  </div>
  </>
  )
}

export default Ratingpage