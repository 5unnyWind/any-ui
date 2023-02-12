import React from "react";
import List from "../list";
const data = [
'Racing car sprays burning fuel into crowd.',
'Japanese princess to wed commoner.',
'Australian walks 100km after outback crash.',
'Man charged over missing wedding girl.',
'Los Angeles battles huge wildfires.',
];
const App = () => {
    return(
        <>
        <List bordered dataSource={data} size = "lg"></List>
        <List bordered dataSource={data} size = "sm" ></List>
        <List dataSource={data} header = "header" footer = "footer"></List>
        <List dataSource={data} renderItem = {(item) => (<ul>
        <img src = "./pic/1.png" alt = "a picture" ></img>[ITEM] {item}</ul>)
        }></List>
        </> 
    )
}
export default App;