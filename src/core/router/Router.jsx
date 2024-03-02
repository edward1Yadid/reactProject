import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../store/ErrorPage";
import NavigateToComponents from "./NavigateToComponents";
import LoginPage from "../../ui/pages/LoginPage";
import FavoriteCard from "../../ui/pages/FavoriteCard";
import Signup from "../../ui/pages/Signup";
import About from "../../ui/pages/About";
import MyCardPage from "../../ui/pages/MyCardPage";
import CardPage from "../../ui/pages/CardPage";
import CardDetailPage from "../../ui/pages/CardDetailPage";
import EditCard from "../hooks/cards/pages/EditCard";
import CreateNewCard from "../../ui/pages/CreateNewCard";
import EditUserProfile from "../../ui/pages//EditUserProfile";
import UserProlie from "../../ui/pages/UserProlie";

const Router = () => {
  return (
    <Routes>
      {/*
General Routes
*/}
      <Route path={NavigateToComponents.About} element={<About />}></Route>
      <Route
        path={NavigateToComponents.HomePage}
        element={<CardPage />}
      ></Route>
      {/*
User Routes 
*/}
      <Route
        path={NavigateToComponents.LoginPage}
        element={<LoginPage />}
      ></Route>
      <Route path={NavigateToComponents.SignUp} element={<Signup />}></Route>
      <Route
        path={NavigateToComponents.Edit_User}
        element={<EditUserProfile />}
      ></Route>

      <Route path={NavigateToComponents.USER_PROFILE} element={<UserProlie/>}></Route>
      {/*
Card Routes
*/}

      <Route
        path={NavigateToComponents.FavoriteCardPage}
        element={<FavoriteCard />}
      ></Route>
      <Route
        path={NavigateToComponents.MyCardsPage}
        element={<MyCardPage />}
      ></Route>
      <Route
           path={`${NavigateToComponents.Card_deatils}/:id`}
        element={<CardDetailPage />}
      ></Route>
      <Route
        path={`${NavigateToComponents.EDIT_CARD}/:id`}
        element={<EditCard />}
      ></Route>
      <Route
        path={NavigateToComponents.CREATE_CARD}
        element={<CreateNewCard />}
      ></Route>

      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default Router;
