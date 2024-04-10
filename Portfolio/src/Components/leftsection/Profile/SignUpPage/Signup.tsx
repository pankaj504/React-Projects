import React from 'react'
import ImageUploader from 'react-images-upload';

import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import './Signup.css'
const Signup = () => {
  return (

    <>
      <div className="main-section">

        <div className="main-section-text">
          <h3>dribble</h3>
        </div>
        <div className="main-content">
          <h2>Welcome! Let's create your profile</h2>
          <p>Let others get to know you better! You can do these later</p>
          <h3 className='h3'>Add an avatar</h3>
          <CameraEnhanceIcon style={{ color: 'gray', height: "20", width: '20', border: '1px dotted black', borderRadius: '100px', padding: '50', borderColor: "gray",cursor:"pointer" }} />
          <div className="upload">
            <ImageUploader withIcon={false}
             className="custom-image-uploader"
              buttonText='Choose image'
              withPreview={true}
              singleImage={true}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}  />
            <p>  <img src="/greater-than.png" alt="" /> Or choose one of our defaults</p>
          </div>

          <h3>Add your location</h3>
          <input type="text" placeholder='Enter a location' className='input' />
          <button>Next</button>
        </div>

      </div>

    </>
  )
}

export default Signup
