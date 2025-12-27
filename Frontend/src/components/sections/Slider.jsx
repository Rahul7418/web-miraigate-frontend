import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Virtual } from 'swiper/modules';
import slides from '../../data/slides.json';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

const Slider = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-20">

      {/* Background Container */}
      <div
        className="
          bg-no-repeat
          bg-[url(/src/assets/images/MacBook.png)]
          rounded-2xl
          px-5
          py-6
          md:py-15
          h-auto
        "
      >

        {/* Heading */}
        <h1
          className="
            font-[Gilroy]
            font-bold
            text-[#001E6C]
            text-center
            text-lg
            md:text-2xl
            lg:text-[38.52px]
            mb-6
            lg:mb-10
          "
        >
          Here is what our Clients are saying About us
        </h1>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, Virtual]}
          navigation
          pagination={{ clickable: true }}
          virtual
          spaceBetween={50}
          slidesPerView={1}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id} virtualIndex={index}>

              {/* Slide Wrapper (LG spacing control) */}
              <div className="flex justify-center pb-10 lg:pb-0 lg:mb-15">

                {/* Card */}
                <div
                  className="
                    w-full
                    md:w-125
                    lg:w-[908.53px]
                    max-w-[908.53px]
                    min-h-55
                    h-auto
                    lg:h-[302.84px]
                    bg-white
                    rounded-2xl
                    px-5
                    py-5
                    md:p-10
                    flex
                    flex-col
                    lg:flex-row
                    items-center
                    gap-4
                  "
                >

                  {/* Image */}
                  <div className="lg:w-72.5 flex justify-center">
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="
                        w-20 h-20
                        md:w-24 md:h-24
                        lg:w-auto lg:h-auto
                      "
                    />
                  </div>

                  {/* Content */}
                  <div
                    className="
                      lg:w-154.5
                      text-[#3D3D3D]
                      text-center
                      lg:text-left
                      space-y-1.5
                    "
                  >
                    <h2 className="text-[20px] lg:text-[22px] font-bold">
                      {slide.name}
                    </h2>

                    <p className="text-[14px] lg:text-[16px] font-medium">
                      {slide.text}
                    </p>

                    <span className="text-[12px] text-[#525252]">
                      {slide.date}
                    </span>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Slider;
