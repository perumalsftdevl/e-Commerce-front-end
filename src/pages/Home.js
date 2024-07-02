import React, { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";
import productCategory from "../helpers/productCategory";

const Home = () => {
  const [productCategoryGET, setproductCategory] = useState([]);

  const fetchDataAPI = async () => {
    const categoryProduct = await productCategory();
    setproductCategory(categoryProduct?.data);
  };

  useEffect(() => {
    fetchDataAPI();
  }, []);

  return (
    <div>
      <CategoryList />
      <BannerProduct />

      {productCategoryGET.map((product, index) => (
        <VerticalCardProduct
          key={index}
          category={product.category}
          heading={`Top's ${product.category}`}
        />
      ))}
    </div>

    // <HorizontalCardProduct
    //   category={"watches"}
    //   heading={"Popular's Watches"}
    // />

    // <VerticalCardProduct category={"mobiles"} heading={"Mobiles"} />
    // <VerticalCardProduct category={"Mouse"} heading={"Mouse"} />
    // <VerticalCardProduct category={"televisions"} heading={"Televisions"} />
    // <VerticalCardProduct
    //   category={"camera"}
    //   heading={"Camera & Photography"}
    // />
    // <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"} />
    // <VerticalCardProduct
    //   category={"speakers"}
    //   heading={"Bluetooth Speakers"}
    // />
    // <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"} />
    // <VerticalCardProduct category={"trimmers"} heading={"Trimmers"} />
    // <VerticalCardProduct category={"Laptop"} heading={"Laptop"} />
    // </div>
  );
};

export default Home;
