import MainPageSlider from "../MainPageSlider";
import MainPageNavbar from "./MainPageNavbar";
import Row from "./Row";

function MainPage() {
  return (
    <div className="bg-black h-[729px] absolute w-full">
      <MainPageNavbar />
      <MainPageSlider />
      <Row />
    </div>
  );
}

export default MainPage;
