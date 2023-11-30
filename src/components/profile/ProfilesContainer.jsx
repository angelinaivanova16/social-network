import React, { useEffect } from "react";
import Profile from "./Profile";
import { setUserProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "@reduxjs/toolkit";

function ProfilesContainer(props) {
  let { userId } = useParams();
  if (!userId) {
    userId = props.userId;
}

  useEffect(() => {
    props.setUserProfileThunkCreator(userId)
    props.getStatusThunkCreator(userId)
  }, [userId]);

  return (
      <div>
          <Profile 
            profile={props.profile} 
            status={props.status} 
            updateStatusThunkCreator={props.updateStatusThunkCreator}
          />
      </div>
  );
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.authPage.id,
})

export default compose(
  connect(mapStateToProps, {setUserProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator}),
  withAuthRedirect
) (ProfilesContainer);


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





// let withUrlDataContainerComponent = withRouter(ProfileContainer);