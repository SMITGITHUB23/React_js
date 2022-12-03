import Card1 from "../../../../../../assets/images/ranveer-singh.jpg";
import Card2 from "../../../../../../assets/images/dark green.webp";
import Card3 from "../../../../../../assets/images/Gucci.jpg";
import Card4 from "../../../../../../assets/images/Hr.webp";
import Card5 from "../../../../../../assets/images/left2.jpg";
import Card6 from "../../../../../../assets/images/14-15-years.jpg";
import Card7 from "../../../../../../assets/images/denim.jpg";
import Card8 from "../../../../../../assets/images/girl1.jpg";
import Men from "../../../../../../assets/images/Bannermen.webp";
import Women from "../../../../../../assets/images/WomenBanner.webp";
import "./Card.css";

const Card = () => {
  return (
    <>
      <h1 align="center" class="span1 ;text-align=center">
        <span>S</span>
        <span>H</span>
        <span>O</span>
        <span>P</span>
        <span>-</span>
        <span>W</span>
        <span>I</span>
        <span>T</span>
        <span>H</span>
        <span>-</span>
        <span>U</span>
        <span>S</span>
      </h1>

      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col margin-b">
          <div class="card">
            <img src={Men} class="card-img-top imgbanner" alt="..." />
            <div class="centered">
              <a href="http://localhost:3000/Men" className="mentext123">
                Men
              </a>
            </div>
          </div>
        </div>
        <div class="col margin-b">
          <div class="card">
            <img src={Women} class="card-img-top imgbanner" alt="..." />
            <div class="womentext">
              <a href="http://localhost:3000/Women" title="womentext123">
                Women
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 align="center" class="span1 ;text-align=center">
          <span>S</span>
          <span>H</span>
          <span>O</span>
          <span>P</span>
          <span>-</span>
          <span>W</span>
          <span>I</span>
          <span>T</span>
          <span>H</span>
          <span>-</span>
          <span>U</span>
          <span>S</span>
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col-3">
            <div class="card container ">
              <img src={Card1} class="card-img-top imghight" alt="..." />
              <div class="card-body middle">
                <button type="button" class="orange">
                  Shop Now
                </button>
              </div>
            </div>
            <h5 class="card-title" style={{ textAlign: "center" }}>
              Black - Suit
            </h5>

            <p class="card-text" style={{ textAlign: "center" }}>
              Price = $250
            </p>
          </div>
          <div class="col-3">
            <div class="card container ">
              <img src={Card2} class="card-img-top imghight" alt="..." />
              <div class="card-body middle">
                <button type="button" class="orange">
                  Shop Now
                </button>
              </div>
            </div>
            <h5 class="card-title" style={{ textAlign: "center" }}>
              Green t-shirt
            </h5>

            <p class="card-text" style={{ textAlign: "center" }}>
              Price = $50
            </p>
          </div>
          <div class="col-3">
            <div class="card container ">
              <img src={Card3} class="card-img-top imghight" alt="..." />
              <div class="card-body middle">
                <button type="button" class="orange">
                  Shop Now
                </button>
              </div>
            </div>
            <h5 class="card-title" style={{ textAlign: "center" }}>
              Women Gucci Outfit
            </h5>

            <p class="card-text" style={{ textAlign: "center" }}>
              Price = $300
            </p>
          </div>
          <div class="col-3">
            <div class="card container ">
              <img src={Card4} class="card-img-top imghight" alt="..." />
              <div class="card-body middle">
                <button type="button" class="orange">
                  Shop Now
                </button>
              </div>
            </div>
            <h5 class="card-title" style={{ textAlign: "center" }}>
              HR t-shirt
            </h5>

            <p class="card-text" style={{ textAlign: "center" }}>
              Price = $150
            </p>
          </div>
          <div class="col-3">
            <div class="card container ">
              <img src={Card5} class="card-img-top imghight" alt="..." />
              <div class="card-body middle">
                <button type="button" class="orange">
                  Shop Now
                </button>
              </div>
            </div>
            <h5 class="card-title" style={{ textAlign: "center" }}>
              Yellow hoodie
            </h5>

            <p class="card-text" style={{ textAlign: "center" }}>
              Price = $80
            </p>
          </div>
          <div class="col-3">
            <div class="card container ">
              <img src={Card6} class="card-img-top imghight" alt="..." />
              <div class="card-body middle">
                <button type="button" class="orange">
                  Shop Now
                </button>
              </div>
            </div>
            <h5 class="card-title" style={{ textAlign: "center" }}>
              Black and grey t-shirt
            </h5>

            <p class="card-text" style={{ textAlign: "center" }}>
              Price = $60
            </p>
          </div>
          <div class="col-3">
            <div class="card container ">
              <img src={Card7} class="card-img-top imghight" alt="..." />
              <div class="card-body middle">
                <button type="button" class="orange">
                  Shop Now
                </button>
              </div>
            </div>
            <h5 class="card-title" style={{ textAlign: "center" }}>
              Jeans jacket
            </h5>

            <p class="card-text" style={{ textAlign: "center" }}>
              Price = $90
            </p>
          </div>
          <div class="col-3">
            <div class="card container ">
              <img src={Card8} class="card-img-top imghight" alt="..." />
              <div class="card-body middle">
                <button type="button" class="orange">
                  Shop Now
                </button>
              </div>
            </div>
            <h5 class="card-title" style={{ textAlign: "center" }}>
              Women Gucci outfit
            </h5>

            <p class="card-text" style={{ textAlign: "center" }}>
              Price = $600
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
