import React from "react";
import { Link } from "react-router-dom";

const simchas = [
  {
    to: "/cards/its-a-boy",
    imageUrl: "https://app.simchacard.com/images/category/fDjCZ4tQbTnrXFwV.svg",
    label: "It's a Boy",
  },
  {
    to: "/cards/kiddush",
    imageUrl: "https://app.simchacard.com/images/category/mvy3fw4nZwc82fsA.svg",
    label: "Kiddush",
  },
  {
    to: "/cards/upsherin",
    imageUrl: "https://app.simchacard.com/images/category/iVAPdsdImWn6c1kq.svg",
    label: "Upsherin",
  },
  {
    to: "/cards/bar-mitzvah",
    imageUrl: "https://app.simchacard.com/images/category/Ei5KuhBCIT8vQc8x.svg",
    label: "Bar Mitzvah",
  },
  {
    to: "/cards/tenoyim",
    imageUrl: "https://app.simchacard.com/images/category/XN82GVES3yWu32tG.svg",
    label: "Tenoyim",
  },
  {
    to: "/cards/bavarfan",
    imageUrl: "https://app.simchacard.com/images/category/d5Hcw3SBm6ZLe24I.svg",
    label: "Bavarfan",
  },
  {
    to: "/cards/wedding",
    imageUrl: "https://app.simchacard.com/images/category/czwULhJPlgkeaJP8.svg",
    label: "Wedding",
  },
  {
    to: "/cards/sheva-bruches",
    imageUrl: "https://app.simchacard.com/images/category/l5BphfeJE0WzSRSQ.svg",
    label: "Sheva Bruches",
  },
];

const MainComponents = () => {
  return (
    <div>
      <div id="categories" className="container mx-auto">
        <h3 className="text-[2rem] 2xl:text-[2.6rem] text-center font-medium mt-10">
          <span className="text-sc-gold4">Mazel Tov! </span>What's the
          <span className="italic"> Simcha</span>?
        </h3>
        <h4 className="text-center text-sm 2xl:text-[1.2rem] font-medium mt-2">
          To get started, please choose the Simcha you're celebrating.
        </h4>
        <div className="max-w-3xl 2xl:max-w-4xl px-6 lg:px-8 mx-auto mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 pb-10">
          {simchas.map(({ to, imageUrl, label }, index) => (
            <Link
              key={index}
              className="border border-black/5 aspect-square shadow-md shadow-black/20 rounded-2xl transition duration-300 ease-in-out"
              to={to}
              aria-label={`Select ${label}`}
              style={{
                backgroundColor: "rgba(189, 143, 87, 0.2)", // Base background color
              }}
            >
              <div className="flex px-10 lg:px-14 lg:py-2 justify-center mt-7 aspect-square box-content">
                <div
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center center",
                    width: "100%",
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
              <p className="text-center text-base 2xl:text-lg font-semibold truncate mt-5 2xl:mt-4">
                {label}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        .link:hover {
          background-color: rgba(189, 143, 87, 0.4); /* Hover background color */
        }
      `}</style>
    </div>
  );
};

export default MainComponents;
