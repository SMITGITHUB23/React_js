import logo from "../../../../../assets/images/c.png";

const Footer = () => {
  return (
    <div>
      <footer class="footer " style={{ backgroundColor: "black" }}>
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4 logocs">
                  <img src={logo} class="svg1" alt="..." />
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">USEFUL LINKS</h6>
                <p>
                  <a href="http://localhost:3000/contact" class="text-reset">
                    Contact
                  </a>
                </p>
                <p>
                  <a href="http://localhost:3000/about" class="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="http://localhost:3000/Women" class="text-reset">
                    Women
                  </a>
                </p>
                <p>
                  <a href="http://localhost:3000/Men" class="text-reset">
                    Men
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i>316, Cosys Infotech LLP,
                  aashish commercial complex, opp.apple bite, astron
                  chowk,Rajkot – 360001
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  cosys.infotech@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i>+91 951234 2502
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
