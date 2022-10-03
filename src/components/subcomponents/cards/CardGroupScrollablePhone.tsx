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

function CardGroupScrollablePhone(props: CardGroupScrollableProps) {
  const dispatch = useAppDispatch();

  return (
    <div style={{ margin: "50px 0" }}>
      <h1>{props.headerText}</h1>

      <div className="scrollable container">
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

export default CardGroupScrollablePhone;
