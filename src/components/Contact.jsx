import {
  Button,
  Chip,
  Input,
  Label,
  ListBox,
  Select,
  Spinner,
  TextArea,
} from "@heroui/react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { GrStatusGood } from "react-icons/gr";
import * as zod from "zod";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = zod.object({
  firstName: zod
    .string()
    .min(1, "First name is required")
    .regex(/^[A-Za-z\u0600-\u06FF]+(?:\s+[A-Za-z\u0600-\u06FF]+)*$/, "Invalid FirstName"),
  Email: zod
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
  Company: zod
    .string()
    .min(1, "Company Name is required")
    .regex(/^[A-Za-z\u0600-\u06FF]+(?:\s+[A-Za-z\u0600-\u06FF]+)*$/, "Invalid Company Name"),
  PhoneNumber: zod
    .string()
    .min(1, "Phone Number is required")
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, "Invalid phone number"),
  Message: zod
    .string()
    .min(1, "Message is required")
    .regex(/^[A-Za-z\u0600-\u06FF]+(?:\s+[A-Za-z\u0600-\u06FF]+)*$/, "Invalid Your Message"),
  Service: zod
    .string()
    .min(1, "Services Selected is required")
    .regex(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/, "Invalid Services"),
});

export default function Contact() {
  const [submit, setSubmit] = useState(false);
  const [isloading, setisloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async  (data) => {
      try {
        setisloading(true)
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      
    });

    const result = await response.json();
setisloading(false)
    console.log(result);
  } catch (error) {
    console.error(error);
  }
    console.log(data);
    setSubmit(true);
  };
  return (
    <section id="contact" className="py-20 bg-[#081b3a] relative">
      <div className="bg-[linear-gradient(90deg,_transparent,_rgba(6,182,212,0.3),_rgba(37,99,235,0.2),_transparent)] w-full h-px absolute top-0"></div>
      <div className="container mx-auto mb-20" data-aos="fade-up">
        <div className="text-center">
          <Chip
            color="accent"
            className="bg-[#0a2a49] border-[#143f5e] border p-1.5 uppercase text-[13px]  mb-2"
          >
            {" "}
            contact us{" "}
          </Chip>
          <h2 className="text-5xl font-bold text-white">
            Let's build something
          </h2>
          <p className="mt-2 bg-linear-to-r from-blue-600 to-cyan-300 text-transparent bg-clip-text text-5xl font-extrabold pb-4">
            great together
          </p>
          <p className="text-[#6d869e] text-[15px] font-bold">
            Ready to transform your business? Reach out and we'll get back{" "}
            <br /> to you within 24 hours.
          </p>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-5  mt-6">
          <div className="bg-[#2563eb1a] border-[#2563eb33] rounded-[15px] border  p-4 text-center ">
            <CiLocationOn className="text-[#2461E5] bg-[#2563eb1a] border-[#2563eb33] rounded-xl text-5xl p-2 mx-auto items-center justify-center flex mb-4" />
            <p className="text-white">Visit Our Office</p>
            <p className="text-[#ffffff8c] leading-6 mt-2 text-[15px]">
              Ain Shams Branch 32 Saeb Saleh, Ain Shams Cairo, Egypt
            </p>
          </div>
          <div className="bg-[#2563eb1a] border-[#2563eb33] rounded-[15px] border  p-4 text-center ">
            <FaPhone className="text-[#399abd] bg-[#2563eb1a] border-[#2563eb33] rounded-xl text-5xl p-2 mx-auto  items-center justify-center flex mb-4" />
            <p className="text-white">Call Us</p>
            <p className="text-[#399abd] leading-6 mt-2 text-[15px]">
              <a
                href="https://wa.me/201002884418"
                target="_blank"
                rel="noopener noreferrer"
              >
                +201002884418
              </a>
            </p>
          </div>
          <div className="bg-[#2563eb1a] border-[#2563eb33] rounded-[15px] border  p-4 text-center ">
            <IoTimeOutline className="text-[#7b6bd6] bg-[#2563eb1a] border-[#2563eb33] rounded-xl text-5xl p-2 mx-auto  items-center justify-center flex mb-4" />
            <p className="text-white">Working Hours</p>
            <p className="text-[#ffffff8c]  text-[15px]">Saturday – Thursday</p>
            <p className="text-[#ffffff8c]  text-[15px]">10:00 AM – 10:00 PM</p>
          </div>
          <div className="bg-[#2563eb1a] border-[#2563eb33] rounded-[15px] border  p-4 text-center ">
            <MdOutlineEmail className="text-[#2db366] bg-[#2563eb1a] border-[#2563eb33] rounded-xl text-5xl p-2 mx-auto  items-center justify-center flex mb-4" />
            <p className="text-white">Email Us</p>
            <p className="text-[#2db366] leading-6 mt-2 text-[15px]">
              {" "}
              <a href="mailto:wecare@i-techegypt.com?subject=Inquiry&body=Hello,%20I%20want%20to%20know%20more%20about%20your%20services.">
                wecare@i-techegypt.com
              </a>
            </p>
          </div>
        </div>

        <div className="bg-[#2563eb1a] border-[#2563eb33] rounded-[15px] border p-7 mt-4">
          {submit ? 
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 text-center p-20">
              <GrStatusGood className="text-green-500 text-8xl mx-auto" />

              <p className="text-white">Thank you!</p>
              <p className="text-[#ffffff8c]">
                We've received your message and will get back to you within 24
                hours.
              </p>
            </div>
          : <>
            <h2 className='text-white text-[20px] font-bold'>Send Us a message</h2>
            <p className='text-[#ffffff8c]'>Fill out the form below and our team will be in touch shortly.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex mt-4 gap-2 flex-wrap">
                <div className="flex flex-col gap-1 w-[49%]">
                  <Label htmlFor="input-type-text" className="text-[#ffffff8c]">
                    Full Name
                  </Label>
                  <Input
                    id="input-type-text"
                    placeholder="User Name"
                    type="text"
                    {...register("firstName")}
                    className="focus:bg-[#ffffff0d] focus:border-[#ffffff1a] bg-[#ffffff0d] border-[#ffffff1a] text-[#ffffff8c] focus:border border "
                  />
                  <p className="text-red-700">{errors.firstName?.message}</p>
                </div>
                <div className="flex flex-col gap-1 w-[49%]">
                  <Label
                    htmlFor="input-type-email"
                    className="text-[#ffffff8c]"
                  >
                    Email
                  </Label>
                  <Input
                    id="input-type-email"
                    placeholder="example@company.com"
                    type="email"
                    {...register("Email")}
                    className="focus:bg-[#ffffff0d] focus:border-[#ffffff1a] bg-[#ffffff0d] border-[#ffffff1a] text-[#ffffff8c] focus:border  border "
                  />
                  <p className="text-red-700">{errors.Email?.message}</p>
                </div>
                <div className="flex flex-col gap-1 w-[49%]">
                  <Label htmlFor="input-type-text" className="text-[#ffffff8c]">
                    Company
                  </Label>
                  <Input
                    id="input-type-text"
                    placeholder="Company Name"
                    type="text"
                    {...register("Company")}
                    className="focus:bg-[#ffffff0d] focus:border-[#ffffff1a] bg-[#ffffff0d] border-[#ffffff1a] text-[#ffffff8c] focus:border  border "
                  />
                  <p className="text-red-700">{errors.Company?.message}</p>
                </div>
                <div className="flex flex-col gap-1 w-[49%]">
                  <Label htmlFor="input-type-text" className="text-[#ffffff8c]">
                    Phone Number
                  </Label>
                  <Input
                    id="input-type-text"
                    placeholder="+12346"
                    type="text"
                    {...register("PhoneNumber")}
                    className="focus:bg-[#ffffff0d] focus:border-[#ffffff1a] bg-[#ffffff0d] border-[#ffffff1a] text-[#ffffff8c] focus:border  border "
                  />
                  <p className="text-red-700">{errors.PhoneNumber?.message}</p>
                </div>
              </div>
              <label className="block text-[#ffffff8c] mt-5 mb-2">
                Service Interested In
              </label>

              <select
                {...register("Service")}
                className="w-full rounded-lg border border-[#1f3b63] bg-[#081b3ae6] text-[#ffffff8c] p-3 outline-none focus:border-[#2563eb]"
              >
                <option value="">Select one</option>
                <option value="ERP Solutions & Implementation">
                  ERP Solutions & Implementation
                </option>
                <option value="Web Development">Web Development</option>
                <option value="E-Commerce Solutions">
                  E-Commerce Solutions
                </option>
                <option value="POS Systems">POS Systems</option>
                <option value="Accounting Software">Accounting Software</option>
                <option value="IT Hardware & Accessories">
                  IT Hardware & Accessories
                </option>
              </select>
              <p className="text-red-700">{errors.Service?.message}</p>
              <div className="flex flex-col  mt-5 gap-1">
                <Label htmlFor="textarea-rows-3 " className="text-[#ffffff8c]">
                  Your Message
                </Label>
                <TextArea
                  aria-label="Your Message"
                  id="textarea-rows-3"
                  rows={7}
                  placeholder="Tell us about your project and requirements..."
                  className="bg-[#ffffff0d] text-[#ffffff8c]"
                  {...register("Message")}
                />
                <p className="text-red-700">{errors.Message?.message}</p>
              </div>
              <Button
                type="submit"
                className=" bg-[#2055DE] rounded-[10px] p-5 shadow-[0_0_20px_rgba(32,85,222,0.5)] mt-5 hover:shadow-[0_0_40px_rgba(32,85,222,0.8)] hover:-translate-y-1 transition-all duration-300 xl:w-[15%]"
                
              >
                {isloading ? <Spinner />:<FiSend />} Send Message
                
              </Button>
            </form>
          </>}
        </div>
      </div>
    </section>
  );
}
