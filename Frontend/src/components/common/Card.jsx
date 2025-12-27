
const Card = ({ card }) => {
  return (
    <div
      className={`
        relative overflow-hidden
        ${card.bgColor || "bg-linear-to-b from-[#1a1a1a] to-black"} 
        text-white
        p-4
        rounded-3xl
        flex flex-col
        justify-between
      `}
    >
      {/* 1. IMAGE SECTION */}
      <div className="relative flex items-center justify-center">
        {/* Decorative Glow */}
        <div className="absolute inset-0 bg-emerald-500/10 blur-[60px] rounded-full" />
        
        <img
          src={card.image}
          alt={card.title}
          className="relativen w-[208] h-[159.47] pl-20 z-10 object-contain drop-shadow-2xl"
        />
      </div>

      {/* 2. CONTENT SECTION */}
      <div className="">
        <h3 className="font-semibold text-lg leading-tight tracking-tight uppercase mb-4 wrap-break-words">
          {card.title}
        </h3>
        <p className="text-[14px] leading-[1.552] font-medium">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default Card;