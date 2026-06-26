import React from 'react';
// import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import dashboard from '../assets/Dashboard.png'
import first from '../assets/first.png'
import secound from '../assets/secound.png'
import { Button, Chip } from '@heroui/react';
export default function Hero(){
  return (
    <section className="bg-[#0D203F] text-white pt-12 pb-16 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(135deg,#081B3A_0%,#0D2554_50%,#081B3A_100%)]
    bg-[size:80px_80px,80px_80px,100%_100%] ">
    <div className='flex-col xl:flex-row xl:flex xl:justify-between container mx-auto gap-7  px-4'>
    <div className='flex-1'>
            <div className=' bg-[rgba(37, 99, 235, 0.12)] text-[15px] border lg:w-4/12 w-[55%] p-2 rounded-xl text-center border-[#2564eb8d]'>
            Enterprise Technology Solutions
            </div>
            <div className='leading-[1.08] md:mb-10 mb-3'>
                <h1 className='md:text-[68px]  text-[50px] font-bold'>Smart Solutions.</h1>
                <span className='md:text-[68px]  text-[50px] font-bold bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>Better Business.</span>
            </div>  
            <p className='mb-10 text-[#989cb6] w-3/4 text-[18px]'>We help businesses grow through ERP solutions, E-commerce platforms, and professional web development tailored to your enterprise needs.</p>
        <div className='flex gap-4 border-b-2 border-[#ffffff14] md:mb-5 md:pb-5 mb-3 pb-3'>
                <Button className=" bg-[#2055DE]
                    rounded-[10px]
                    p-5
                    shadow-[0_0_20px_rgba(32,85,222,0.5)]
                    hover:shadow-[0_0_40px_rgba(32,85,222,0.8)]
                    transition-all duration-300"> <a href="#contact">Book a Demo</a> </Button>
                <Button  className="rounded-[10px] bg-transparent text-white border hover:bg-[rgba(255,255,255,0.08)] p-5 transition-all duration-300"> <a href="#contact">Countact Us</a></Button>
        </div>

        <div className='flex gap-5 mt-3 mb-3'>
            <div>
                <p className='font-bold text-xl'>200+</p>
                <p className='text-[#C0C5CE] text-[12px]'>Projects Delivered</p>
            </div>
            <div>
                <p className='font-bold text-xl'>100+</p>
                <p className='text-[#C0C5CE] text-[12px]'>Happy Clients</p>
            </div>
            <div>
                <p className='font-bold text-xl'>10+</p>
                <p className='text-[#C0C5CE] text-[12px]'>Years Experience</p>
            </div>
        </div>
    </div>
    <div className='flex-1 relative'>
    <img data-aos="zoom-in" src={dashboard} alt="dashboard Image" className='rounded-2xl w-12/12'/>
    <img data-aos="fade-right"  data-aos-delay="500" src={first} alt="dashboard Image" className='rounded-2xl hidden lg:block lg:w-35 absolute top-20 -left-15 '/>
    <img data-aos="fade-up-left"   data-aos-delay="500" src={secound} alt="dashboard Image" className='rounded-2xl hidden lg:block  lg:w-35 absolute  -right-15 -bottom-10'/>
    </div>
    </div>
    </section>
);
}
