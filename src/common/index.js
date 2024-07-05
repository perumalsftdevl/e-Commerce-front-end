const backendDomin = "https://localhost:8080";

const SummaryApi = {
  signUP: {
    url: `${backendDomin}/api/signup`,
    method: "post",
  },
  signIn: {
    url: `${backendDomin}/api/signin`,
    method: "post",
  },
  current_user: {
    url: `${backendDomin}/api/user-details`,
    method: "get",
  },
  logout_user: {
    url: `${backendDomin}/api/userLogout`,
    method: "get",
  },
  allUser: {
    url: `${backendDomin}/api/all-user`,
    method: "get",
  },
  FindAllBanner: {
    url: `${backendDomin}/api/FindAllBanner`,
    method: "get",
  },
  DeleteBanner: {
    url: `${backendDomin}/api/DeleteBanner`,
    method: "get",
  },
  AddBanner: {
    url: `${backendDomin}/api/AddBanner`,
    method: "post",
  },

  updateUser: {
    url: `${backendDomin}/api/update-user`,
    method: "post",
  },
  uploadProduct: {
    url: `${backendDomin}/api/upload-product`,
    method: "post",
  },
  allProduct: {
    url: `${backendDomin}/api/get-product`,
    method: "get",
  },
  FindAllCategory: {
    url: `${backendDomin}/api/FindAllCategory`,
    method: "get",
  },
  updateProduct: {
    url: `${backendDomin}/api/update-product`,
    method: "post",
  },
  categoryProduct: {
    url: `${backendDomin}/api/get-categoryProduct`,
    method: "get",
  },
  categoryWiseProduct: {
    url: `${backendDomin}/api/category-product`,
    method: "post",
  },
  productDetails: {
    url: `${backendDomin}/api/product-details`,
    method: "post",
  },
  folder_creation: {
    url: `${backendDomin}/api/upload-product/CreateFolder`,
    method: "post",
  },
  DeleteImage: {
    url: `${backendDomin}/api/DeleteImage`,
    method: "post",
  },
  addToCartProduct: {
    url: `${backendDomin}/api/addtocart`,
    method: "post",
  },
  addToCartProductCount: {
    url: `${backendDomin}/api/countAddToCartProduct`,
    method: "get",
  },
  addToCartProductView: {
    url: `${backendDomin}/api/view-card-product`,
    method: "get",
  },
  updateCartProduct: {
    url: `${backendDomin}/api/update-cart-product`,
    method: "post",
  },
  deleteCartProduct: {
    url: `${backendDomin}/api/delete-cart-product`,
    method: "post",
  },
  searchProduct: {
    url: `${backendDomin}/api/search`,
    method: "get",
  },
  filterProduct: {
    url: `${backendDomin}/api/filter-product`,
    method: "post",
  },

  ///////////////////////===========Category==================//////////////////////

  AddCategory: {
    url: `${backendDomin}/api/add-category`,
    method: "post",
  },

  UpdateCategory: {
    url: `${backendDomin}/api/update-category`,
    method: "post",
  },
  EditCategory: {
    url: `${backendDomin}/api/edit-category`,
    method: "get",
  },
};

export default SummaryApi;
