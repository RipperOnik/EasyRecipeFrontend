import * as React from "react"
import {useAppDispatch} from "../../globalState/hooks"
import {navigateToFeed, navigateTab} from "../../globalState/reducerActions"
import {useGetSideDishPostsQuery} from "../../globalState/api"
import {TabItemsNames} from "../../resources/strings"
import CardGroup from "../subcomponents/cards/CardGroup"




function SideDish(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useAppDispatch()
    dispatch(navigateTab(TabItemsNames.SIDEDISH))

    const words = TabItemsNames.SIDEDISH.split("_")

    let header = ""

    for (let index = 0; index < words.length; index++) {
        const element = words[index];
        header += element + " "
    }
    header = header.slice(0, header.length-1)

    dispatch(navigateToFeed({useQuery: () => useGetSideDishPostsQuery, header: header, tag: ""}))

    return (
        <CardGroup/>
    )


}

export default SideDish