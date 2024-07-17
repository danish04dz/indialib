import React from 'react'
import { } from 'swiper/react'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import cityData from '../constant/Citydata'
import Item from './Item'


const Cities = () => {
  return (
    <section className=' mx-auto max-w-[1440px] px-2 lg:px-5'>
       <div className='mx-auto max-w-[1440px] px-2 lg:px-5 bg-backbg py-6 xl:py-8 rounded-3xl'>
        <span className='text-[16px] font-[500]'>Your  City Awaits! </span><span className='text-[18px] font-[500]'>Find Your Favorate Library.</span>
       

       {/* Container */}
       <Swiper 
        autoplay={{
        delay:4000,
        disableOnInteraction:false,

      }}
      breakpoints={{
        600:{
          slidesPerView:3,
          spaceBetween:4,

        },
        1124:{
          slidesPerView:5,
          spaceBetween:4,

        },
        1300:{
          slidesPerView:6,
          spaceBetween:4,
        }
      }}
      modules={[Autoplay]}
      className='h-[150px] md:h-[250px] xl:h-[170px] mt-5'
       >
        {
          cityData.map((citydata)=>(
          
              <SwiperSlide key={citydata.city}>
                <Item citydata={citydata}/>
                

              </SwiperSlide>
          ))
        }

       </Swiper>
       </div>
    </section>
  )
}

export default Cities