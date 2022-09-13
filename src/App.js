import React from 'react';
import Banner from './Components/Banner/Banner';
import Services from './Components/Service/Services';
import Navbar from './Components/shared/Navbar';

const App = () => {
  return (
    <div style={{backgroundColor: "#F7F7F7"}}>
     <Navbar>
      <Banner></Banner>
      <Services></Services>
     </Navbar>
     
    </div>
  );
};

export default App;
