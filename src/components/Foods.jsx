import { Link } from 'react-router-dom'

const Foods = ({menuItem,setMenuItem}) => {



  return (
    <>
      <div className="foodcontainer">
        {/** First line*/}

        <div className="menucontainer">
          <div className="menucard">
            {menuItem
              .reverse()
              .slice(2)
              .map((items) => (
                <div className="menuitems" key={items._id}>
                  <Link
                    to={"/singlepage/body/" + items._id}
                    style={{ textDecoration: "none" }}
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

        <br />

        {/*Second line*/}
        <div className="menucontainer">
          <div className="menucard">
            {menuItem
              .reverse()
              .slice(5)
              .map((items) => (
                <div className="menuitems">
                  <Link
                    to={"/singlepage/body/" + items._id}
                    style={{ textDecoration: "none" }}
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

        <br />

        {/*Third line*/}

        <div className="menucontainer">
          <div className="menucard">
            {menuItem
              .reverse()
              .slice(3)
              .map((items) => (
                <div className="menuitems">
                  <Link
                    to={"/singlepage/body/" + items._id}
                    style={{ textDecoration: "none" }}
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

        <br />

        {/**Fourth line */}

        <div className="menucontainer">
          <div className="menucard">
            {menuItem
              .reverse()
              .slice(1)
              .map((items) => (
                <div className="menuitems">
                  <Link
                    to={"/singlepage/body/" + items._id}
                    style={{ textDecoration: "none" }}
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
        {/** First line*/}

        <div className="menucontainer">
          <div className="menucard">
            {menuItem
              .reverse()
              .slice(2)
              .map((items) => (
                <div className="menuitems" key={items._id}>
                  <Link
                    to={"/singlepage/body/" + items._id}
                    style={{ textDecoration: "none" }}
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

        <br />

        {/*Second line*/}
        <div className="menucontainer">
          <div className="menucard">
            {menuItem
              .reverse()
              .slice(5)
              .map((items) => (
                <div className="menuitems">
                  <Link
                    to={"/singlepage/body/" + items._id}
                    style={{ textDecoration: "none" }}
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

        <br />

        {/*Third line*/}

        <div className="menucontainer">
          <div className="menucard">
            {menuItem
              .reverse()
              .slice(3)
              .map((items) => (
                <div className="menuitems">
                  <Link
                    to={"/singlepage/body/" + items._id}
                    style={{ textDecoration: "none" }}
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

        <br />

        {/**Fourth line */}

        <div className="menucontainer">
          <div className="menucard">
            {menuItem
              .reverse()
              .slice(1)
              .map((items) => (
                <div className="menuitems">
                  <Link
                    to={"/singlepage/body/" + items._id}
                    style={{ textDecoration: "none" }}
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
        {/** First line*/}

        <div className="menucontainer">
          <div className="menucard">
            {menuItem
              .reverse()
              .slice(2)
              .map((items) => (
                <div className="menuitems" key={items._id}>
                  <Link
                    to={"/singlepage/body/" + items._id}
                    style={{ textDecoration: "none" }}
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

        <br />

        {/*Second line*/}
        <div className="menucontainer">
          <div className="menucard">
            {menuItem
              .reverse()
              .slice(5)
              .map((items) => (
                <div className="menuitems">
                  <Link
                    to={"/singlepage/body/" + items._id}
                    style={{ textDecoration: "none" }}
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

        <br />

        {/*Third line*/}

        <div className="menucontainer">
          <div className="menucard">
            {menuItem
              .reverse()
              .slice(3)
              .map((items) => (
                <div className="menuitems">
                  <Link
                    to={"/singlepage/body/" + items._id}
                    style={{ textDecoration: "none" }}
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

        <br />

        {/**Fourth line */}

        <div className="menucontainer">
          <div className="menucard">
            {menuItem
              .reverse()
              .slice(1)
              .map((items) => (
                <div className="menuitems">
                  <Link
                    to={"/singlepage/body/" + items._id}
                    style={{ textDecoration: "none" }}
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
      </div>
    </>
  );
}

export default Foods