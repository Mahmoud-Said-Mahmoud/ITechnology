import React from 'react';

import { Button, Chip } from '@heroui/react';
import { FaStar } from "react-icons/fa";
import { PiQuotes } from "react-icons/pi";

export default function Testimonials(){
  return (
    <section id="testimonials" className="py-20  bg-[#081b3a] relative">
      <div className='bg-[linear-gradient(90deg,_transparent,_rgba(6,182,212,0.3),_rgba(37,99,235,0.2),_transparent)] w-full h-px absolute top-0'></div>
      <div className="container mx-auto px-4 mb-20" data-aos="fade-up">
        <div className='text-center'>
        <Chip className=' bg-[#f59e0b] border-[#f59e0b33] border p-3 rounded-3xl uppercase text-[15px]  mb-4 font-bold'>Client Stories</Chip>
      <h2 className="text-5xl font-bold text-white">Trusted by businesses</h2>
      <p className="mt-2 text-5xl font-extrabold pb-4 bg-gradient-to-br from-amber-500 to-blue-600 bg-clip-text text-transparent inline-block">across the Middle East</p>
      <p className='text-[#ffffff8c]'>Don't just take our word for it — hear from the companies we've <br /> helped transform.</p>
        </div>

        {/* card Comment */}
        <div className=' grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5 mt-6'>
          <div className='bg-[#2563eb1a] border-[#2563eb33] rounded-[15px] border  p-4 '>
          <div className='flex justify-between items-center'>
            <div className='flex gap-0.5'>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            </div>
            <div>
              <PiQuotes className='text-3xl text-[#2564eb44] '/>
            </div>
          </div>
          <p className='text-[#ffffff8c] border-b border-[#ffffff12] mt-2 mb-3 pb-4' dir='rtl' >من أول ما دخلت المكان حسيت إنه مختلف عن أي مكان تاني. كل المنتجات اللي كنت بدور عليها لقيتها في مكان واحد، 
                وكلها أصلية ومن أفضل البراندات. فريق العمل كان متعاون جدًا،  وشرحلي كل التفاصيل وساعدني أختار الأنسب لاحتياجي بدون أي استعجال 
                تجربة ممتازة، وأكيد هكررها وأنصح أي حد يتعامل معاهم </p>
                <div className='flex items-center gap-3 mt-2'>
                  <span className='bg-[#2563eb25] border border-[#2563eb40] text-[#2563eb] flex justify-center items-center rounded-full w-10 h-10'>E</span>
                    <p className='text-[#ffffff] font-bold'>Evram Adel Boshra</p>
                </div>
          </div>
          <div className='bg-[#2563eb1a] border-[#2563eb33] rounded-[15px] border  p-4 '>
          <div className='flex justify-between'>
            <div className='flex gap-0.5'>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            </div>
            <div>
              <PiQuotes className='text-3xl text-[#2564eb44] '/>
            </div>
          </div>
          <p className='text-[#ffffff8c] border-b border-[#ffffff12] mt-2 mb-3 pb-10 ' dir='rtl' >شكراً جزيلاً لحسن المعاملة والاحترافية الشديدة، سعيد جدا بوجود هذا المستوى من الخدمات التقنية والشفافية في المعاملات. حتى المصائب المقدمة كانت ممتازة ولم يكن المكسب المادي أهم مثل الصدق والأمانة في التعامل</p>
                <div className='flex items-center gap-3 mt-2'>
                  <span className='bg-[#06b6d425] border border-[#06b6d440] text-[#06b6d4] flex justify-center items-center rounded-full w-10 h-10'>A</span>
                    <p className='text-[#ffffff] font-bold'>Abdulrahman Alzayyaty</p>
                </div>
          </div>
          <div className='bg-[#2563eb1a] border-[#2563eb33] rounded-[15px] border  p-4'>
          <div className='flex justify-between'>
            <div className='flex gap-0.5'>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            </div>
            <div>
             <PiQuotes className='text-3xl text-[#2564eb44] '/>
            </div>
          </div>
          <p className='text-[#ffffff8c] border-b border-[#ffffff12] mt-2 mb-3 pb-10 ' dir='rtl'>مكان هايل و محترم و احترافية في التعامل و سرعة في الأنجاز
و المهندس حسين راجل قمة في الاحتراف و شغله هايل و بصراحة لحقني في ازمة كنت هتعرض ليها في تليفوني
تجربتي مع المكان تخليني راضي و اكيد هرجعله تاني</p>
                <div className='flex items-center gap-3 mt-2'>
                  <span className='bg-[#22c55e25] border border-[#22c55e40] text-[#22c55e] flex justify-center items-center rounded-full w-10 h-10'>T</span>
                    <p className='text-[#ffffff] font-bold'>Tarek Mashhor</p>
                </div>
          </div>
          <div className='bg-[#2563eb1a] border-[#2563eb33] rounded-[15px] border  p-4'>
          <div className='flex justify-between'>
            <div className='flex gap-0.5'>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            </div>
            <div>
             <PiQuotes className='text-3xl text-[#2564eb44] '/>
            </div>
          </div>
          <p className='text-[#ffffff8c] border-b border-[#ffffff12] mt-2 mb-3 pb-10' dir='rtl' >حقيقي خدمة و جودة منتجات عالية و الضمان تحفة تقييمي لاني اشتريت منهم كتير بس وقت احتياج الضمان فعلا حسيت بقيمة التعامل مع المكان
و طاقة المكان ايجابيه جدا وايضا جميع العاملين يتعاملون بإحترام شديد</p>
                <div className='flex items-center gap-3 mt-2'>
                  <span className='bg-[#f59e0b25] border border-[#f59e0b40] text-[#f59e0b] flex justify-center items-center rounded-full w-10 h-10'>A</span>
                    <p className='text-[#ffffff] font-bold'>Asmaa Hassan</p>
                </div>
          </div>
          <div className='bg-[#2563eb1a] border-[#2563eb33] rounded-[15px] border  p-4'>
          <div className='flex justify-between'>
            <div className='flex gap-0.5'>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            </div>
            <div>
              <PiQuotes className='text-3xl text-[#2564eb44] '/>
            </div>
          </div>
          <p className='text-[#ffffff8c] border-b border-[#ffffff12] mt-2 mb-3 pb-4 ' dir='rtl' >مكان ممتاز ومتطور،فى خدمات كتير بيقدمها المكان
ومنتجات وبرندات كتير ممتازة وناس فى قمة الذوق والاحترافيه فى التعامل والمجال
المكان بصراحة اضاف لعين شمس كتير من حيث المجال والخدمات بجانب الاحترافية فى معاملة العملاء
شكرا I-Technology</p>
                <div className='flex items-center gap-3 mt-2'>
                  <span className='bg-[#8b5cf625] border border-[#8b5cf640] text-[#8b5cf6] flex justify-center items-center rounded-full w-10 h-10'>W</span>
                    <p className='text-[#ffffff] font-bold'>Wafaa Elbatrawee</p>
                </div>
          </div>
          <div className='bg-[#2563eb1a] border-[#2563eb33] rounded-[15px] border  p-4'>
          <div className='flex justify-between'>
            <div className='flex gap-0.5'>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            <FaStar className='text-[#f5a40b]'/>
            </div>
            <div>
            <PiQuotes className='text-3xl text-[#2564eb44] '/>
            </div>
          </div>
          <p className='text-[#ffffff8c] border-b border-[#ffffff12] mt-2 mb-3 pb-10 ' dir='rtl' >انا اتعاملت كتير مع i-technology و بصراحة كوالتي الحاجة بتبقي علي طول كويسة و المكان فيه مميزات كتيرة جدا و مفيدة و مش بتحسس العميل ان هو قاعد في عين شمس خالص</p>
                <div className='flex items-center gap-3 mt-2'>
                  <span className='bg-[#ec489925] border border-[#ec489940] text-[#ec4899] flex justify-center items-center rounded-full w-10 h-10'>E</span>
                    <p className='text-[#ffffff] font-bold'>El Shibly</p>
                </div>
          </div>

        </div>
        <div className='text-center mt-10'>
          <p className='text-[#ffffff8c]'>Join 50+ businesses that have transformed with I-Technology</p>
          <Button className='p-7 rounded-2xl bg-[linear-gradient(135deg,#2563EB,#1D4ED8)] shadow-[0_0_20px_rgba(32,85,222,0.5)] xl:w-1/6 mt-5' ><a href="#contact">Start Your Transformation</a> </Button>
        </div>
      </div>
    </section>
  );
}
