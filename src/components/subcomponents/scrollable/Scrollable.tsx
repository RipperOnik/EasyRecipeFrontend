import * as React from "react";
import { useState, useEffect } from "react";
import ScrollableForPC from "./ScrollableForPC";
import ScrollableForPhone from "./ScrollableForPhone";

function Scrollable() {


  let [isPC, setIsPC] = useState(window.innerWidth > 950);

  useEffect(() =>{
    setIsPC(window.innerWidth > 950);
  })


  if(isPC){
    return <ScrollableForPC/>
  }
  else{
    return<ScrollableForPhone/>
  }
}

export default Scrollable;
