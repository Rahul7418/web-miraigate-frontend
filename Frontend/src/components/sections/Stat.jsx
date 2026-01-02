import BuildingIcon from '../../icons/BuildingIcon';
import ChartIcon from '../../icons/ChartIcon';
import Stars from '../../icons/Star';
import UserIcon from '../../icons/UserIcon';

const Stat = () => {
    return (
        <section className="py-10 px-6 md:px-20 text-center text-[#000000] max-w-7xl mx-auto">

            {/* Heading */}
            <h1 className="font-[Gilroy] font-black text-3xl sm:text-4xl md:text-[62px] pb-4">
                Happy Clients
            </h1>

            <p className="font-[Gilroy] font-semibold text-sm sm:text-base md:text-[24px] pb-10">
                Trusted by companies worldwide to create exceptional digital expense
            </p>

            {/* Stats Grid */}
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-14">

                    {/* Happy Clients */}
                    <div className="h-48.45 flex flex-col justify-between stat bg-[radial-gradient(circle_at_top_right,#464646,#000000)] rounded-2xl text-white items-center py-8 md:py-10 transition-all duration-300 ease-out hover:scale-105">
                        <div className="mb-4">
                            <UserIcon />
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold">50+</div>
                            <div className="text-xs md:text-sm text-gray-300 mt-2">
                                Happy Clients
                            </div>
                        </div>
                    </div>

                    {/* Projects Completed */}
                    <div className="h-48.45 flex flex-col justify-between stat bg-linear-to-br from-purple-700 to-purple-950 rounded-2xl text-white items-center py-8 md:py-10 transition-all duration-300 ease-out hover:scale-105">
                        <div className="mb-4">
                            <Stars />
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold">80+</div>
                            <div className="text-xs md:text-sm text-gray-200 mt-2">
                                Projects Completed
                            </div>
                        </div>
                    </div>

                    {/* Client Satisfaction */}
                    <div className="h-48.45 flex flex-col justify-between stat bg-linear-to-br from-gray-500 to-gray-800 rounded-2xl text-white items-center py-8 md:py-10 transition-all duration-300 ease-out hover:scale-105">
                        <div className="mb-4">
                            <ChartIcon />
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold">95+</div>
                            <div className="text-xs md:text-sm text-gray-200 mt-2">
                                Client Satisfaction
                            </div>
                        </div>
                    </div>

                    {/* Industries Served */}
                    <div className="h-48.45 flex flex-col justify-between stat bg-linear-to-br from-green-700 to-green-950 rounded-2xl text-white items-center py-8 md:py-10 transition-all duration-300 ease-out hover:scale-105">
                        <div className="mb-4">
                            <BuildingIcon />
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold">15+</div>
                            <div className="text-xs md:text-sm text-gray-200 mt-2">
                                Industries Served
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stat;
