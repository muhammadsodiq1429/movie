import { memo } from "react";
import logo from "/logo.svg";
import googlePlay from "../../../shared/assets/google-play.svg";
import appStore from "../../../shared/assets/app-store.svg";
import {
  RiAdvertisementLine,
  RiFileList2Line,
  RiMovie2Line,
  RiMovieLine,
  RiPhoneLine,
  RiQuestionLine,
  RiYoutubeLine,
} from "react-icons/ri";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  MdOutlineMovieCreation,
  MdOutlineSportsBasketball,
} from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container p-[30px] grid grid-cols-4 max-[700px]:grid-cols-2 bg-[#eeeeee] dark:bg-[#111] rounded-xl mt-[118px] gap-10 max-[400px]:grid-cols-1">
        <ul className="install flex flex-col gap-2">
          <div className="mb-12">
            <img src={logo} alt="" />
          </div>
          <div>
            <img src={googlePlay} alt="" />
          </div>
          <div>
            <img src={appStore} alt="" />
          </div>
        </ul>
        <div className="about-us">
          <p className="mb-[18px] font-medium">About us</p>
          <ul className="dark:text-sc text-[#5e5e5e] *:flex *:items-center *:gap-2 grid gap-4">
            <li>
              <RiFileList2Line />
              <span>Public offer</span>
            </li>
            <li>
              <RiAdvertisementLine />
              <span>Advertising</span>
            </li>
            <li>
              <RiQuestionLine />
              <span>F.A.Q</span>
            </li>
            <li>
              <RiPhoneLine />
              <span>Contact</span>
            </li>
          </ul>
        </div>
        <div className="category">
          <p className="mb-[18px] font-medium">Category</p>
          <ul className="dark:text-sc text-[#5e5e5e] *:flex *:items-center *:gap-2 grid gap-4">
            <li>
              <RiMovieLine />
              <span>Movie</span>
            </li>
            <li>
              <MdOutlineMovieCreation />
              <span>Theater</span>
            </li>
            <li>
              <RiMovie2Line />
              <span>Concerts</span>
            </li>
            <li>
              <MdOutlineSportsBasketball />
              <span>Sport</span>
            </li>
          </ul>
        </div>
        <div className="contact-us flex flex-col justify-between">
          <div>
            <p className="mb-5 font-medium">Contact us</p>
            <p className="text-pyc text-[20px] font-medium">
              +998 (95) 897-33-38
            </p>
          </div>
          <div>
            <p className="mb-5">Social medias</p>
            <div className="flex gap-5">
              <FaInstagram />
              <FaFacebook />
              <RiYoutubeLine />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
