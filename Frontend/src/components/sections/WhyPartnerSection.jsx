import features from "../../data/whyPartner.json";

const WhyPartnerSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">

      {/* Heading */}
      <h1
        className="
          font-[Gilroy]
          font-black
          text-black
          text-2xl
          md:text-[50px]
          lg:text-[60px]
          mb-12
          text-center
          lg:text-left
        "
      >
        Why Partner With MiraiGate
      </h1>

      {/* Features */}
      <div className="grid grid-cols-1 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="
              flex
              gap-5
              items-start
              text-black
            "
          >
            {/* Icon */}
            <div className="shrink-0 items-center">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-20 h-20 md:w-40 md:h-40 object-contain"
              />
            </div>

            {/* Content */}
            <div>
              <h2
                className="
                  font-[Gilroy]
                  font-bold
                  text-lg
                  md:text-[50px]
                  mb-2
                "
              >
                {feature.title}
              </h2>

              <p
                className="
                  text-sm
                  font-semibold
                  md:text-[17px]
                  leading-relaxed
                "
              >
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WhyPartnerSection;
