
const Hero = () => {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* LEFT */}
          <div>
            <h1 className="font-[Gilroy] text-2xl md:text-4xl lg:text-[60px] leading-[1.15] font-black text-black">
              Ready-made <br />
              iGaming Software
            </h1>

            <p className=" font-[Gilroy] mt-4 md:text-[18px] tracking-[0.14em] font-semibold text-gray-500 max-w-lg">
              MiraiGate Is The Future Gate For Billion-Dollar iGaming
              Company’s.
            </p>

            <div className="mt-6 flex gap-4">
              <button
                className="
                          font-[Gilroy]
                          w-40
                          py-2.5
                          border border-gray-400
                          text-sm font-bold
                          rounded-md
                        text-black
                          transition-all duration-300 ease-out
                          hover:-translate-y-2
                        hover:bg-black
                        hover:text-white
                          hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.85)]
                        "
              >
                Schedule a Call
              </button>

              <button
                className="
                          font-[Gilroy]
                          w-40
                          py-2.5
                          border border-gray-400
                          text-sm font-bold
                          rounded-md
                        text-black
                          transition-all duration-300 ease-out
                          hover:-translate-y-2
                        hover:bg-black
                        hover:text-white
                          hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.85)]
                        "
              >
                Portfolio
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-150 h-72.5 rounded-2xl overflow-hidden">
              <video
                src="/src/assets/videos/Gif.mp4"
                className="absolute inset-0 w-full h-full object-cover scale-102 object-[50%_62%]"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero