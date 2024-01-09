// import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./profileStatus.module.css"
import { updateStatusThunkCreator } from "../../../redux/profile-reducer";

const ProfileStatusWithHooks = (props) => {
  const dispatch = useDispatch();

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
    dispatch(updateStatusThunkCreator(status))
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