import Carousel from "../components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TopMenuBar from "../components/TopMenuBar";
import './MainPage.css';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <div className="container">
            <TopMenuBar/>
            <Carousel />
            <button type="button" id="intro2">동아리 소개 </button>
            <Link to="/join"><button type="button" id="join2"> 동아리 지원 </button></Link>
        </div>

    );
}

export default MainPage;