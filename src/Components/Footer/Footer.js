import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faGoogle, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import React from 'react';
const Footer = () => {
    return (
        <div style={{backgroundColor: "#E9EEF7"}} className="p-8">
            <div className='px-44'>
                <div className='grid grid-cols-1 lg:grid-cols-4 p-4'>
                 <div>
                    <h1 className=' font-medium text-primary'>Docmic.</h1>
                 <p className='mt-2'>simply dummy text of the printing and 
                    typesetting industry. 
                    Lorem 
                    <br/>Ipsum has bee</p>
                    <ul className='flex'>
                    <li><a href='#'>
                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                        </a></li>
                    <li><a href='#'>
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                        </a></li>
                    <li><a href='#'>
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                        </a></li>
                    <li><a href='#'>
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        </a></li>
                    <li><a href='#'>
                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                        </a></li>
                    </ul>
                 </div>
                 <div className='flex justify-center items-center'>
                    <div>
                    <h1 className=' font-medium text-primary'>Quick Linls</h1>
                   <p><a href='#'>About us</a> </p>
                <p><a href='#'>Our Pricing</a> </p>
                <p><a href='#'>Our Gallery</a> </p>
                <p><a href='#'>Appointment</a>  </p>
                <p><a href='#'>Privacy Policy</a> </p>
                    </div>
                 </div>
                 <div className='flex justify-center items-center'>
                 <div>
                    <p><a href='#'>Services</a></p>
                    <p><a href='#'>Our Doctors</a></p>
                    <p> <a href='#'>Our Latest News</a></p>
                    <p> <a href='#'>Careers</a></p>
                    <p> <a href='#'>Contact Us</a></p>
                 </div>
                 </div>
                 <div>
                    <h1 className=' font-medium text-primary'>Opening Hours</h1>
                    <div className='flex '>
                    <div>
                        <p className='text-primary'>Mon- Tue </p>
                        <p className='text-primary'>Wed- Thu </p>
                        <p className='text-primary'>Fri- Sat </p>
                        <p className='text-primary'>Sunday </p>
                        <p className='text-primary'>Personal </p>
                    </div>
                    <div className='ml-6'>
                        <p>08:00 AM- 05:00 PM</p>
                        <p>09:00 AM- 06:00 PM</p>
                        <p>10:00 AM- 07:00 PM</p>
                        <p>Emergency Only</p>
                        <p>Mon- 05:00 PM</p>
                    </div>
                    </div>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;