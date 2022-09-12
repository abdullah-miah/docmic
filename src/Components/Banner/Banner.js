import React from 'react';
import './../Banner/Banner.css'
import pose_2 from "../../assets/images/pose_1.png"
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
                <a id='banner-btn' className=' bg-primary text-white'>Meet Our Specialist</a>
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
                <div id='banner-col-2'>
                  <div id='inner' className='flex justify-center items-center'>
                    <div>
                    <img  src={pose_2}></img>
                    </div>
                  </div>
                </div>
                <div id='btn-checkup' className='bg-secondary text-white'>
                    <a className='flex justify-center items-center text-center'>Regular Checkup</a>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;