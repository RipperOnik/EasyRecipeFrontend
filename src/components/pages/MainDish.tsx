import * as React from "react"
import {useAppDispatch, useAppSelector} from "../../globalState/hooks"
import {navigateToFeed, navigateTab} from "../../globalState/reducerActions"
import {useGetMainDishPostsQuery} from "../../globalState/api"
import {TabItemsNames} from "../../resources/strings"
import CardGroup from "../subcomponents/cards/CardGroup"




function MainDish(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useAppDispatch()
    dispatch(navigateTab(TabItemsNames.MAINDISH))

    const words = TabItemsNames.MAINDISH.split("_")

    let header = ""

    for (let index = 0; index < words.length; index++) {
        const element = words[index];
        header += element + " "
    }
    header = header.slice(0, header.length-1)

    dispatch(navigateToFeed({useQuery: () => useGetMainDishPostsQuery, header: header, tag: ""}))

    return (
        <CardGroup/>
    )


}

export default MainDish