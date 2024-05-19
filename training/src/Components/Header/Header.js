import React from 'react';
import "./Header.css";

function Header() {
  return (
    <div className='header'>
        <div className='navbar'>
                <div> <a className='train' href=''>VC Training</a></div>
                <div> <a href=''>Home </a></div>
                <div> <a href=''>Programms </a></div>
                <div>  <a href=''>Online test </a></div>
                <div> <a href=''>Monetors</a></div>
                <div> <a className='student' href=''>Students</a></div>
                <div> <a href=''>Login</a></div>
                <div>  <a href=''>Get start</a></div>
        </div>
    </div>
  )
}

export default Header