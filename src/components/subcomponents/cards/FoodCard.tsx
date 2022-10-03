import * as React from "react";
import Rating from "../Rating";
import DetailedPage from "../../interfaces/DetailedPage";
import { navigateToDetailedPage } from "../../../globalState/reducerActions";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../globalState/hooks";

function FoodCard(props: DetailedPage) {
  const dispatch = useAppDispatch();
  return (
    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-12" style={{marginLeft: "1vw", marginRight: "1vw"}}>
      <Link
        to={`/recipe/${props.id}`}
        onClick={() =>
          dispatch(
            navigateToDetailedPage({
              id: props.id,
              urlImage: props.urlImage,
              title: props.title,
              author: props.author,
              averageRating: props.averageRating,
              totalReviewCount: props.totalReviewCount,
              preparationTimeSeconds: props.preparationTimeSeconds,
              ingridients: props.ingridients,
              steps: props.steps,
              calories: props.calories,
            })
          )
        }
      >
        <div
          className="card"
          style={{
            width: "18rem",
            margin: "1.5rem 0.6rem",
            padding: "0",
            display: "inline-block",
            overflow: "hidden",
          }}
        >
          <img
            src={props.urlImage}
            className="card-img-top"
            alt="img"
            style={{ height: "250px" }}
          />
          <div
            className="card-body custom-card"
            style={{ whiteSpace: "normal" }}
          >
            <h5
              className="card-title"
              style={{ height: "3rem", fontSize: "1rem" }}
            >
              {props.title}
            </h5>
            <Rating
              averageRating={props.averageRating ?? 0}
              totalReviewCount={props.totalReviewCount ?? 0}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FoodCard;
