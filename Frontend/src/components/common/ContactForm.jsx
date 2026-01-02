import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
     reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
  console.log(data);

  // simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  reset();
};

  return (
    <section className="relative max-w-7xl mx-auto my-16 overflow-hidden bg-[#050812]">

      {/* LEFT GLOW */}
      <div className="absolute -left-1/4 top-0 h-[120%] w-[70%]
        bg-[radial-gradient(ellipse_at_center,rgba(118,58,245,0.45),transparent_60%)]
        rotate-[-20deg] blur-3xl"
      />

      {/* RIGHT GLOW */}
      <div className="absolute -right-1/4 top-0 h-[120%] w-[70%]
        bg-[radial-gradient(ellipse_at_center,rgba(166,4,242,0.45),transparent_60%)]
        rotate-20 blur-3xl"
      />

      {/* CONTENT */}
      <div className="relative z-10 px-4 md:px-10 lg:px-25 py-16">

        {/* HEADING */}
        <h1 className="font-[Inter] text-4xl md:text-[75px] text-center font-extrabold text-white">
          Get in{" "}
          <span className="bg-clip-text text-transparent
            bg-[linear-gradient(90deg,#f3f0ff,#b79cff,#763AF5,#A604F2)]">
            touch
          </span>
        </h1>

        <p className="text-center md:text-[21px] text-white/70 mt-3">
          Reach out, and let's create a universe of possibilities together!
        </p>

        {/* FORM CARD */}
        <div className="mt-16 bg-white/10 backdrop-blur-xl p-8 rounded-2xl
          grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* FORM */}
          <div className="font-[Inter] lg:py-5 lg:px-2">
            <h2 className="text-white text-3xl font-semibold mb-2">
              Have A Great Idea? Start Now!
            </h2>

            <p className="text-white/70 text-sm mb-6">
              Give us a try, ask us anything, and hire us only if you think we’re the right choice.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

              {/* First + Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* First Name */}
                <div>
                  <input
                    {...register("firstName", {
                      required: "First name is required",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 characters required",
                      },
                    })}
                    placeholder="First Name"
                    className="w-full h-14 px-3 rounded-md
                      bg-white/10 text-white placeholder-white/60
                      outline-none border border-white/20"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-red-400 text-[12px]">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <input
                    {...register("lastName")}
                    placeholder="Last Name"
                    className="w-full h-14 px-3 rounded-md
                      bg-white/10 text-white placeholder-white/60
                      outline-none border border-white/20"
                  />
                </div>

              </div>

              {/* Email */}
              <div>
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  placeholder="Email"
                  className="w-full h-14 px-3 rounded-md
                    bg-white/10 text-white placeholder-white/60
                    outline-none border border-white/20"
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-[12px]">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    minLength: {
                      value: 10,
                      message: "Please enter a valid 10-digit mobile Number."
                    }
                  })}
                  placeholder="Phone Number"
                  className="w-full h-14 px-3 rounded-md
                    bg-white/10 text-white placeholder-white/60
                    outline-none border border-white/20"
                />
                {errors.phone && (
                  <p className="mt-1 text-red-400 text-[12px]">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                  })}
                  placeholder="Message"
                  className="w-full h-32 px-3 pt-5 rounded-md
                    bg-white/10 text-white placeholder-white/60
                    outline-none border border-white/20 resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-red-400 text-[12px]">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-md font-semibold text-white
                bg-[linear-gradient(90deg,#763AF5,#A604F2)]
                transition-all
                ${isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"}
              `}
              >
                {isSubmitting ? "Submitting..." : "Let’s Connect "}
              </button>

            </form>
          </div>

          {/* IMAGE */}
          <div className="flex items-center justify-center">
            <img
              src="/src/assets/images/Imagebox.png"
              alt="contact"
              className="max-w-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
