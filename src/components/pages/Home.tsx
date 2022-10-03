import * as React from "react";
import Scrollable from "../subcomponents/scrollable/Scrollable";
import CardGroupScrollable from "../subcomponents/cards/CardGroupScrollable";
import {
  useGetPopularPostsQuery,
  useGetTrendingPostsQuery,
} from "../../globalState/api";
import LoadingSpinner from "../subcomponents/specialCases/LoadingSpinner";
import DetailedPage from "../interfaces/DetailedPage";


function Home() {
  let popularPosts;
  let trendingPosts;

  const popularCards: DetailedPage[] = [];
  const trendingCards: DetailedPage[] = [];

  const responsePopular = useGetPopularPostsQuery(0);
  const responseTrending = useGetTrendingPostsQuery(0);

  if (responsePopular.isSuccess) {
    popularPosts = responsePopular.data;
    var ingridientsTemp: string[] = []
    for (let i = 0; i < popularPosts.length / 2; i++) {
      const element = popularPosts[i];

      ingridientsTemp = []

      for (let i = 0; i < element.ingridients.length; i++) {
        ingridientsTemp.push(element.ingridients[i])
      }


      popularCards.push({
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
  if (responseTrending.isSuccess) {
    trendingPosts = responseTrending.data;
    var ingridientsTemp: string[] = []
    for (let i = 0; i < trendingPosts.length / 2; i++) {
      const element = trendingPosts[i];

      ingridientsTemp = []

      for (let i = 0; i < element.ingridients.length; i++) {
        ingridientsTemp.push(element.ingridients[i])
      }


      trendingCards.push({
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

  return (
    <div className="my-feed-main">
      <h1>Choose your favorite cuisine</h1>
      <Scrollable />
      {responsePopular.isSuccess && responseTrending.isSuccess ? (
        <div>
          <CardGroupScrollable headerText="Popular" cards={popularCards} useQuery={useGetPopularPostsQuery} tag=""/>
          <CardGroupScrollable headerText="Trending" cards={trendingCards} useQuery={useGetTrendingPostsQuery} tag=""/>
        </div>
      ) : (
        <LoadingSpinner />
      )}
      {responsePopular.isError && <p>{responsePopular.error.toString()}</p>}
    </div>
  );
}

export default Home;
