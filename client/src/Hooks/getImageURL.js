export const getImageURL = (product, path) => {
  const imgURL = eval(`product.attributes.${path}.data.attributes.url`);
  console.log(imgURL);
  return `${import.meta.env.VITE_REACT_APP_UPLOAD_URL}${eval(
    `product.attributes.${path}.data.attributes.url`
  )}`;
};
