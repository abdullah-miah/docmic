import React from 'react';
import Appointment from './Components/Appointment/Appointment';
import Banner from './Components/Banner/Banner';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';
import Services from './Components/Service/Services';
import Navbar from './Components/shared/Navbar';
import Testimonial from './Components/Testimonial/Testimonial';
import Treatment from './Components/Treatment/Treatment';

const App = () => {
  return (
    <div>
      <div style={{backgroundColor: "#F7F7F7"}}>
     <Navbar>
      <Banner></Banner>
      <Services></Services>
      <Treatment></Treatment>
      <Appointment></Appointment>
      <FAQ></FAQ>
      <Testimonial/>
      <Footer></Footer>
     </Navbar>
    </div>
    
    </div>
  );
};

export default App;
