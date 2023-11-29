export const requiredFields = (values) => {
  if(values) return undefined;
  return 'Field is required';
}

export const maxLengthCreator = (maxLength) => (values) => {
  if (values.length > maxLength) return `Max length is ${maxLength}`;
  return undefined;
}