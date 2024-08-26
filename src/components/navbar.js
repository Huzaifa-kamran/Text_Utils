import {React,useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'


export default function Navbar(props) {

  

  const location = useLocation();
  const myStyleSun = {
    display: props.mode === "dark"?"none":"block",
}
const myStyleMoon = {
  display: props.mode === "dark"?"block":"none",
}
  
  return (
         <nav className={`navbar navbar-expand-lg bg-${props.mode}`} data-bs-theme={props.mode}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/'?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/about'?"active":""}`} to="/about">About</Link>
        </li>
      </ul>
    </div>
    <div>
      <button onClick={props.toggleTheme} className='btn '>Button Theme</button>
    </div>
          <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown link
        </button>

        <ul className="dropdown-menu">
          <li>
            <button className='btn bg-primary theme-btn ms-1' onClick={props.toggleTheme} ></button>
            <button className='btn bg-primary theme-btn ms-1' onClick={props.toggleTheme} ></button>
            {/* <button className='btn bg-info theme-btn ms-1' onClick={themeChange("info")}></button> */}
            {/* <button className='btn bg-warning theme-btn ms-1'  onClick={themeChange("warning")}></button> */}
            {/* <button className='btn bg-success theme-btn ms-1'  onClick={themeChange("success")}></button> */}
            {/* <button className='btn bg-danger theme-btn ms-1'  onClick={themeChange("success")} ></button> */}
          </li>
          <li></li>
        </ul>
</div>
    <div className="form-check form-switch order-1"> 
        <label className="btn-container me-5">
            <input checked="checked" type="checkbox" onClick={props.toggleMode}/>
            <svg viewBox="0 0 384 512" style={myStyleSun} height="1em" xmlns="http://www.w3.org/2000/svg" className="moon"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg>
            <svg viewBox="0 0 512 512" style={myStyleMoon} height="1em" xmlns="http://www.w3.org/2000/svg" className="sun"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"></path></svg>
        </label>
    </div>
  </div>
</nav>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired
};
Navbar.defaultProps = {
  title: 'Enter Title'
};