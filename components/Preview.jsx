import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Preview = ({ moviesData }) => {
  const [count, setCount] = useState(0);

  let moviesbg = moviesData.map((value) => value.backdrop_path);
  let moviesTitle = moviesData.map((value) => value.title);
  let moviesOverview = moviesData.map((value) => value.overview);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % moviesbg.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [moviesbg.length]);

  return (
    <div>
      <div className="h-[100vh] bg-cover bg-center">
        <div
          className="relative sm:px-[50px] max-sm:px-[20px] bg-cover bg-center h-[100vh]"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${moviesbg[count]})`,
          }}
        >
          <div className="absolute h-[100vh] w-full bg-category-gradient inset-0 z-10"></div>
          <div className="flex flex-col justify-end items-center h-[100vh] z-20">
            <p className="5s:text-[2rem] z-20 sm:text-[2.5rem] max-5s:text-[1rem] font-extrabold">
              {moviesTitle[count]}
            </p>
            <p className="mt-5 z-20 text-center max-5s:text-[0.8rem] text-[#999999] lg:px-[20%]">
              {moviesOverview[count]}
            </p>

            <div className=" z-20 flex justify-center gap-4 mt-[3rem]">
              <button className="flex gap-3 bg-[#E50000] normal-case hover:bg-[#3a3a3a] focus:bg-[#3f3f3f] active:bg-[#3f3f3f] focus:outline-none focus:ring focus:ring-[#cac8c896] max-sm:px-[2rem] max-sm:py-[1rem] rounded-lg  sm:px-[3rem] sm:py-[1.3rem] max-5s:px-[1rem] max-5s:py-[0.5rem] max-5s:text-[0.9rem] max-5s:mt-[10px]">
                <img src="/play.svg" alt="play-icon" />
                Play Now
              </button>
              <button className="bg-[#141414] border-2 border-[#262626] 5s:p-[1rem] max-5s:p-[0.8rem] max-5s:text-[0.8rem] rounded-lg font-bold hover:bg-[#3a3a3a] focus:bg-[#3f3f3f] active:bg-[#3f3f3f] focus:outline-none focus:ring focus:ring-[#cac8c896]">
                <img src="/fav.svg" alt="add to favourites icon" />
              </button>
              <button className="bg-[#141414] border-2 border-[#262626] 5s:p-[1rem] max-5s:p-[0.8rem] max-5s:text-[0.8rem] rounded-lg font-bold hover:bg-[#3a3a3a] focus:bg-[#3f3f3f] active:bg-[#3f3f3f] focus:outline-none focus:ring focus:ring-[#cac8c896]">
                <img src="/like.svg" alt="like-icon" />
              </button>
            </div>
            <div className="flex justify-between w-full text-[3rem] gap-2 z-20">
              <div
                onClick={() =>
                  setCount((prevstate) => {
                    if (count <= 0) {
                      return moviesbg.length - 1;
                    } else {
                      return prevstate - 1;
                    }
                  })
                }
                className=" sm:p-5 max-sm:p-3 bg-[#3a3a3a] hover:bg-[#1A1A1A] rounded-lg mr-2 cursor-pointer"
              >
                <img src="/images/left.svg" className="" alt="left icon" />
              </div>
              <div
                onClick={() =>
                  setCount((prevstate) => {
                    if (count >= moviesbg.length - 1) {
                      return 0;
                    } else {
                      return prevstate + 1;
                    }
                  })
                }
                className="sm:p-5  max-sm:p-3 bg-[#3a3a3a] hover:bg-[#1A1A1A] rounded-lg mr-2 cursor-pointer"
              >
                <img src="/images/right.svg" className="" alt="right icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Preview.propTypes = {
  moviesData: PropTypes.arrayOf(
    PropTypes.shape({
      backdrop_path: PropTypes.string,
      title: PropTypes.string,
      overview: PropTypes.string,
    })
  ).isRequired,
};

export default Preview;
