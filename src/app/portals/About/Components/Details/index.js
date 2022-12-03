import "../Details/About.css";
import logo from "../../../../../assets/images/logo.png";
import About from "../../../../../assets/images/services1.svg";
import About1 from "../../../../../assets/images/services2.svg";
import About2 from "../../../../../assets/images/services4.svg";

const Details = () => {
  return (
    <>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-2 div-center">
            <div className="swing">
              <img
                src={logo}
                class="img-fluid rounded-start  img-center"
                alt="..."
              />
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="title22">Quality, not quantity</h5>
              <p class="text33">
                We have made quality our habit. It’s not something that we just
                strive for – we live by this principle every day.It's better to
                develop quality-focused friendships than to have several people
                around you, but nobody to talk to when you need it the most.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 align="center" class="span3">
        <span>O</span>
        <span>U</span>
        <span>R</span>
        <span>-</span>
        <span>S</span>
        <span>E</span>
        <span>R</span>
        <span>V</span>
        <span>I</span>
        <span>C</span>
        <span>E</span>
      </h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="cl">
          <div class="card2233">
            <img src={About} class="svg2233" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Our ethical approach.</h5>
              <p class="card-text">
                We spend months finding the best factories around the world—the
                same ones that produce your favorite designer labels. We visit
                them often and build strong personal relationships with the
                owners. Each factory is given a compliance audit to evaluate
                factors like fair wages, reasonable hours, and environment.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card2233">
            <img src={About1} class="svg2233" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Designed to last.</h5>
              <p class="card-text">
                At Everlane, we’re not big on trends. We want you to wear our
                pieces for years, even decades, to come. That’s why we source
                the finest materials and factories for our timeless products—
                like our Grade-A cashmere sweaters, Italian shoes, and Peruvian
                Pima tees.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card2233">
            <img src={About2} class="svg2233" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Radically Transparent.</h5>
              <p class="card-text">
                We believe our customers have a right to know how much their
                clothes cost to make. We reveal the true costs behind all of our
                products—from materials to labor to transportation—then offer
                them to you, minus the traditional retail markup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
