import photos from '../../data/gameGallery.json';

const GameGallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
      
      <div className="flex items-center flex-col">

        {/* Heading */}
        <div className="w-full">
          <h1
            className="
              font-[Gilroy]
              font-extrabold
              py-6 md:py-10
              text-[#000000]
              text-center
              lg:text-left
              text-lg
              md:text-[50px]
              lg:text-[60px]
            "
          >
            We Create Fantastic Game
          </h1>
        </div>

        {/* Gallery */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6 lg:gap-8
            w-full
          "
        >
          {photos.map((photo) => (
            <div key={photo.id} className="w-full">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GameGallery;
