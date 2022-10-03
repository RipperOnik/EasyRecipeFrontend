import * as React from "react"
import {useAppDispatch} from "../../globalState/hooks"
import {navigateToFeed, navigateTab} from "../../globalState/reducerActions"
import {useGetKidPostsQuery} from "../../globalState/api"
import {TabItemsNames} from "../../resources/strings"
import CardGroup from "../subcomponents/cards/CardGroup"


function KidFriendly(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useAppDispatch()
    dispatch(navigateTab(TabItemsNames.KIDFRIENDLY))

    const words = TabItemsNames.KIDFRIENDLY.split("_")

    let header = ""

    for (let index = 0; index < words.length; index++) {
        const element = words[index];
        header += element + " "
    }
    header = header.slice(0, header.length-1)

    dispatch(navigateToFeed({useQuery: () => useGetKidPostsQuery, header: header, tag: ""}))

    return (
        <CardGroup/>
    )


}

export default KidFriendly