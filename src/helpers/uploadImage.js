// const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`;

import SummaryApi from "../common";

const uploadImage = async (image, category) => {
  const formData = new FormData();
  formData.append("file", image);
  // formData.append("upload_preset", "mern_product");
  const url = SummaryApi.folder_creation.url;
  const URL_PARAMS = `${url}?category=${category}`;
  const dataResponse = await fetch(URL_PARAMS, {
    credentials: "include",
    method: "post",
    body: formData,
  });

  return dataResponse.json();
};

export default uploadImage;
