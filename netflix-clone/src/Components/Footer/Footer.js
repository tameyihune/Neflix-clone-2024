import React from 'react'
import"./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer=() =>{
  return (
    <div className='footer_outer_container'>
         <div className='footer_inner_container'>
            <div className='footer_icons'>
              <FacebookIcon/>
              <InstagramIcon/>
              <YouTubeIcon/>
             </div>
          <div className='footer_data'>
                <div>
                   <ul>
                       <li>Aduio Description</li>
                       <li>Investor Relation</li>
                       <li>Legal Service</li>
                   </ul>
                </div>
                <div>
                    <ul> 
                       <li>Help Center</li>
                       <li>Jobs</li>
                       <li>Cooki Preferance</li>
                    </ul>
                </div>  
                <div>
                    <ul> 
                       <li>Gift Cads</li>
                       <li>Terms of Use</li>
                       <li>Corporate Information</li>
                    </ul>
                </div> 
                <div>
                    <ul> 
                       <li>Mediaa Center</li>
                       <li>Privacy</li>
                       <li>Contact Us</li>
                    </ul>
                </div> 
            </div>
            <div className='service_code'>
                    <p>
                      Service Code
                    </p>
                </div>
                <div className='copy_write'>
                  &copy;1997-2024 Netflix,Inc.
                </div>
        </div>
    </div>
  )
}

export default Footer