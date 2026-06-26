import { Button } from '@heroui/react';
import logo from '../assets/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { LuLinkedin } from "react-icons/lu";
export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="bg-linear-to-b from-[#081A39] via-[#06152E] to-[#051025] border-t-[0.5px] border-[#172236] text-[#C0C5CE] py-8  ">
      <div className=" mx-auto px-4 flex flex-col md:flex-row justify-between flex-nowrap border-b-[0.5px]  pt-4 pb-3   border-[#172236] container">
        <div className='flex-1  space-y-5'>
          <img className='w-8/12' src={logo} alt="" />
          <p>Empowering Egyptian and MENA businesses through enterprise ERP solutions, e-commerce platforms, and professional web development.</p>
          <div className='flex gap-2'>
            <Button className='rounded-[10px] hover:border-[rgba(37,99,235,0.4)] hover:bg-[rgba(37,99,235,0.2)] border bg-[rgba(255,255,255,0.08)] p-3  transition-all duration-300' ><a href="https://www.facebook.com/ITechnology2016/" target='_blank'><FaFacebookF /></a>  </Button> 
            <Button className='rounded-[10px] hover:border-[rgba(37,99,235,0.4)] hover:bg-[rgba(37,99,235,0.2)] border bg-[rgba(255,255,255,0.08)] p-3  transition-all duration-300' ><a href="https://wa.me/201002884418"target="_blank"> <FaWhatsapp /> </a>  </Button> 
            <Button className='rounded-[10px] hover:border-[rgba(37,99,235,0.4)] hover:bg-[rgba(37,99,235,0.2)] border bg-[rgba(255,255,255,0.08)] p-3  transition-all duration-300' > <a href="https://www.linkedin.com/company/itechnologycompany/posts/?feedView=all"><LuLinkedin /></a>   </Button> 
            <Button className='rounded-[10px] hover:border-[rgba(37,99,235,0.4)] hover:bg-[rgba(37,99,235,0.2)] border bg-[rgba(255,255,255,0.08)] p-3  transition-all duration-300' ><a href="https://www.instagram.com/itechnology2016/"><FaInstagram /></a>     </Button> 
          </div>
        </div>
        <div className='flex-1 '>
          <h6 className='text-white font-bold'>Quik Links</h6>
        
        <ul className='flex-col'>
          <li className='hover:text-[rgba(6,182,212)] cursor-pointer pb-3 pt-3 transition-all duration-300'><a href="#services"> ERP Solutions </a></li>
          <li className='hover:text-[rgba(6,182,212)] cursor-pointer pb-3 transition-all duration-300'><a href="#services">E-Commerce Platform</a> </li>
          <li className='hover:text-[rgba(6,182,212)] cursor-pointer pb-3 transition-all duration-300'><a href="#services">Web Development</a> </li>
          <li className='hover:text-[rgba(6,182,212)] cursor-pointer pb-3 transition-all duration-300'><a href="#services">Digital Transformation</a>  </li>
          <li className='hover:text-[rgba(6,182,212)] cursor-pointer pb-3 transition-all duration-300'><a href="#about">About Us</a> </li>
          <li className='hover:text-[rgba(6,182,212)] cursor-pointer pb-3 transition-all duration-300'><a href="#contact">Contact</a>  </li>
        </ul>
        </div>
        <div className='flex-1 '>
          <h6 className='text-white font-bold'>ERP Partners</h6>
        
        <ul>
          <li className='hover:text-[rgba(6,182,212)] cursor-pointer pb-3'>Odoo</li>
          <li className='hover:text-[rgba(6,182,212)] cursor-pointer pb-3'>Zoho Suite</li>
          <li className='hover:text-[rgba(6,182,212)] cursor-pointer pb-3'>Another Platform</li>
        </ul>
        </div>
        <div className='flex-1 '>
          <h6 className='text-white font-bold'>Contact Info</h6>
        
        <ul>
          <li className=' pb-3 '><CiLocationOn className='text-[#2461E5] inline' /> Ain Shams Branch 32 Saeb Saleh, Ain Shams Cairo, Egypt</li>
          <li className=' pb-3 '><FaPhone className='text-[#06B5D3] inline' /> <a href="https://wa.me/201002884418" target="_blank" rel="noopener noreferrer">+201002884418</a> </li>
          <li className=' pb-3 '> <IoTimeOutline className='text-[#8B5CF6] inline' /> Sat – Thu: 10:00 AM – 10:00 PM</li>
          <li className=' pb-3 '> <MdOutlineEmail className='text-[#22C55E] inline'/>  <a href="mailto:wecare@i-techegypt.com?subject=Inquiry&body=Hello,%20I%20want%20to%20know%20more%20about%20your%20services.">wecare@i-techegypt.com</a></li>
        </ul>
        </div>
      </div>
      <div className='text-center pt-4'>
        © {year} I-Technology. All rights reserved.
      </div>
    </footer>
  );
}
