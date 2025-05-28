import {
  header_bg_white_building,
  header_bg_white_buildings,
  header_bg_glass_building,
} from "../../assets/index";
import { useState, useEffect } from "react";

const headerBGImages = [
  header_bg_white_building,
  header_bg_white_buildings,
  header_bg_glass_building,
];

const Header = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setFade(false);
    }, 18000);

    const intervalID = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setFade(false);
      }, 18000);

      setIndex((prev) => (prev + 1) % headerBGImages.length);
    }, 20000);

    return () => {
      clearInterval(intervalID);
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <header className="relative flex justify-center items-center h-screen-supp">

      <div
        style={{ backgroundImage: `url(${headerBGImages[index]})` }}
        className={`absolute w-full h-full bg-no-repeat bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <div className="text-center text-black z-10">
        <h1 className="uppercase">stavby & rekonstrukce</h1>
        <p className="lowercase">
          Stavební firma RemodelTO, stavba podle vašich představ
        </p>
      </div>
    </header>
  );
};

export default Header;
