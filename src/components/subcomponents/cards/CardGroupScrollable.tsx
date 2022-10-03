import * as React from "react";
import DetailedPage from "../../interfaces/DetailedPage";
import {useState, useEffect} from "react"
import CardGroupScrollablePC from "./CardGroupScrollablePC"
import CardGroupScrollablePhone from "./CardGroupScrollablePhone"


interface CardGroupScrollableProps {
  headerText: string;
  cards: DetailedPage[];
  useQuery: any;
  tag: string;
}

function CardGroupScrollable(props: CardGroupScrollableProps) {
  let [isPC, setIsPC] = useState(window.innerWidth > 950);

  useEffect(() =>{
    setIsPC(window.innerWidth > 950);
  })


  if(isPC){
    return <CardGroupScrollablePC headerText={props.headerText} cards = {props.cards} useQuery={props.useQuery} tag={props.tag}/>
  }
  else{
    return<CardGroupScrollablePhone headerText={props.headerText} cards = {props.cards} useQuery={props.useQuery} tag={props.tag}/>
  }
}
 
  


export default CardGroupScrollable;
