
import { Chip } from '@heroui/react';
import { GrStatusGood } from "react-icons/gr";
import { FaRegMessage } from "react-icons/fa6";
import { RiTodoLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineSupport } from "react-icons/hi";
import React from 'react';


export default function Process(){
  return (
  
        <section id="process" className="py-20 bg-[#081b3b] relative">
              <div className='bg-[linear-gradient(90deg,_transparent,_rgba(6,182,212,0.3),_rgba(37,99,235,0.2),_transparent)] w-full h-px absolute top-0'></div>
              <div className=' container mx-auto px-4 mb-20'>
                <div className='text-center'>
                      <Chip color='accent' className='bg-[#172558] border-[#2E2F77] border p-3 rounded-3xl uppercase text-[15px]  mb-2 font-bold text-[#998BFA]'> Our Process </Chip>
                          <h2 className="xl:text-6xl text-3xl font-bold text-white mb-4">How we deliver results</h2>
                          <p className='text-[#91928F] text-xl xl:text-[20px]/10 font-semibold '>A proven 4-step methodology that ensures on-time, on-budget  delivery with zero surprises.</p>
                      </div>

                      <div className='relative w-full hidden lg:block' data-aos="fade-up">
                        <div className=" h-px bg-[linear-gradient(90deg,#2563EB,#06B6D4,#8B5CF6,#22C55E)] mt-10 mb-20"></div>
                        <div className='flex justify-between absolute -top-10 w-full'>
                          <div className='border border-[#2563eb50]  bg-[radial-gradient(circle_at_35%_35%,#2563EB40,#2563EB10)]  rounded-full p-4 -translate-x-4.5'>
                            <FaRegMessage className='text-[#3061d2]  text-[38px] '/>
                            <div className='border border-[#2563eb50] rounded-full  absolute w-5 h-5 flex justify-center items-center -top-2 right-0 text-white text-[12px] bg-[#2563eb]'>
                            <p>1</p>
                            </div>
                          </div>
                          <div className='border border-[#06b6d450] bg-[radial-gradient(circle_at_35%_35%,#06B6D440,#06B6D410)] rounded-full  p-4 '>
                            <RiTodoLine className='text-[#1da8bf]  text-[38px]'/>
                            <div className='border border-[#2563eb50] rounded-full  absolute w-5 h-5 flex justify-center items-center -top-2 left-134 text-white text-[12px] bg-[#06b6d4]'>
                            <p>2</p>
                            </div>
                          </div>
                          <div className='border border-[#8b5cf650] bg-[radial-gradient(circle_at_35%_35%,#8B5CF640,#8B5CF610)] rounded-full  p-4'>
                            <IoSettingsOutline className='text-[#7e6bd9]  text-[38px]'/>
                              <div className='border border-[#2563eb50] rounded-full  absolute w-5 h-5 flex justify-center items-center -top-2 right-122 text-white text-[12px] bg-[#8b5cf6]'>
                            <p>3</p>
                            </div>
                          </div>
                          <div className='border border-[#22c55e50] bg-[radial-gradient(circle_at_35%_35%,#22C55E40,#22C55E10)] rounded-full  p-4 translate-x-5'>
                            <HiOutlineSupport className='text-[#2fbd73]  text-[38px] '/>
                            <div className='border border-[#2563eb50] rounded-full  absolute w-5 h-5 flex justify-center items-center -top-2 right-0 text-white text-[12px] bg-[#22c55e]'>
                            <p>4</p>
                            </div>
                          </div> 
                        </div>
                        </div>
                      <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-10 ' data-aos="fade-up">
                        <div className='bg-[#0a2047] border-[#1b2f52] rounded-[15px] border p-7 '>
                          <span className='text-[#2460E6] font-bold'>Step 01</span>
                          <h2 className="text-white font-bold text-[20px] mb-2 mt-2">Consultation</h2>
                          <p className="text-[#8893A6] text-[15px]/6 font-semibold "> We start with an in-depth discovery session to understand your business goals, current challenges, and technical requirements.</p>
                          <ul className="mt-3">
                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#2460E6]"/>Requirements gathering</li>
                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#2460E6]"/>Business analysis</li>
                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#2460E6]"/>Stakeholder interviews</li>
                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#2460E6]"/>Technical audit</li>
                          </ul>
                        </div>
                        <div className='bg-[#0a2047] border-[#1b2f52] rounded-[15px] border p-7'>
                          <span className='text-[#06AAC8] font-bold'>Step 02</span>
                          <h2 className="text-white font-bold text-[20px] mb-2 mt-2">Planning</h2>
                          <p className="text-[#8893A6] text-[15px]/6 font-semibold "> Our experts craft a detailed project roadmap with timelines, milestones, resource allocation, and technology stack decisions.</p>
                          <ul className="mt-3">
                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#06AAC8]"/>Project roadmap</li>
                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#06AAC8]"/>Architecture design</li>
                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#06AAC8]"/>Resource planning</li>
                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#06AAC8]"/>Risk assessment</li>
                          </ul>
                        </div>
                        <div className='bg-[#0a2047] border-[#1b2f52] rounded-[15px] border p-7'>
                          <span className='text-[#895BF4] font-bold'>Step 03</span>
                          <h2 className="text-white font-bold text-[20px] mb-2 mt-2">Implementation</h2>
                          <p className="text-[#8893A6] text-[15px]/6 font-semibold "> Agile development and implementation sprints with regular demos, iterative feedback cycles, and rigorous testing protocols.</p>
                          <ul className="mt-3">
                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#895BF4]"/>Agile development</li>
                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#895BF4]"/>Quality assurance</li>
                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#895BF4]"/>User training</li>
                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#895BF4]"/>Data migration</li>
                          </ul>
                        </div>
                        <div className='bg-[#0a2047] border-[#1b2f52] rounded-[15px] border p-7'>
                          <span className='text-[#20B95C] font-bold'>Step 04</span>
                          <h2 className="text-white font-bold text-[20px] mb-2 mt-2">Support</h2>
                          <p className="text-[#8893A6] text-[15px]/6 font-semibold "> Post-launch monitoring, ongoing maintenance, performance optimization, and continuous improvements as your business grows.</p>
                          <ul className="mt-3">
                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#20B95C]"/>10H/Day-6D/Week monitoring</li>
                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#20B95C]"/>Bug fixes & patches</li>
                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#20B95C]"/>Performance optimization</li>
                            <li className='text-[#919AAD] font-semibold text-[15px] pt-1.5'><GrStatusGood  className="inline m-1 text-[#20B95C]"/>Feature updates</li>
                          </ul>
                        </div>
                      </div>
                      </div>
        </section>




  );
}
