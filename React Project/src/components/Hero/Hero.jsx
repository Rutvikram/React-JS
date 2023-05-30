import React from 'react'
import'./Hero.css'
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core/import.macro'
import {HiLocationMarker} from'react-icons/hi'
import CountUp from 'react-countup'
const Hero = () => {
  return (
    <section className="hero-wraper">
        <div className="padding innerWidth flexCenter hero-container">
            {/* Left side */}
            <div className="flexCenter flexColStart hero-left">
                <div className=" hero-title">
                    <div className="orange-cercle"/>
                    <h1>Discover<br />Most Suitable<br />Propertiy</h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Find a varitey of properties that sute you vary easilty</span>
                    <span className='secondaryText'>Forget all difficulties in finding a residence for you </span>
                </div>
                <div className="flexCenter serch-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" />                 
                    <button className="button">Serch</button>
                </div>
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span><CountUp start={8800} end={9000} duration={4}/>
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Product</span>                        
                    </div>

                    <div className="flexColCenter stat">
                        <span><CountUp start={1950} end={2000} duration={4}/>
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>                        
                    </div>

                    <div className="flexColCenter stat">
                        <span><CountUp  end={28} />
                        <span>+</span>
                        </span>
                        <span className='secondaryText'>Award Winning</span>                        
                    </div>

                    
                </div>
            </div>
            {/* Right side */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero