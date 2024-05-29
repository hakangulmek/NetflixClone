import MainPageSlider from "../MainPageSlider";
import MainPageNavbar from "./MainPageNavbar";

function MainPage() {
  return (
    <div className="bg-black h-[729px] absolute w-full">
      <MainPageNavbar />
      <MainPageSlider />
    </div>
  );
}

export default MainPage;
