import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchActiveUser } from "store/user/actions";
import Navbar from "components/common/navbar";
import HomeDetailSection from "components/pages/home/home-detail-section";
import { HomePageContainer, GreetingContent } from "./style";

const HomePage = () => {
  const user = useSelector(({ userReducers }) => userReducers.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActiveUser());
  }, [dispatch]);

  return (
    <HomePageContainer>
      <Navbar />
      <GreetingContent>Hello {user.name}</GreetingContent>
      <HomeDetailSection />
    </HomePageContainer>
  );
};

export default HomePage;
