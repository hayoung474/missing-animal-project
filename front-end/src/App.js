import styled from "styled-components";
import Main from "./pages/Main/MainContainer";
import WritePost from "./pages/WritePost/WritePostContainer";
import Header from "./components/Header/HeaderContainer";
import MainMenu from "./components/MainMenu/MainMenuContainer";
import ShelterAnimalList from "./pages/Shelter/ShelterAnimalListContainer";
import AnimalDetailView from "./pages/AnimalDetailView/AnimalDetailViewContainer";
import UserPage from "./pages/UserPage/UserPageContainer";
import { createGlobalStyle } from "styled-components";
import { Link, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
const GlobalStyle = createGlobalStyle`
  body{
    max-width:500px;
    margin: 0 auto;
      
    @font-face {
      font-family: "NanumSquare";
      src: url("./assets/font/NanumSquare_acL.ttf");
    }
    font-family:"NanumSquare"
  }
  .wrapper{
    top: 140px;
    position: relative;
    padding-bottom: 100px;
    padding-left:15px;
    padding-right:15px;
    
  }
  a{
    color:inherit;
    text-decoration:none;
  }
`;
function App() {
  const exclusionArray = [
    '/user_page',
    '/another-path',
  ]
  
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <MainMenu/>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/writePost">
        <WritePost />{" "}
      </Route>
      <Route path="/shelter">
        <ShelterAnimalList />{" "}
      </Route>
      <Route path="/animal_detail">
        <AnimalDetailView />
      </Route>
      <Route path="/user_page">
        <UserPage />
      </Route>
    </>
  );
}

export default App;
