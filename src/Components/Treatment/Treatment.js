import React from 'react';
import frame_1 from "../../assets/images/Frame_1.png"
import "./../Treatment/Treatment.css"
const Treatment = () => {
    return (
        <div className='px-44 mt-14'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className='treatment-box'>
                <h1 className='text-secondary'>16+ Years Experiences </h1>
                <h2 className='text-3xl text-success mt-3.5 font-medium'>
                We Are Always ensure Best Medical 
                <br/>
                Treatment For Your Health
                </h2>
                <p className='mt-3.5 text-info'>
                simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley
                 of type and scrambled it is a long established fact that a
                  reader will be distracted by the readable content of a page
                   when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal distribution of letters, as 
                    opposed to using 'Content here, content here', making it look lik
                </p>
            </div>
            <div className='flex justify-center'>
                <img src={frame_1}></img>
            </div>
            </div>
        </div>
    );
};

export default Treatment;