import * as React from "react";
import FoodCardScrollable from "./FoodCardScrollable";
import { Link } from "react-router-dom";
import DetailedPage from "../../interfaces/DetailedPage";
import { useAppDispatch } from "../../../globalState/hooks";
import { navigateToFeed } from "../../../globalState/reducerActions";

interface CardGroupScrollableProps {
  headerText: string;
  cards: DetailedPage[];
  useQuery: any;
  tag: string;
}

function CardGroupScrollablePC(props: CardGroupScrollableProps) {
  const dispatch = useAppDispatch();

  const scrollable = React.useRef(null);

  return (
    <div style={{ margin: "50px 0" }}>
      <h1>{props.headerText}</h1>
      <div className="container">
        <div className="row">
          <div className="col-1 d-flex justify-content-end">
            <div className="align-self-center" style={{ zIndex: "7" }}>
              {" "}
              <button
                className="floating-arrow-button"
                onClick={() => {
                  if (window.innerWidth > 1000) {
                    (scrollable.current as unknown as Element).scrollBy(-930, 0);
                  } else if (
                    window.innerWidth < 1000 &&
                    window.innerWidth > 615
                  ) {
                    (scrollable.current as unknown as Element).scrollBy(-615, 0);
                  } else if (window.innerWidth > 300) {
                    (scrollable.current as unknown as Element).scrollBy(-307, 0);
                  }
                }}
              >
                {"<"}
              </button>
            </div>
          </div>

          <div className="col-10">
            <div className="scrollable container" ref={scrollable}>
              {props.cards.map((card, index) => {
                return (
                  <FoodCardScrollable
                    id={card.id}
                    key={card.id}
                    author={card.author}
                    preparationTimeSeconds={card.preparationTimeSeconds}
                    ingridients={card.ingridients}
                    steps={card.steps}
                    title={card.title}
                    averageRating={card.averageRating ?? 0}
                    totalReviewCount={card.totalReviewCount ?? 0}
                    urlImage={card.urlImage}
                    calories={card.calories}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-1 d-flex justify-content-start">
            <div
              className="align-self-center"
              style={{
                zIndex: "7",
                paddingRight: "0",
                paddingLeft: "0",
              }}
            >
              {" "}
              <button
                className="floating-arrow-button"
                onClick={() => {
                  if (window.innerWidth > 1000) {
                    (scrollable.current as unknown as Element).scrollBy(930, 0);
                  } else if (
                    window.innerWidth < 1000 &&
                    window.innerWidth > 615
                  ) {
                    (scrollable.current as unknown as Element).scrollBy(615, 0);
                  } else if (window.innerWidth > 300) {
                    (scrollable.current as unknown as Element).scrollBy(307, 0);
                  }
                }}
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "end" }} className="container">
        <Link
          to={`/feed/${props.headerText}`}
          onClick={() =>
            dispatch(
              navigateToFeed({
                useQuery: () => props.useQuery,
                header: props.headerText,
                tag: props.tag,
              })
            )
          }
        >
          see all
        </Link>
      </div>
    </div>
  );
}

export default CardGroupScrollablePC;
