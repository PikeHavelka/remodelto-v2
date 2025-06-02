import {
  pc_qhd1_2560x1440,
  pc_qhd2_2560x1440,
  pc_qhd3_2560x1440,
  pc_full_hd1_1920x1080,
  pc_full_hd2_1920x1080,
  pc_full_hd3_1920x1080,
  tablet1_1280x853,
  tablet2_1280x853,
  tablet3_1280x853,
  mobile_medium1_768x1152,
  mobile_medium2_768x1152,
  mobile_medium3_768x1152,
  mobile_small1_480x720,
  mobile_small2_480x720,
  mobile_small3_480x720,
} from "../../assets/index";
import { useState, useEffect } from "react";

// The arrays must have the same length! Images for srcSet.
const qhd_imgs = [
  pc_qhd1_2560x1440,
  pc_qhd2_2560x1440,
  pc_qhd3_2560x1440
];

const full_hd_imgs = [
  pc_full_hd1_1920x1080,
  pc_full_hd2_1920x1080,
  pc_full_hd3_1920x1080,
];

const tablet_imgs = [
  tablet1_1280x853,
  tablet2_1280x853,
  tablet3_1280x853
];

const mobile_md_imgs = [
  mobile_medium1_768x1152,
  mobile_medium2_768x1152,
  mobile_medium3_768x1152,
];

const mobile_sm_imgs = [
  mobile_small1_480x720,
  mobile_small2_480x720,
  mobile_small3_480x720,
];
// ***********************************

const TIMEOUT_DURATION = 18000;
const INTERVAL_DURATION = 20000;
const FADE_DURATION = "2000ms";

const Header = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setFade(false);
    }, TIMEOUT_DURATION);

    const intervalID = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setFade(false);
      }, TIMEOUT_DURATION);

      setIndex((prev) => (prev + 1) % qhd_imgs.length);
    }, INTERVAL_DURATION);

    return () => {
      clearInterval(intervalID);
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <header className="relative flex justify-center items-center h-screen-supp">
      <img
        style={{ transitionDuration: FADE_DURATION }}
        className={`absolute w-full h-full object-cover object-center transition-opacity ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        src={full_hd_imgs[index]}
        srcSet={`
        ${mobile_sm_imgs[index]} 480w,
        ${mobile_md_imgs[index]} 768w,
        ${tablet_imgs[index]} 1280w,
        ${full_hd_imgs[index]} 1920w,
        ${qhd_imgs[index]} 2560w
        `}
        sizes="100vw"
        alt="Decorative Background"
      />

      <div className="text-center text-gray-700 z-10">
        <h1 className="uppercase bg-white border-2 inline-block px-4 py-1  mb-1 text-3xl">
          stavby & rekonstrukce
        </h1>
        <p className="lowercase bg-white px-4 py-1 border-2 text-2xl">
          Stavební firma RemodelTO, stavba podle vašich představ
        </p>
      </div>
    </header>
  );
};

export default Header;
