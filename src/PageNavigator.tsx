import { Route, Routes } from "react-router-dom";
import App from "./App";
import PokeCardList from "./List/PokeCardList";

const PageNavigator = () =>{
    return(
        <Routes>
            <Route path="" element = { <PokeCardList/>}/>
            <Route path="/pokemon/:name" element = { <App/>}/>
        </Routes>
    )
}

export default PageNavigator;