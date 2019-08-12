import React, { Fragment } from "react";
import { connect } from "react-redux";

import { fetchActiveUser } from "store/user/user-actions";
import Navbar from "../components/common/Navbar";
import HomeDetail from "../components/pages/home/HomeDetail";

class Home extends React.Component {
  componentDidMount() {
    this.getUserData();
  }

  async getUserData() {
    await this.props.fetchActiveUser();
  }

  render() {
    const { user } = this.props;
    return (
      <Fragment>
        <Navbar />
        <div>Hello {user.name}</div>
        <HomeDetail />
      </Fragment>
    );
  }
}

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
)(Home);
