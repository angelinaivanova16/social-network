// import React from "react";
import { useEffect, useState } from "react";
import classes from "./profileStatus.module.css"

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status)

  useEffect( () => {
    setStatus(props.status)
  }, [props.status] );

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatusThunkCreator(status);
  }
  
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  
  return(
    <div className={classes.status}>
      {!editMode &&
        <span onDoubleClick={activateEditMode}>{props.status || 'your status ...'}</span>
      }
      {editMode &&
        <input 
          onChange={onStatusChange} 
          autoFocus={true}
          onBlur={deActivateEditMode}
          value={status}
        />
      }
    </div>
  )
}

export default ProfileStatusWithHooks;