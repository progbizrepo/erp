import React from 'react'
import "./Header.css"
import Image from 'next/image';
import Link from 'next/link'
import Button from '../Button/Button';

const Header = () => {
 
  return (


    <nav className="navbar-top navbar navbar-expand-md ">
      <div className="container-fluid">
      {/* <Link className="navbar-brand me-auto d-block d-md-none" href="#">
            <Image
              src="/images/logo/ERP_iconLogo.png" 
              width={50}
              height={50}
              alt="Progbiz"
            />
          </Link> */}
          <Link className="navbar-brand mx-auto d-none d-md-block" href="#">
            <Image
              src="/images/logo/ERP_iconLogo.png" 
              width={50}
              height={50}
              alt="Progbiz"
            />
          </Link>
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0" >
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        
            </li>
            <li className="nav-item">
            <Link className="nav-link" href="/Features">Features</Link>
          
            </li>
            <li className="nav-item">
            <Link className="nav-link " href="/Why Choose">WhyChoose</Link>

            </li>
          
          </ul>
         

          <Button  text="Book a Demo"
        backgroundColor="#B8FF33"
        color="#191919"
    
        />
        </div>
      </div>
    </nav>

  )
}

export default Header
