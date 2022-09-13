import React from 'react';
import Appointment from './Components/Appointment/Appointment';
import Banner from './Components/Banner/Banner';
import Services from './Components/Service/Services';
import Navbar from './Components/shared/Navbar';
import Treatment from './Components/Treatment/Treatment';

const App = () => {
  return (
    <div style={{backgroundColor: "#F7F7F7"}}>
     <Navbar>
      <Banner></Banner>
      <Services></Services>
      <Treatment></Treatment>
      <Appointment></Appointment>
     </Navbar>
     
    </div>
  );
};

export default App;
