import React, { useEffect } from "react";
import Profile from "./Profile";
import { setUserProfileThunkCreator } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function ProfilesContainer(props) {
  let { userId } = useParams();
  if (!userId) {
    userId = 30247;
}

  useEffect(() => {
    props.setUserProfileThunkCreator(userId)
  }, [userId]);

  return (
      <div>
          <Profile profile={props.profile} isAuth={props.isAuth} />
      </div>
  );
}


// class ProfileContainer extends React.Component {
//   componentDidMount() {
//     let userId = this.props.profile.userId;
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/profile`+userId
//       )
//       .then(response => {
//         this.props.setUserProfile(response.data);
//       });
//   }

//   render() {
//     return(
//       <Profile profile={this.props.profile} {...this.props}/>
//     )
//   }
// }

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.authPage.isAuth,
})

// let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfileThunkCreator}) (ProfilesContainer);