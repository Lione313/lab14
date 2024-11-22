import  {useNavigate} from "react-router-dom";

import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";

import './Img.css';

function HomePage() {
  return (
    <>
      <HeaderComponent />
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button 
      type="button" 
      data-bs-target="#carouselExampleCaptions" 
      data-bs-slide-to="0" 
      className="active" 
      aria-current="true" 
      aria-label="Slide 1"
    ></button>
    <button 
      type="button" 
      data-bs-target="#carouselExampleCaptions" 
      data-bs-slide-to="1" 
      aria-label="Slide 2"
    ></button>
    <button 
      type="button" 
      data-bs-target="#carouselExampleCaptions" 
      data-bs-slide-to="2" 
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img 
        src="https://www.clarin.com/2023/12/14/i9dQZlcz1_2000x1500__1.jpg" 
        className="d-block w-100" 
        alt="..."
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Campo de Terror</h5>
        <p>Scream</p>
      </div>
    </div>
    <div className="carousel-item">
      <img 
        src="https://m.media-amazon.com/images/G/01/seo/siege-lists/best-comedy-audiobooks-social.jpg" 
        className="d-block w-100" 
        alt="..."
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Campo de Comedia</h5>
        <p>Risas y Motivacion.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img 
        src="https://via.placeholder.com/800x400" 
        className="d-block w-100" 
        alt="..."
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Campo de Drama</h5>
        <p>Aca veras tus series de Drama</p>
      </div>
    </div>
    <div className="carousel-item">
      <img 
        src="https://via.placeholder.com/800x400" 
        className="d-block w-100" 
        alt="..."
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Campo de horror</h5>
        <p>Aca veras tus series de Horror</p>
      </div>
    </div>
  </div>
  <button 
    className="carousel-control-prev" 
    type="button" 
    data-bs-target="#carouselExampleCaptions" 
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button 
    className="carousel-control-next" 
    type="button" 
    data-bs-target="#carouselExampleCaptions" 
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


      <FooterComponent/>
    </>
  );
}

export default HomePage;
