import React from 'react';

import { Button, Chip } from '@heroui/react';
import { CiServer } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { MdOutlineShield } from "react-icons/md";
import { GiLifeSupport } from "react-icons/gi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoMdTrendingUp } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import odoo from "../assets/Odoo-Logo.wine.png"
import website from "../assets/Website.png"
export default function Services(){
  return (
    <section id="services" className="py-20 bg-[#081b3b] relative">
      <div className='bg-[linear-gradient(90deg,_transparent,_rgba(6,182,212,0.3),_rgba(37,99,235,0.2),_transparent)] w-full h-px absolute top-0'></div>

      <div className=" mx-auto px-4 container mb-20">
        <div className='text-center'>
        <Chip color='accent' className='bg-[#0a2a49] border-[#143f5e] border p-1.5 uppercase text-[13px]  mb-2'> Our Services </Chip>
            <h2 className="text-5xl font-bold text-white">Everything your business needs</h2>
            <p className="mt-2 bg-linear-to-r from-blue-600 to-cyan-300 text-transparent bg-clip-text text-5xl font-extrabold pb-4">to grow and succeed</p>
            <p className='text-[#6d869e] text-[15px] font-bold'>Comprehensive technology solutions designed to transform your <br /> business operations and accelerate growth.</p>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 font-bold " data-aos="fade-up">

          <div className='bg-[#0a2047] border-[#1b2f52] rounded-[15px] hover:shadow-[0_0_40px_#3060d3] transition-all duration-300 border p-6 cursor-pointer group'>
            <CiServer className='border-[#1b2f52] rounded-2xl border text-6xl p-3.5 text-[#3060d3] bg-[linear-gradient(135deg,#2563eb30,#2563eb15)] mt-4 mb-5 group-hover:shadow-[0_0_40px_#3060d3] transition-all duration-300'/>
            <div className='mt-4 mb-4'>
              <h2 className='font-bold text-white'>ERP Solutions</h2>
              <span className='text-[#325dbd] text-[14px]'>& Implementation</span>
            </div>
              <p className='text-[#6e7388] mt-4 mb-4 text-[14px]'>Full-cycle ERP implementation with Odoo, SAP, Microsoft Dynamics, and Zoho. We streamline your operations, integrate all departments, and optimize your business workflows.</p>
              <ul className='text-[#6e7388] list-disc p-4 text-[14px]' >
                <li>Multi-module Integration</li>
                <li>Real-time Analytics</li>
                <li>Custom Workflows</li>
                <li>Cloud & On-premise</li>
              </ul>
              <a className='text-[#395cc1] text-[14px]'>Learn More <FaArrowRightLong className='inline'/> </a>
          </div>

          <div className='bg-[#0a2047] border-[#1b2f52] rounded-[15px] hover:shadow-[0_0_40px_#29a1bb] transition-all duration-300 border cursor-pointer p-6 group'>
            <IoCartOutline className='border-[#1b2f52] rounded-2xl border text-6xl p-3.5 text-[#29a1bb] bg-[linear-gradient(135deg,#06b6d430,#06b6d415)] mt-4 mb-5 group-hover:shadow-[0_0_40px_#29a1bb] transition-all duration-300'/>
            <div className='mt-4 mb-4'>
              <h2 className='font-bold text-white'>E-Commerce</h2>
              <span className='text-[#29a1bb] text-[14px]'>Platform</span>
            </div>
              <p className='text-[#6e7388] mt-4 mb-4 text-[14px]'>Build powerful online stores that convert. From catalog management to payment integration, we create seamless shopping experiences for your customers.</p>
              <ul className='text-[#6e7388] list-disc p-4 text-[14px]' >
                <li>Custom Storefront</li>
                <li>Payment Gateway</li>
                <li>Inventory Sync</li>
                <li>SEO Optimized</li>
              </ul>
              <a className='text-[#29a1bb] text-[14px] '>Learn More  <FaArrowRightLong className='inline'/> </a>
              <div className='relative group/store'>
              <a className='text-[#29a1bb] text-[14px] mt-2 hover:translate-x-2 transition-all duration-300' href="https://www.i-techegypt.com/?srsltid=AfmBOorbJbtUIFGEBSodb15mYsra2uoP4rUxfQbdZgV7iGcQXef37c3B" target='_blank'> <IoCartOutline className='inline text-xl -mt-1'/> Visit Our Online Store <FaExternalLinkAlt className='inline'/> </a>
              <div className='invisible opacity-0 group-hover/store:visible absolute bottom-1 mb-5 left-0 transition-all duration-300 group-hover/store:opacity-100 '>
               <a href="https://www.i-techegypt.com/?srsltid=AfmBOorbJbtUIFGEBSodb15mYsra2uoP4rUxfQbdZgV7iGcQXef37c3B" className="relative inline-block group/visit" target='_blank'><img src={website} alt="" className="w-80 rounded-xl group-hover/visit:grayscale transition-all duration-300 relative"/><FaEye className='absolute top-1/2 left-1/2 -translate-1/2 text-4xl invisible group-hover/visit:visible '/></a> 
              </div>
              </div>
          </div>

          <div className='bg-[#0a2047] border-[#1b2f52] rounded-[15px] hover:shadow-[0_0_40px_#7760ce] transition-all duration-300 border cursor-pointer p-6 group'>
              <IoCodeSlash className='bg-[linear-gradient(135deg,#8b5cf630,#8b5cf615)] border-[#1b2f52] rounded-2xl border text-6xl p-4 text-[#7760ce] mt-4 mb-5 group-hover:shadow-[0_0_40px_#7760ce] transition-all duration-300'/>
              <div className='mt-4 mb-4'>
              <h2 className='font-bold text-white'>Web Development</h2>
              <span className='text-[#7760ce] text-[14px]'>& Design</span>
            </div>
              <p className='text-[#6e7388] mt-4 mb-4 text-[14px]'>Modern, responsive websites and web applications built with cutting-edge technologies. From landing pages to complex enterprise portals — we deliver excellence.</p>
              <ul className='text-[#6e7388] list-disc p-4 text-[14px]' >
                <li>React & Next.js</li>
                <li>UI/UX Design</li>
                <li>Performance Optimized</li>
                <li>CMS Integration</li>
              </ul>
              <a className='text-[#7760ce] text-[14px]'>Learn More <FaArrowRightLong className='inline'/> </a>
          </div>
        </div>

      <div className='flex-col flex justify-between  lg:flex-row items-center mt-20' data-aos="fade-up">
        <div className='xl:w-1/2'>
        <Chip color='accent' className='bg-[#0a2a49] border-[#143f5e] border p-1.5 uppercase text-[13px] mt-10 mb-2'> Our Services </Chip>
            <h2 className="text-5xl font-bold text-white">The partner you need</h2>
            <p className="mt-2 bg-linear-to-r from-blue-600 to-cyan-300 text-transparent bg-clip-text text-5xl font-extrabold pb-4">for digital excellence</p>
            <p className='text-[#6d869e] text-[17px] font-semibold border-b pt-5 pb-5 border-[#6d869e34]'>We combine technical depth with business understanding to <br /> deliver solutions that actually work — and keep working. Our <br /> track record speaks for itself.</p>
            
            <div className='flex gap-5 w-12/12 flex-wrap '>
              <div className='border-[#1b2f52] border p-6 rounded-[15px] bg-[#0a2047] w-[45%]  mt-5 xl:w-1/3'>

                <p className='font-bold text-[30px] text-white'>200+</p>
                <p className='text-[#C0C5CE] text-[12px]'>Projects Delivered</p>
              </div>
              <div className='border-[#1b2f52] border p-6 rounded-[15px] bg-[#0a2047] w-[45%] mt-5 xl:w-1/3'>
                <p className='font-bold  text-[30px] text-white'>50+</p>

                <p className='text-[#C0C5CE] text-[12px]'>Active Clients</p>
            </div>

            <div className='border-[#1b2f52] border p-6 rounded-[15px] bg-[#0a2047] w-[45%] xl:w-1/3'>

                <p className='font-bold  text-[30px] text-white'>10+</p>


                <p className='text-[#C0C5CE] text-[12px]'>Years in Market</p>
            </div>

            <div className='border-[#1b2f52] border p-6 rounded-[15px] bg-[#0a2047] w-[45%] xl:w-1/3'>
                <p className='font-bold  text-[30px] text-white'>98%</p>
                <p className='text-[#C0C5CE] text-[12px]'>Client Satisfaction</p>
            </div>

            <div className='border-[#1b2f52] border p-4 mb-4 rounded-[15px] bg-[#0a2047]  w-[97%] flex '>
            <div>
              <h2 className='text-[#6e7388] font-bold'>Official</h2>
            <img src={odoo} alt="Odoo" className='w-3/12'/>
            <Chip className='uppercase bg-[#603a84] text-white font-bold text-[13px] mt-2'> partner </Chip>
            <p className='text-[#6e7388] font-bold w-12/12   mt-2 text-[18px]'>we are an offcial Odoo Partner , delivering end-to-end implementation , custommization , integration , and support to help your business grow.</p>
            </div>

            </div>
            </div>

        </div>
        <div>

        <ul className='mt-5'>
          <li className='border-[#1b2f52] border p-5 rounded-[15px] bg-[#0a2047] flex gap-5 mb-7 hover:translate-x-0.5 ease-in duration-400'>
            <FaUsers className='xl:border-[#142e61] xl:border xl:rounded-xl text-5xl xl:text-[60px] xl:p-3.5 text-[#1139a4] xl:bg-[linear-gradient(135deg,#2563eb30,#2563eb15)] ' />
            <div>
                <h2 className='font-bold text-white'> Expert Team</h2>
                <p className='text-[#6e7388] mt-1 mb-4 text-[14px]'>Certified professionals with deep expertise in ERP, e-commerce, and enterprise web development across multiple platforms.</p>
            </div>
          </li>

          <li className='border-[#1b2f52] border p-5 rounded-[15px] bg-[#0a2047] flex gap-5 mb-7 hover:translate-x-0.5 ease-in duration-400'>
              <MdOutlineShield  className='xl:border-[#113b61] xl:border xl:rounded-xl text-5xl xl:text-[60px] xl:p-3.5 text-[#30a9bd] xl:bg-[linear-gradient(135deg,#2563eb30,#2563eb15)] ' />
            <div>
                <h2 className='font-bold text-white'> Secure Solutions</h2>
                <p className='text-[#6e7388] mt-1 mb-4 text-[14px]'>Enterprise-grade security with end-to-end encryption, role-based access control, and compliance with international standards.</p>
            </div>
          </li>

          <li className='border-[#1b2f52] border p-5 rounded-[15px] bg-[#0a2047] flex gap-5 mb-7 hover:translate-x-0.5 ease-in duration-400'>
                <AiOutlineThunderbolt  className='xl:border-[#383c48] xl:border xl:rounded-xl text-5xl  xl:text-[60px] xl:p-3.5 text-[#cc9a42] xl:bg-[linear-gradient(135deg,#2563eb30,#2563eb15)] ' />
            <div>
                <h2 className='font-bold text-white'> Fast Implementation</h2>
                <p className='text-[#6e7388] mt-1 mb-4 text-[14px]'>Proven methodologies and agile delivery to get your systems running quickly — without compromising on quality.</p>
            </div>
          </li>

          <li className='border-[#1b2f52] border p-5 rounded-[15px] bg-[#0a2047] flex gap-5 mb-7 hover:translate-x-0.5 ease-in duration-400'>
                <GiLifeSupport  className='xl:border-[#164056] xl:border xl:rounded-xl text-5xl  xl:text-[60px] xl:p-3.5 text-[#35b073] xl:bg-[linear-gradient(135deg,#2563eb30,#2563eb15)] ' />
            <div>
                <h2 className='font-bold text-white'> Continuous Support</h2>
                <p className='text-[#6e7388] mt-1 mb-4 text-[14px]'>Dedicated support team available 6 days a week. We don't just deliver — we partner with you for the long term.</p>
            </div>
          </li>

          <li className='border-[#1b2f52] border p-5 rounded-[15px] bg-[#0a2047] flex gap-5 mb-7 hover:translate-x-0.5 ease-in duration-400'>
        <IoMdTrendingUp  className='xl:border-[#24306c] xl:border xl:rounded-xl text-5xl  xl:text-[60px] xl:p-3.5 text-[#5648b8] xl:bg-[linear-gradient(135deg,#2563eb30,#2563eb15)] ' />
            <div>
                <h2 className='font-bold text-white'> Business Growth</h2>
                <p className='text-[#6e7388] mt-1 mb-4 text-[14px]'>Solutions designed not just to digitize your business, but to actively drive revenue growth and operational efficiency.</p>
            </div>
          </li>
        </ul>
</div>
        </div>
        <div className='bg-[#0a2047] border-[#1b2f52] rounded-[15px] border p-7 xl:flex xl:justify-between '>
          <div>
          <h2 className='text-white font-bold text-[20px]'> Certified ERP Implementation Partner</h2>
          <p className='text-[#8590A3] font-bold'>Authorized by leading ERP vendors to implement, customize, and support their platforms</p>
          </div>
          <div className='pt-2'>
            <Button className='p-7 rounded-2xl'> <a href="#contact">Find The Right ERP</a></Button>
          </div>
        </div>

        
      </div>

      
    </section>
  );
}
