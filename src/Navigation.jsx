function Arrow({ direction = "0deg", changePage, disabled }) {
  let styles = { rotate: direction };
  if (disabled) {
    styles.fillOpacity = "30%";
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="arrows"
      style={styles}
      viewBox="0 0 16 16"
      onClick={changePage}
    >
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
    </svg>
  );
}

function Navigation({
  page = 1,
  pages = 50,
  setPage,
  setLimit,
  input = false,
}) {
  function prevPage() {
    if (page == 1) return;
    setPage(page - 1);
  }
  function nextPage() {
    if (page == pages) return;
    setPage(page + 1);
  }

  const handleChange = (event) => {
    setLimit(event.target.value);
  };

  return (
    <div className="navBar">
      <div className="navigation">
        <Arrow disabled={page == 1} changePage={prevPage} />
        <span className="pagination">
          {page}-{pages}
        </span>
        <Arrow
          direction={"180deg"}
          disabled={page == pages}
          changePage={nextPage}
        />
      </div>
      <div className="inputN" style={{ display: input ? "flex" : "none" }}>
        <label htmlFor="limits">Limit{": "}</label>
        <select
          id="limits"
          name="limits"
          defaultValue="18"
          onChange={handleChange}
        >
          <option value="12">12</option>
          <option value="18">18</option>
          <option value="24">24</option>
          <option value="30">30</option>
          <option value="36">36</option>
          <option value="42">42</option>
          <option value="48">48</option>
          <option value="54">54</option>
        </select>
      </div>
    </div>
  );
}

export default Navigation;
