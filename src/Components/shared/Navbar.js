import React from 'react';
import './../shared/Navbar.css'

const Navbar = ({children}) => {
    return (
        <div>
            <div class="drawer drawer-end">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">
    {/* <!-- Navbar --> */}
    <div id='navbar-bg'  class="w-full navbar lg:px-44">
    <div class="flex-1 px-2 mx-2 text-2xl font-bold text-primary">Docmic.</div>
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal text-info">
          {/* <!-- Navbar menu content here --> */}
          <li ><a className='rounded-md' style={{color: "#2D89FF"}}>Home</a></li>
          <li><a className='rounded-md'>About</a></li>
          <li><a className='rounded-md'>Department</a></li>
          <li><a className='rounded-md'>Pages</a></li>
          <li><a className='rounded-md'>Blog</a></li>
          <li><a className='rounded-md'>Contact</a></li>
          <li><a className='rounded-md bg-primary text-white ml-20'>Free consulation</a></li>
        </ul>
      </div>
    </div>
    {/* <!-- Page content here --> */}
    {children}
  </div> 

  
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      {/* <!-- Sidebar content here --> */}
      <li ><a className='rounded-md' style={{color: "#2D89FF"}}>Home</a></li>
          <li><a className='rounded-md'>About</a></li>
          <li><a className='rounded-md'>Department</a></li>
          <li><a className='rounded-md'>Pages</a></li>
          <li><a className='rounded-md'>Blog</a></li>
          <li><a className='rounded-md'>Contact</a></li>
      
    </ul>
    
  </div>
</div>
        </div>
    );
};

export default Navbar;