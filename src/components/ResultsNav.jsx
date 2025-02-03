
export default function ResultsNav() {
  return (
    <div className="r-nav">
      <div className="r-nav-btns">
        <button className="r-nav-btn">All</button>
        <button className="r-nav-btn">Employees</button>
        <button className="r-nav-btn">Projects</button>
      </div>
      <div>
        <button className="r-nav-btn sort-btn">
          <span className="sort-txt">Sort</span>
          <img src="./sort.png" alt="" className="sort-btn-icon"/>
        </button>
      </div>
    </div>
  )
};
