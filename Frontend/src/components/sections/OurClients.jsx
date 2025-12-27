import clients from "../../data/clients.json";

const OurClients = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-10">
      
      {/* Black Section */}
      <div className="bg-black rounded-2xl px-6 md:px-10 lg:px-14 py-10">

        {/* Heading */}
        <h1 className="
          font-[Gilroy]
          font-black
          text-white
          text-2xl
          md:text-4xl
          lg:text-[58px]
          mb-10
          text-center
          lg:text-left
        ">
          Our Clients
        </h1>

        {/* Clients Grid */}
        <div className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6
          gap-6
          md:gap-8
          lg:gap-10
          items-center
        ">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="
                  max-h-12
                  md:max-h-14
                  lg:max-h-16
                  object-contain
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurClients;
