import React from 'react'
import './WhychooseStyle.css'
import why from '../Images/why.jpg'
import Facluty from '../Images/Facluty.png'
import courses from '../Images/courses.png'
import Gaurantee from '../Images/Gaurantee.png'
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react'

const Whychoose = () => {
    useEffect(()=>{
        AOS.init({ duration: 2000 }); 
    },[])
  return (
    <div className='whyChoose'>
        <div className='whyImage'>
            <img src={why} alt='chooose img'/>
        </div>
        <div className='whyContent'>
            <h1>Why Choose Us ?</h1>
            <p>
            we stand out as a beacon of academic excellence, innovation, and holistic development. With state-of-the-art facilities and industry-relevant curriculum, we provide students with hands-on learning opportunities and a supportive environment to thrive. Our commitment to nurturing talent is evident in our alumni's success stories, showcasing the transformative impact of a velalar college of engineering and technology education.
</p>
            
            <div className='whylogo'>
                <div className='division' data-aos ="zoom-in">
                    <img className='firimg' src={Facluty} alt="" />
                    <h3>Experienced Faculty</h3>
                </div>
                <div className='division' data-aos ="zoom-in">
                    <img className='secimg' src={courses} alt="" />
                    <h3>Popular Courses</h3>
                </div>
                <div className='division' data-aos ="zoom-in"   >
                    <img className='thirdimg' src={Gaurantee} alt="" />
                    <h3>Guaranteed Career</h3>
                </div>
                             
            </div>
        </div>
    </div>
  )
}

export default Whychoose
