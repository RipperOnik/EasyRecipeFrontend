import * as React from "react";
import FoodCard from "./FoodCard";
import DetailedPage from "../../interfaces/DetailedPage";

import {useAppSelector} from "../../../globalState/hooks"

import LoadingSpinner from "../specialCases/LoadingSpinner"



function CardGroup() {



  const useQuery = useAppSelector(state => state.currentFeed.useQuery)()
  const header = useAppSelector(state => state.currentFeed.header)
  const tag = useAppSelector(state => state.currentFeed.tag)

  const words = header.split("_")

  let headerFixed = ""

  for (let index = 0; index < words.length; index++) {
      const element = words[index];
      headerFixed += element + " "
  }
  headerFixed = headerFixed.slice(0, headerFixed.length-1)

  let feedPosts;

  const feedCards: DetailedPage[] = [];



  const response = useQuery(tag.length > 0 ? tag : 0);


  if (response.isSuccess) {
    feedPosts = response.data;
    var ingridientsTemp: string[] = []
    for (let i = 0; i < feedPosts.length; i++) {
      const element = feedPosts[i];

      ingridientsTemp = []

      for (let i = 0; i < element.ingridients.length; i++) {
        ingridientsTemp.push(element.ingridients[i])
      }


      feedCards.push({
        id: element.id,
        title: element.title,
        averageRating: element.averageRating,
        totalReviewCount: element.totalReviewCount,
        urlImage: element.urlImage,
        author: element.author,
        preparationTimeSeconds: element.preparationTimeSeconds,
        ingridients: ingridientsTemp,
        steps: element.steps,
        calories: element.calories,
      });

    }
  }


  if(!response.isFetching && !response.isLoading){
    return (
      <div className="container">
        <div className="row d-flex justify-content-center" style={{textAlign: "center"}}>
          <h1>{headerFixed}</h1>
          {feedCards.map((card) => {
            return (
              <FoodCard
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
    );
  }
  else{
    return <div className="d-flex justify-content-center">
      <LoadingSpinner/>
    </div>
  }

    
}

export default CardGroup;
