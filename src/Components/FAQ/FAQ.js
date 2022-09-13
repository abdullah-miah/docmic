import React, { useState } from 'react';
import "../FAQ/faq.css";
import frame_3 from "../../assets/images/Frame_3.png"
import group_5 from "../../assets/images/Group_5.png"

const FAQ = () => {
const data =[
  {
    question: "Get Your General Answer? ",
    ansewer: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
  },
  {
    question: "Will I always see my own doctor? ",
    ansewer: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
  },
  {
    question: "What is one Medical’s care?  ",
    ansewer: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
  },
  {
    question: "What is evidence based medicine?",
    ansewer: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
  },
  {
    question: "What is an academic medical center? ",
    ansewer: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
  },
]
const [selected, setSelected]=useState(null);
const toggle =(i)=>{
  if(selected === i){
    return setSelected(null);
  }
  setSelected(i);
}

    return (
        <div className='px-44 mt-7'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <h1 className='text-secondary'>FAQ Questions</h1>
                    <h2 className='text-3xl text-success font-medium'>Get Your General Answer </h2>
                     <div className='accordion'>
                     {data.map((item, i)=>(
                      <div className='item'>
                       <div onClick={()=>toggle(i)} className='title text-xl font-medium'>
                        <h2>{item.question}</h2>
                        <span className='text-3xl font-medium text-primary'>{selected===i? '-':'+'}</span>
                       </div>
                       <div className={selected===i? 'show':'content'}>
                        {item.ansewer}
                       </div>
                      </div>
                     ))}
                     </div>
                    
                    </div>
                    <div className='sulotion_exparts'>
                    <div className='flex justify-end'>
                      <img src={frame_3}></img>
                    </div>
                    <div className='expart_btn'>
                      <img src={group_5}></img>
                      <p className='ml-2'>Get Solutions From 
                        <br/>Our Experts</p>
                    </div>
                    </div>
                </div>
            </div>
        
    );
};

export default FAQ;