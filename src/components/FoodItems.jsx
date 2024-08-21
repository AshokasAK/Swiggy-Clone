import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const FoodItems = ({ title, foodItems }) => {
  const move = () => {
    const menucard = document.querySelector(".menucard");
    const indicator = document.getElementById("indicator");
    const left = document.getElementById("itemleft");
    const right = document.getElementById("itemright");

    const scrollPosition = menucard.scrollLeft;
    const scrollWidth = menucard.scrollWidth;

    /*Another method*/
    //  const clientWidth = menucard.clientWidth;
    //  const indicatorWidth = (scrollPosition / (scrollWidth - clientWidth)) * 500;
    const indicatorWidth = (scrollPosition / scrollWidth) * 500;

    left.addEventListener("click", () => {
      menucard.scrollLeft += -330;
      indicator.style.transform = `translateX(${indicatorWidth}%)`;

      //    console.log(`ScrollWidth :${scrollWidth}`)
      //   console.log(`indicator:${indicatorWidth}`)
      // console.log(`ClientWidth:${clientWidth}`)
    });
    right.addEventListener("click", () => {
      menucard.scrollLeft += 330;
      indicator.style.transform = `translateX(${indicatorWidth}%)`;
    });

    menucard.addEventListener("scroll", (event) => {
      indicator.style.transform = `translateX(${indicatorWidth}%)`;
    });
  };

  return (
    <>
      <section className="fooditems">
        <div className="move">
          <h3>{title}</h3>
          <div className="movebuttons">
            <button id="itemleft" onClick={(e) => move(e)}>
              <IoIosArrowBack style={{ paddingTop: "8px" }} />
            </button>
            <button id="itemright" onClick={(e) => move(e)}>
              <IoIosArrowForward style={{ paddingTop: "8px" }} />
            </button>
          </div>
        </div>
        <div className="menucontainer">
          <div className="menucard">
            {foodItems.map((items) => (
              <div className="menuitems">
                <Link
                  to={"/singlepage/body/" + items._id}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <div
                    id="item"
                    style={{
                      backgroundImage: `url(${items.image})`,
                    }}
                  ></div>
                  <h4>{items.name}</h4>
                </Link>
                <div className="ratings">
                  <img src="../images/starrating.png" alt="ratings" />
                  <h6>{items.ratting}</h6>
                  <span></span>
                  <h5>{items.timing}</h5>
                </div>
                <p>{items.searchkey.map((i) => i).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodItems;
