import * as React from "react";
import Tab from "./Tab";
import {TabItemsNames} from "../../../resources/strings"

interface Tabs {tabs: string[], path: string}

function Tabs({tabs, path}: Tabs) {
  return (
    <>
      <ul className="nav justify-content-center" style={{marginBottom: "40px"}}>
        {tabs.map((el) => {

          const words = el.split("_")

          let header = ""

          for (let index = 0; index < words.length; index++) {
              const element = words[index];
              header += element + " "
          }
          header = header.slice(0, header.length-1)


          return(<Tab key={`${path}${el.toLowerCase()}`} name={header} url={`${path}${el.toLowerCase()}`}/>)
        })}


      </ul>
    </>
  );
}

export default Tabs;
