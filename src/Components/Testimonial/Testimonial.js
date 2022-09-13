import React from 'react';
import "../Testimonial/Testimonial.css"
import ikbal from "../../assets/images/Ikbal.png"

const Testimonial = () => {
    return (
        <div className='px-44 mb-8'>
            <div className='slider-main'>
                <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
     <div className='slider-capiton'>
        <div className='grid grid-cols-2 gap-4'>
        <div className='p-4 ml-4 full-capiton'>
            <h1>David Jeams</h1>
            <p>Pratient</p>
            <p className='mt-4'>simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever
                 since the 1500s, when an unknown printer took a galley of type
                  and scrambled it is a long established 
                fact that a reader will be distracted by the readable content </p>
        </div>
        <div className='flex justify-center items-center mt-4'>
            <img src={ikbal}/>
        </div>
        </div>
     </div>
      <div class="carousel-caption text-info hidden md:block absolute text-center">
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
    <div className='slider-capiton'>
        <div className='grid grid-cols-2 gap-4'>
        <div className='p-4 ml-4 full-capiton'>
            <h1>David Jeams</h1>
            <p>Pratient</p>
            <p className='mt-4'>simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever
                 since the 1500s, when an unknown printer took a galley of type
                  and scrambled it is a long established 
                fact that a reader will be distracted by the readable content </p>
        </div>
        <div className='flex justify-center items-center mt-4 '>
            <img src={ikbal}/>
        </div>
        </div>
     </div>
    </div>
    <div class="carousel-item relative float-left w-full">
    <div className='slider-capiton'>
        <div className='grid grid-cols-2 gap-4'>
        <div className='p-4 ml-4 full-capiton'>
            <h1>David Jeams</h1>
            <p>Pratient</p>
            <p className='mt-4'>simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever
                 since the 1500s, when an unknown printer took a galley of type
                  and scrambled it is a long established 
                fact that a reader will be distracted by the readable content </p>
        </div>
        <div className='flex justify-center items-center mt-4'>
            <img src={ikbal}/>
        </div>
        </div>
     </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
     id='control'
    class="carousel-control-next relative top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span  class=" text-primary carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
        </div>
    );
};

export default Testimonial;