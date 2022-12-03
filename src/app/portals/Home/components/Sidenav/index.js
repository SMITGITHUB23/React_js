import "./Sidenav.css";

const Sidenav = () => {
  return (
    <div class="row mt-5">
      <div class="col-md-9 mx-auto bg22">
        <div class="small fw-light"></div>
        <div class="input-group">
          <input
            class="form-control border"
            type="search"
            value="search"
            id="example-search-input"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
