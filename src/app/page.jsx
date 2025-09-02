"use client"
import { useEffect, useRef } from "react";
import About from "./components/About";
import HomeServices from "./components/HomeServices";
import HomeSlider from "./components/HomeSlider";
import Team from "./components/Team";
import Technologies from "./components/Technologies";
import Testimonials from "./components/Testimonials";
import UserSaying from "./components/UserSaying";
import HomeScreen from "./components/HomeScreen";
import { Brands } from "./components/Brands";
import BottomSec from "./components/BottomSec";
import ProjectCards from "./components/Portfolio";
import Section4 from "./components/Section4";

export default function Home() {

  return (
    <>
      <HomeScreen />
      <Brands />
      {/* <HomeSlider /> */}
      <About />
      <HomeServices />
      <ProjectCards/>
      {/* <Testimonials /> */}
      <Technologies />
      <Team />
      <UserSaying />
    </>
  );
}
