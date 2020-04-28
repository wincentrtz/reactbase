import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchActiveUser } from "store/user/actions";
import Navbar from "components/common/navbar";
import HomeDetailSection from "components/pages/home/home-detail-section";
import { HomePageContainer, GreetingContent } from "./style";
import Axios from "axios";

const HomePage = ({ fetchActiveUser, user }) => {
  useEffect(() => {
    fetchActiveUser();
  }, [fetchActiveUser]);
  return (
    <HomePageContainer>
      <Navbar />
      <GreetingContent>Hello {user.name}</GreetingContent>
      <HomeDetailSection />
    </HomePageContainer>
  );
};

const mapStateToProps = ({ userReducers }) => {
  return {
    user: userReducers.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchActiveUser: () => dispatch(fetchActiveUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
