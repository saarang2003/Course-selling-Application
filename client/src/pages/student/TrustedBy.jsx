import React from "react";

function TrustedBy() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900  ">
        <h1 className="text-slate-600 text-xl text-center py-5">
          Trusted by over 16,000 companies and millions of learners around the
          world
        </h1>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-6 lg:grid-cols-5  ">
            {/* 1 */}
        <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
            <img
            className=" mt-1 text-gray-500 fill-current dark:text-gray-300 w-[60px] h-[60px]"
             src="https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals"
             alt="Samsung logo gray and white logo"
            />
          </div>

          {/* 2 */}
          <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
            <img
            className=" mt-1 text-gray-500 fill-current dark:text-gray-300 w-[60px] h-[60px]"
             src="https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals"
             alt="Cisco logo gray and white logo"
            />
          </div>


          {/* 3 */}
          <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
            <img
            className=" mt-1 text-gray-500 fill-current dark:text-gray-300 w-[60px] h-[60px]"
             src="https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals"
             alt="Volkswagen logo gray and white logo"
            />
          </div>

          {/* 4 */}
          <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
            <img
            className=" mt-1 text-gray-500 fill-current dark:text-gray-300 w-[60px] h-[60px]"
             src="https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals"
             alt="Vimeo logo gray and white logo"
            />
          </div>
  
            {/* 5 */}
          <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
            <img
            className=" mt-1 text-gray-500 fill-current dark:text-gray-300 w-[60px] h-[60px]"
           src="https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals"
             alt="Procter & Gamble logo gray and white logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default TrustedBy;
