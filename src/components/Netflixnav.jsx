import React, { useRef , useEffect} from 'react'
import './netflix.css'
function Netflixnav() {
    const openBtn = useRef(null)
    const closeBtn = useRef(null)
   

   
    const opnBtn =()=>{
        const nav = document.querySelectorAll('.nav')
        console.log("visible open")
        nav.forEach((navElement)=>{
            navElement.classList.add('visible')
        })
    }
    const clsBtn =()=>{
        const nav = document.querySelectorAll('.nav')
        console.log("visible open")
        nav.forEach((navElement)=>{
            navElement.classList.remove('visible')
        })
    }
  return (
    <>
        <button className="nav-btn open-btn" ref={openBtn} onClick={opnBtn}>
            <i className="fas fa-bars"></i>
        </button>
        <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"  className='logo' />
        <p className="text">Mobile Navigation</p>

        <div className="nav nav-black ">
            <div className="nav nav-red ">
                <div className="nav nav-white ">
                    <button className="nav-btn close-btn" ref={closeBtn} onClick={clsBtn}>
                        <i className="fas fa-times"></i>
                    </button>
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"  className='logo' />
                    <ul className="list">
                        
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Locations</a></li>
                    <li><a href="#">Life at Netflix</a></li>
                    <li>
                        <ul>
                            <li><a href="#">Netflix culture memo </a></li>
                            <li><a href="#">Work life balance </a></li>
                            <li><a href="#">Inclusion & diversity </a></li>
                            <li><a href="#">Blog</a></li>
                            
                        </ul>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Netflixnav