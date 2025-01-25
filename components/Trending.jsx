import { useRef } from "react";
import PropTypes from "prop-types";

const Trending = ({ trending }) => {
  const container = useRef(null);

  const onClickLeft = () => {
    if (container.current) {
      const scrollAmount =
        container.current.querySelector(".snap-start").offsetWidth;
      container.current.scrollLeft -= scrollAmount;
    }
  };

  const onClickRight = () => {
    if (container.current) {
      const scrollAmount =
        container.current.querySelector(".snap-start").offsetWidth;
      container.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div>
      <h1 className="5s:text-[2rem] sm:text-[2.5rem] max-5s:text-[1rem] font-bold ml-5">
        Trending Now
      </h1>
      <div
        ref={container}
        className="flex mt-[4rem] overflow-x-hidden snap-mandatory snap-x gap-5"
      >
        {trending.map((value, index) => (
          <div
            key={index}
            className="snap-start p-[20px] bg-[#1A1A1A] rounded-xl"
          >
            <div className="w-[280px]">
              <img
                src={`https://image.tmdb.org/t/p/w342${value.poster_path}`}
                alt="trending Image"
                className="rounded-xl"
              />
            </div>
            <div>
              <div>
                <p className="font-extrabold mt-5">{value.title}</p>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className=" max-5s:text-[0.8rem] text-[#999999]">{`Released ${value.release_date || value.first_air_date}`}</span>
                <span className="flex items-center gap-3">
                  <img className="w-[30px]" src="/star.svg" alt="" />
                  <span className="text-[#E50000] max-5s:text-[0.8rem]">
                    {value.vote_average}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center text-[3rem] gap-2 mt-[4rem]">
        <div
          onClick={onClickLeft}
          className="sm:p-5 max-sm:p-3 bg-[#3a3a3a] hover:bg-[#1A1A1A] rounded-lg mr-2 cursor-pointer"
        >
          <img src="/images/left.svg" className="" alt="left icon" />
        </div>
        <div
          onClick={onClickRight}
          className="sm:p-5 max-sm:p-3 bg-[#3a3a3a] hover:bg-[#1A1A1A] rounded-lg mr-2 cursor-pointer"
        >
          <img src="/images/right.svg" className="" alt="right icon" />
        </div>
      </div>
    </div>
  );
};

Trending.propTypes = {
  trending: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string,
      release_date: PropTypes.string,
      vote_average: PropTypes.number,
    })
  ).isRequired,
};

export default Trending;
