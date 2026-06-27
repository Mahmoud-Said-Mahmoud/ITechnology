import { Button } from '@heroui/react';
import  {  useEffect, useState } from 'react';
import logo from '../assets/logo.png'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const[scorll, setIsScrolled]= useState(false)
  const links = [
  { name: "Services", id: "services" },
  { name: "Process", id: "process" },
  { name: "About", id: "about" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <header className={` bg-[#0D203F] text-white ${!scorll ? `bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(135deg,#081B3A_0%,#0D2554_50%,#081B3A_100%)]
    bg-[size:80px_80px,80px_80px,100%_100%]`:'' } ${scorll ? 'fixed left-0 right-0 top-0 z-50 ':'' }` }>
    <div className=' flex  items-center  container mx-auto p-4 justify-between '>
        <div className='w-4/12'><img className='w-12/12 md:w-6/12' src={logo} alt="" /></div>
      <ul className='xl:flex xl:flex-row justify-center gap-5 w-6/12 text-[#C0C5CE]  hidden'>
          {links.map((link) => (
    <li key={link.id}>
      <a
        href={`#${link.id}`}
        className="cursor-pointer hover:text-white"
      >
        {link.name}
      </a>
    </li>
  ))}
      </ul>
      <div className=' hidden xl:flex gap-4 w-4/12 justify-end'>
      <Button  className="rounded-[10px] bg-transparent text-white border hover:bg-[rgba(255,255,255,0.08)] p-5 transition-all duration-300"> <a href="#contact">Countact Us</a></Button>
        <Button className=" bg-[#2055DE]
          rounded-[10px]
          p-5
          shadow-[0_0_20px_rgba(32,85,222,0.5)]
          hover:shadow-[0_0_40px_rgba(32,85,222,0.8)]
          transition-all duration-300"> <a href="#contact">Book a Demo</a> </Button>
      </div>

        <div className='cursor-pointer' onClick={()=>setOpen(!open)}>
          {(open) ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 xl:hidden">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
}
        </div>
    </div>
{open &&
<div className='ml-3 mr-3 pb-2'>
  <ul className='xl:hidden  gap-5 w-12/12 text-[#C0C5CE] '>
        {links.map((l,i)=><li key={i.id} className='cursor-pointer hover:text-white mb-3 mt-3 pt-2 pb-2 border-b-[0.3px] border-[#172847]'> <a href={`#${l.id}`}>{l.name}</a></li>)}
      </ul>
        <Button className=" xl:hidden bg-[#2055DE]
        rounded-[10px] w-12/12
          p-5
        shadow-[0_0_20px_rgba(32,85,222,0.5)]
          hover:shadow-[0_0_40px_rgba(32,85,222,0.8)]
          transition-all duration-300"> <a href="#contact">Book a Demo</a></Button>
</div>       
}
    </header>
  )
}
