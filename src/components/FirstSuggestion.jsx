import Move from "./Move";
import { Link } from "react-router-dom";

const FirstSuggestion = ({ move, title, suggestion, setSuggestion }) => {
  return (
    <>
      <section className="fristsug">
        <div className="move">
          <Move move={move} title={title} />
        </div>

        <div className="suggestions">
          {suggestion.map((item) => (
            <Link to={`/foods`}>
              <div className="card" id="firstcard" key={item._id}>
                <img src={item.image} alt={item.name} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default FirstSuggestion;
