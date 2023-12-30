import TopBar from "./TopBar/TopBar";
import Hero from "./Hero/Hero";
import { useEffect, useState } from "react";

function HomePage() {
  const [setHeroHeight, setSetHeroHeight] = useState(0);

  useEffect(() => {
    // Calculate setHeroHeight and topBarHeight on component load
    const main = document.getElementsByTagName("main");

    const topBar = document.querySelector(".topContainer");

    const calculatedSetHeroHeight = main[0].clientHeight - topBar.clientHeight;

    // Update state with the calculated heights
    setSetHeroHeight(calculatedSetHeroHeight);
  }, []);

  return (
    <>
      <TopBar />
      <Hero heroHeight={setHeroHeight} />
    </>
  );
}

export default HomePage;
