import classes from "./formsControls.module.css"

export const Input = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;

  return (
    <div>
      <input {...input}  {...props} />
      {/* className={hasError ? classes.postFieldError : classes.postField} */}
      {hasError && <p className={classes.postError}>{meta.error}</p>}
    </div>
  )
}