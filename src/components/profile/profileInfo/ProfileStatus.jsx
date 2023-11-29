import React from "react";
import classes from "./profileStatus.module.css"

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status || ''
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
      status: this.props.status || ''
    })
  }
  deActivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatusThunkCreator(this.state.status);
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render() {
    return(
      <div className={classes.status}>
        {!this.state.editMode &&
          <span onDoubleClick={this.activateEditMode}>{this.props.status || 'your status ...'}</span>
        }
        {this.state.editMode &&
          <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status} />
        }
      </div>
    )
  }
}

export default ProfileStatus;