import React, { useState } from "react";
import BannerEdit from "./BannerEdit";
import { MdDelete } from "react-icons/md";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const BannerCard = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);

  const handleDeleteProductImage = async (index) => {
    console.log("image index", index);

    console.log("image index", index);

    const url = SummaryApi.DeleteBanner.url;
    const URL_PARAMS = `${url}?banner_id=${data.banner_id}`;

    const response = await fetch(URL_PARAMS, {
      method: SummaryApi.DeleteBanner.method,
    });

    const responseData = await response.json();

    if (responseData.success) {
      toast.success(responseData?.message);
      fetchdata();

      //   setData((preve) => {
      //     return {
      //       ...preve,
      //       productImage: [...newProductImage],
      //     };
      //   });
    }

    if (responseData.error) {
      if (String(responseData.message).includes("File Not Found")) {
        // newProductImage.splice(index, 1);
        // setData((preve) => {
        //   return {
        //     ...preve,
        //     productImage: [...newProductImage],
        //   };
        // });
      }

      toast.error(responseData?.message);
    }
  };

  return (
    <div>
      <div className="bg-white p-4 rounded ">
        <div className="w-40">
          <div className="w-32 h-32 flex justify-center items-center">
            <img src={data?.url} className="mx-auto object-fill h-full" />
          </div>

          <div>
            <div
              className="w-fit ml-auto p-2 bg-red-600 hover:bg-white rounded-full hover:text-red-600 cursor-pointer"
              onClick={() => handleDeleteProductImage(0)}
            >
              <MdDelete />
            </div>
          </div>
        </div>

        {editProduct && (
          <BannerEdit
            productData={data}
            onClose={() => setEditProduct(false)}
            fetchdata={fetchdata}
          />
        )}
      </div>
    </div>
  );
};

export default BannerCard;
