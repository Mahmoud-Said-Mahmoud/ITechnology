import { Button, Chip } from '@heroui/react';
import logo from '../assets/logo.png'
import { TbPointFilled } from "react-icons/tb";
import { GrStatusGood } from "react-icons/gr";
import React from 'react';

export default function About(){
  return (
    <section id="about" className="py-20 bg-[#081b3a] relative">
       <div className='bg-[linear-gradient(90deg,_transparent,_rgba(6,182,212,0.3),_rgba(37,99,235,0.2),_transparent)] w-full h-px absolute top-0'></div>
              <div className=' container mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  gap-10 relative  px-4 mb-20' data-aos="fade-up">
                <div className=' bg-[#0a2047] border-[#1b2f52] rounded-[15px] border p-10 max-h-fit relative xl:top-50'>
                <img src={logo} className='w-1/3  mb-8' alt="logo" />
                <p className='text-[#aebbb4] font-bold leading-6 text-[15px]'>Founded with a mission to bridge the gap between enterprise technology and Egyptian businesses, I-Technology has grown to become a trusted partner for companies seeking digital transformation.</p>
                <div className=' grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-5 text-center mt-5 '>

                  <div className='bg-[#2563eb1a] border-[#2563eb33] rounded-[15px] border w-full p-4'>

                <p className='font-bold text-[30px] text-white'>200+</p>
                <p className='text-[#C0C5CE] text-[12px]'>Projects </p>
                  </div>

                  <div className='bg-[#2563eb1a] border-[#2563eb33] rounded-[15px] border w-full p-4'>

                <p className='font-bold text-[30px] text-white'>100+</p>

                <p className='text-[#C0C5CE] text-[12px]'>Clients</p>
                  </div>

                  <div className='bg-[#2563eb1a] border-[#2563eb33] rounded-[15px] border w-full p-4'>
                <p className='font-bold text-[30px] text-white'>10+</p>

                <p className='text-[#C0C5CE] text-[12px]'> Years</p>
                  </div>

                </div> 
                <div className='bg-[linear-gradient(90deg,#0A3155_50%,#0E5378_120%)] border-[#022646] rounded-[10px] border absolute -bottom-6 -right-3 md:-right-5 p-3 animate-[up-down_3s_ease-in-out_infinite]'>
                  <TbPointFilled  className='text-green-500 inline ' />

                  <span className='text-[#f3fcff] text-[14px]'>Operating since 2016</span>

              

                </div>
                </div>

                <div className=''>
                <Chip className=' bg-[#0a234c] border-[#162d70] border p-3 rounded-3xl uppercase text-[15px] mt-10 mb-2 font-bold text-[#234ebd]'>About Us</Chip>
                <h2 className="text-5xl font-bold text-white">Driving digital transformation</h2>
                <p className="mt-2 bg-linear-to-r from-blue-600 to-cyan-300 text-transparent bg-clip-text text-5xl font-extrabold pb-4">across the Middle East</p>

                <p className='text-[#ffffffa6] font-bold leading-6 text-[16px] mb-7'>I-Technology delivers integrated technology solutions that simplify operations and accelerate business growth</p>
                <p className='text-[#ffffffa6] font-bold leading-6 text-[16px]'>We provide ERP and accounting systems, POS solutions, custom web development, security systems, IT hardware, and business services including civil record services, visas, shipping, <br />e-payments and more</p>

                <ul className="mt-9">
                                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#2460E6]"/>ERP, accounting & POS solutions</li>
                                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#2460E6]"/>Web development & digital platforms</li>
                                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#2460E6]"/>Security systems & IT infrastructure</li>
                                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#2460E6]"/>Business services & e-payments</li>
                                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#2460E6]"/>Professional support from implementation to success</li>
                </ul>

                    <div className='mt-10'>
                           <a href="#contact"> <Button className='p-7 rounded-2xl bg-[linear-gradient(135deg,#2563EB,#1D4ED8)] shadow-[0_0_20px_rgba(32,85,222,1.2)]' >Get in Touch </Button></a>
                    </div>
                </div>


              </div>
       
      
    </section>
  );
}
