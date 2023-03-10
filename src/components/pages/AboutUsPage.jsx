// React
import React from "react";
// Media Files
import picture from "../../assets/images/about-us.png";
const AboutUsPage = () => {
    // team
    const teamMembers = [
        {
            name: "Mr.Ashwani Sharma",
            designation: "Director",
            profile_img: picture,
            message:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum explicabo possimus blanditiis magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum explicabo possimus blanditiis magnam?",
        },
        // 3215
        {
            name: "Lorem ipsum",
            designation: "lorem ipusm dolor",
            profile_img: picture,
            message:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum explicabo possimus blanditiis magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum explicabo possimus blanditiis magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum explicabo possimus blanditiis magnam?",
        },
        // 3215
    ];
    return (
        <div className="poppins">
            {/* Our story */}
            <div>
                <div className="w-fit mx-auto pt-10">
                    <h1 className="font-extrabold text-2xl md:text-3xl text-center">
                        Our Story
                    </h1>
                    <div className="w-full mx-auto h-[1px] sm:h-[2px] md:h-[3px] lg:h-[4px] bg-black mt-2 md:mt-5 mb-10"></div>
                </div>

                <p className="text-center md:text-xl md:leading-[40px] w-[85%] lg:w-[70%] xl:w-[65%] mx-auto text-[#5B5B5B]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod corporis itaque laudantium odit exercitationem iste commodi nulla nisi nihil. Saepe quos sint consequuntur, doloribus corrupti aspernatur consectetur non est! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate in nostrum iure quis blanditiis assumenda tempora, magnam a, esse recusandae atque, consequatur similique modi totam? Delectus pariatur aspernatur vel sunt? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolores suscipit saepe ea magni veniam quod at itaque consequuntur beatae!
                </p>
                <h3 className="font-semibold text-center mt-20 mb-2 text-2xl md:text-3xl  w-[85%] lg:w-[60%] xl:w-[55%] md:w-[70%] mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aspernatur?
                </h3>
                <p className="mb-14 text-center text-[#5B5B5B] font-extrabold w-[85%] lg:w-[60%] md:w-[70%] mx-auto ">
                    Lorem, ipsum dolor.
                </p>
                <h3 className="font-[400px] text-center  mb-14 italic text-2xl md:text-3xl w-[85%] lg:w-[60%] md:w-[70%] xl:w-[55%] mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam libero odio ullam omnis fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, iste.
                </h3>

                <p className="text-center md:text-xl md:leading-[40px] w-[85%] lg:w-[70%] xl:w-[65%] mx-auto text-[#5B5B5B] mb-20">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum temporibus asperiores perferendis qui perspiciatis exercitationem cupiditate quasi quam! Rerum, dolor quam, ipsum numquam itaque, deleniti sequi facere cum porro eligendi quis dolores natus doloremque a illum temporibus? Omnis, accusantium maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, perferendis cum! Nam quasi error hic ipsum commodi magnam voluptas debitis.
                </p>
            </div>

            {/* Our Products */}
            <div>
                <div className="w-fit mx-auto ">
                    <h1 className="font-extrabold text-2xl md:text-3xl mt-[100px] text-center">
                        Our Products
                    </h1>
                    <div className="w-full  mx-auto h-[1px] sm:h-[2px] md:h-[3px] lg:h-[4px] bg-black mt-2 md:mt-5 mb-10"></div>
                </div>

                <p className="text-center md:text-xl md:leading-[40px] w-[85%] lg:w-[70%] xl:w-[65%] mx-auto text-[#5B5B5B]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia labore veritatis quo tempore modi quibusdam laborum dolorum vitae quisquam dignissimos neque odio natus libero a, magni sed optio quos debitis odit quae qui quod! Ea praesentium voluptates hic repudiandae magnam ipsa possimus reiciendis debitis!
                </p>
            </div>

            {/* Our Team */}
            <div>
                <div className="w-fit mx-auto ">
                    <h1 className="font-extrabold text-2xl md:text-3xl mt-[100px] text-center">
                        Our Team
                    </h1>
                    <div className="w-full  mx-auto h-[1px] sm:h-[2px] md:h-[3px] lg:h-[4px] bg-black mt-2 md:mt-5 mb-10"></div>
                </div>

                {/* Team members */}
                <div className="pt-5 pb-20 ">
                    {teamMembers?.map((data, index) => {
                        return (
                            <div key={index} className="my-20">
                                <div
                                    className={` flex justify-between items-center w-[85%] sm:w-[75%] xl:w-[70%] mx-auto gap-5 md:gap-10  ${(index + 1) % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                        } `}
                                >
                                    <div className="in-w-[70%]">
                                        <h1 className=" font-bold text-lg md:text-xl xl:text-2xl ">
                                            {data?.name}
                                        </h1>
                                        <h1 className=" font-bold text-lg md:text-xl xl:text-2xl">
                                            {data?.designation}
                                        </h1>
                                        <p className="text-[#5B5B5B] text-sm md:text-base xl:text-lg mt-2">
                                            {data?.message}
                                        </p>
                                    </div>

                                    <div className=" min-w-[30%] ">
                                        <img
                                            src={picture}
                                            alt={data?.name}
                                            className={`aspect-square rounded-full w-full max-w-[250px] ${(index + 1) % 2 === 0 ? "ml-auto" : "mr-auto"
                                                } `}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default AboutUsPage;
