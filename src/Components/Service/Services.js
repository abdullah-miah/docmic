import React from 'react';
import './../Service/services.css'
import heartLove from "../../assets/images/love.png"
import bill from "../../assets/images/bill.png"
import teeth from "../../assets/images/teeth.png"
import aid from "../../assets/images/aid.png"

const Services = () => {
    return (
        <div className='px-44'>
         <h1 className=' text-secondary text-center font-medium'> Our services</h1> 
         <h2 className='text-center text-success font-medium text-3xl mt-3.5'>Services For Your Health</h2>  
         <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-14'>
           <div className='bg-base-100 box'>
            <div className='flex justify-between p-3 ml-2'>
                <p className='text-success'> Cardiology </p>
                <img src={heartLove}/>
            </div>
            <p className='p-3 text-success ml-2'>
            Seduahag perspiciati under 
            <br/>
            omnised atused error.
            </p>
            <h1 className='p-3 font-medium ml-2'> <a href='#'>Explore Now</a></h1>
            </div> 
           <div className='bg-base-100 box'>
            <div className='flex justify-between p-3 ml-2'>
                <p className='text-success'> Monthly Check Up </p>
                <img src={bill}/>
            </div>
            <p className='p-3 text-success ml-2'>
            Seduahag perspiciati under 
            <br/>
            omnised atused error.
            </p>
            <h1 className='p-3 font-medium ml-2'> <a href='#'>Explore Now</a></h1>
            </div> 
           <div className='bg-base-100 box border-2 border-primary '>
            <div className='flex justify-between p-3 ml-2'>
                <p className='text-success'> Dental Care </p>
                <img src={teeth}/>
            </div>
            <p className='p-3 text-success ml-2'>
            Seduahag perspiciati under 
            <br/>
            omnised atused error.
            </p>
            <h1 className='p-3 font-medium ml-2 text-primary'> <a href='#'>Explore Now</a></h1>
            </div> 
           <div className='bg-base-100 box'>
            <div className='flex justify-between p-3 ml-2'>
                <p className='text-success'> Opthalmology </p>
                <img src={aid}/>
            </div>
            <p className='p-3 text-success ml-2'>
            Seduahag perspiciati under 
            <br/>
            omnised atused error.
            </p>
            <h1 className='p-3 font-medium ml-2'> <a href='#'>Explore Now</a></h1>
            </div> 
         </div>
       
        </div>
    );
};

export default Services;