import React from "react";
import { connect } from "react-redux";

import { fetchActiveUser } from "store/user/user-actions";

class Home extends React.Component {
  componentDidMount() {
    this.getUserData();
  }

  async getUserData() {
    await this.props.fetchActiveUser();
  }

  render() {
    const { user } = this.props;
    return <div>Hello {user.name}</div>;
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
