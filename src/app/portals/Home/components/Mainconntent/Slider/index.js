import Slider1 from "../../../../../../assets/images/b1.jpg";
import Slider2 from "../../../../../../assets/images/b2.jpg";
import Slider3 from "../../../../../../assets/images/b3.webp";
import Stikyslider from "../../../../../../assets/images/left3.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="row p-0">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide  col-lg-8 m-0"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={Slider1} class="d-block w-100 sl" alt="..." />
            <h1>
              <div class="centered">MEN'S FASHION</div>
            </h1>
            <div class="carousel-caption d-none d-md-block">
              <button type="button" class="btn btn-warning">
                Shop Now
              </button>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={Slider2} class="d-block w-100 sl" alt="..." />
            <h1>
              <div class="centered">WOMEN'S FASHION</div>
            </h1>
            <div class="carousel-caption d-none d-md-block">
              <button type="button" class="btn btn-warning">
                Shop Now
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Slider3} class="d-block w-100 sl" alt="..." />
            <h1>
              <div class="centered">WOMEN'S FASHION</div>
            </h1>
            <div class="carousel-caption d-none d-md-block">
              <button type="button" class="btn btn-warning">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="col-lg-4 m-0 ">
        <img
          src={Stikyslider}
          class="d-block w-100 rightbanner sl "
          alt="..."
        />
        <h1>
          <div class=" ed">MEN'S FASHION</div>
        </h1>
      </div>
    </div>
  );
};

export default Slider;
