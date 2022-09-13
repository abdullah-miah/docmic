import React from 'react';
import './../Banner/Banner.css'
import pose_2 from "../../assets/images/pose_1.png"
import checkmark from "../../assets/images/Vector.png"
import ellipse_6 from "../../assets/images/Ellipse_6.png"
import ellipse_7 from "../../assets/images/Ellipse_7.png"
import ellipse_8 from "../../assets/images/Ellipse_8.png"
import ellipse_9 from "../../assets/images/Ellipse_9.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from "@fortawesome/free-solid-svg-icons"
const Banner = () => {
    return (
        <div id='banner-bg' className='lg:px-40 mt-14'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div id='col-1'>
                <h1 id='banner-title' className='text-6xl font-medium'>Your <span className='text-primary'>Health</span> Is Our Top <span className='text-secondary'> Priority</span></h1>
                <p id='banner-p'>
                There are many variations of passages of lpsum 
                <br/>
                available, but the majority hae suffered.
                </p>
                <a id='banner-btn' className=' bg-primary text-white mt-12'>Meet Our Specialist</a>
                <div id='count-width' className='flex justify-between mt-14 text-center gap-x-5'>
                    <div>
                    <p className='text-secondary leading-7 text-2xl mb-1 font-bold'>262k+</p> 
                    <p>Recovered Patients</p>
                    </div>
                    <div>
                    <p className='text-secondary leading-7 text-2xl mb-1 font-bold'>96%</p> 
                    <p>Satisfaction Rate</p>
                    </div>
                    <div>
                    <p className='text-secondary leading-7 text-2xl mb-1 font-bold'>86+</p> 
                    <p>Expert Doctors</p>
                    </div>
                </div>
                </div>
                <div>
               <div className='banner'>
               <div className='banner-col-2'>
                  <div id='inner' className='flex justify-center items-center'>
                    <div className='banner-img'>
                    <img  src={pose_2}></img>
                    </div>
                  </div>
                  
                </div>
                <div className='checkup bg-secondary flex justify-center items-center p-2'>
                <img className='mt-2' src={checkmark}></img>
               <p  className=' text-white mr-1'>Regular Checkup</p>
               </div>
               <div>

               </div>
               <div className='meet-doctor'>
                <div className='p-4'>
                <h1>
                    Meet Our Doctors
                </h1>
                <div className='hugs flex justify-center items-center'>
                <ul className='flex mt-2 justify-center items-center'>
                    <li> <a href='#'><img  src={ellipse_6}></img></a></li>
                    <li className='-ml-1'> <a href='#'><img src={ellipse_7}></img></a></li>
                    <li className='-ml-1'> <a href='#'><img src={ellipse_8}></img></a></li>
                    <li className='-ml-1'> <a href='#'><img src={ellipse_9}></img></a></li>
                </ul>
                <div className='p-1 mt-2'>
                <span  className='bg-primary plus ml-2 p-1 flex justify-center items-center'><a  href='#'>
                        <FontAwesomeIcon className='text-white' icon={faPlus}></FontAwesomeIcon>
                        </a></span>
                </div>
                </div>
                <div className='liner-gradient1 mt-2'>
                </div>
                <div className='liner-gradient2 mt-2'>
                </div>
                </div>
                
               </div>
               </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;