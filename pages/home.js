import Hero from "../components/Hero";
import CryptoSlider from "../components/CryptoSlider/CryptoSlider";
import TopCryptoAssets from "../components/TopCryptoAssets";
import OurWorldClassTradingPlatform from "../components/OurWorldClassTradingPlatform";
import Features from "../components/Features";
import TradingWith from "../components/TradingWith";
import OpenAccount from "../components/OpenAccount";
import DownloadApp from "../components/DownloadApp";
import Innovative from "../components/Innovative";

function home() {
  return (
    <>
      <Hero />
      <CryptoSlider />
      <TopCryptoAssets />
      <OurWorldClassTradingPlatform />
      <Features />
      <TradingWith />
      <Innovative />
      <OpenAccount />
      <DownloadApp />
    </>
  );
}

export default home;
