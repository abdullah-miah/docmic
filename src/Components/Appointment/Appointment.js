import React from 'react';
import "./../Appointment/Appointment.css"
import frame_2 from "../../assets/images/Frame_2.png"
import group_1 from "../../assets/images/Group_1.png";
import group_2 from "../../assets/images/Group_2.png";
import group_3 from "../../assets/images/Group_3.png";
import group_4 from "../../assets/images/Group_4.png";

const Appointment = () => {
    return (
        <div className='px-44 mt-14'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div>
                <img src={frame_2}></img>
              </div>
              <div>
                <h1 className='text-secondary'>Our Hospital Feature</h1>
                <h2 className='text-3xl font-medium text-success mt-3.5'>Make An Appointment Easy And Fast Services</h2>
              <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='bg-base-100 box mt-3.5'>
            <div className='flex justify-between ml-2 p-2'>
                <p className='text-success'> 24 Hours Doctor Support </p>
                <img src={group_1}/>
            </div>
            <p className='text-success text-sm ml-2 px-2'>
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            </p>
            </div>
              <div className='bg-base-100 box mt-3.5'>
            <div className='flex justify-between ml-2 p-2'>
                <p className='text-success'>Exclusive Supports </p>
                <img src={group_2}/>
            </div>
            <p className='text-success text-sm ml-2 px-2'>
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            </p>
            </div>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='bg-base-100 box mt-3.5'>
            <div className='flex justify-between ml-2 p-2'>
                <p className='text-success'> Friendly Environment  </p>
                <img src={group_3}/>
            </div>
            <p className='text-success text-sm ml-2 px-2'>
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            </p>
            </div>
              <div className='bg-base-100 box mt-3.5'>
            <div className='flex justify-between ml-2 p-2'>
                <p className='text-success'>Exclusive Supports </p>
                <img src={group_4}/>
            </div>
            <p className='text-success text-sm ml-2 px-2'>
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            </p>
            </div>
              </div>
              </div>
            </div>
        </div>
    );
};

export default Appointment;