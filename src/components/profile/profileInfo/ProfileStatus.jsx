import React from "react";
import classes from "./profileStatus.module.css"

class ProfileStatus extends React.Component {

  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deActivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }

  render() {
    return(
      <div className={classes.status}>
        {!this.state.editMode &&
          <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
        }
        {this.state.editMode &&
          <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status} type="text" />
        }
      </div>
    )
  }
}

export default ProfileStatus;