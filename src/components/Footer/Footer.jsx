import React from 'react'

function Footer() {
  return (
    <>
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-start">
  <nav className="max-w-xs">
    <h6 className="footer-title">CS — Ticket System</h6>
   <p>
    A simple and modern customer support ticket system
     designed to help teams manage customer issues efficiently. 
Track tickets in progress, resolve problems quickly, and keep everything organized in one place.
   </p>
  </nav>
  <nav >
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover">Contact Sales</a>
  </nav>
  <nav >
    <h6 className="footer-title">Information</h6>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Join Us</a>
  </nav>
  <nav className="w-full md:w-1/3">
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Products & Services</a>
    <a className="link link-hover">Customer Stories</a>
    <a className="link link-hover">Download Apps</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover flex items-center gap-2" >
      <img src='https://i.ibb.co.com/PZg6CJ1P/fi-5969020.png'></img>
      
      Twitter</a>
    <a className="link link-hover flex items-center gap-2" >
      <img src='https://i.ibb.co.com/r2dncnSk/Group-1.png' />
      
       LinkedIn</a>
    <a className="link link-hover flex items-center gap-2" >
      <img src='https://i.ibb.co.com/XxnwHJym/Group-2.png' />
      
       Facebook</a>
    <a className="link link-hover flex items-center gap-2" >
      <img src='https://i.ibb.co.com/S4fD42CK/Vector-1.png' />
      
       Support@gmail.com</a>
  </nav>

 
</footer>

<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full justify-items-center"> 
  <hr className="border-gray-600" />
  <p className="text-center text-sm text-gray-500 py-4">
    &copy; 2024 CS — Ticket System. All rights reserved.
  </p>

</div>
</>
  )
}

export default Footer
