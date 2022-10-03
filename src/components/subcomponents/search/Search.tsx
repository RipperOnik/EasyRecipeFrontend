import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useSearchPostsQuery} from "../../../globalState/api"
import {useAppDispatch} from "../../../globalState/hooks"
import {navigateToFeed} from "../../../globalState/reducerActions" 




function Search() {
  let [text, setText] = useState("")
  let [searchText, setSearchText] = useState("")

  const dispatch =  useAppDispatch()

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>){
    setText(event.target.value)

    const words = event.target.value.split(" ")
    let modifiedText = ""
    for (let index = 0; index < words.length; index++) {
      modifiedText += words[index] + "_"
    }
    

    setSearchText(modifiedText.slice(0,modifiedText.length-1))
   
  }

  function submitHandler(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()


  }



  return (
    <form className="d-flex" method="get" onSubmit={(e) => submitHandler(e)}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search recipes"
        aria-label="Search"
        onChange={changeHandler}
        value={text}
      />



      <Link to={`/search/${searchText}`} onClick={() => {
        dispatch(navigateToFeed({useQuery: () => useSearchPostsQuery, header: "Seach Results", tag: searchText}))
        setText("")
        }}>
      <button className="btn btn-outline-success" type="submit" style={{textDecoration: "none"}}>
        Search
      </button>
      </Link>

    </form>
  );
}

export default Search;
