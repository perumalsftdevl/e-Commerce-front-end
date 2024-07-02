import React, { useState } from "react";
import DisplayImage from "./DisplayImage";
import { MdDelete } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { toast } from "react-toastify";
import SummaryApi from "../common";

const BannerEdit = ({ onClose, productData, fetchData }) => {
  const [data, setData] = useState({
    ...productData,
    productImage: productData?.productImage || [],
  });
  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    // formData.append("upload_preset", "mern_product");
    const url = SummaryApi.AddBanner.url;
    const URL_PARAMS = `${url}?`;
    const dataResponse = await fetch(URL_PARAMS, {
      credentials: "include",
      method: "post",
      body: formData,
    });

    return dataResponse.json();
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await uploadImage(file);

    setData((preve) => {
      return {
        ...preve,
        productImage: [...preve.productImage, uploadImageCloudinary.data.url],
      };
    });
  };

  const handleDeleteProductImage = async (index) => {
    console.log("image index", index);

    console.log("image index", index);

    const newProductImage = [...data.productImage];
    const url = SummaryApi.DeleteBanner.url;
    const URL_PARAMS = `${url}?file=${newProductImage[index]}`;

    const response = await fetch(URL_PARAMS, {
      method: SummaryApi.DeleteBanner.method,
      credentials: "include",
    });

    const responseData = await response.json();

    if (responseData.success) {
      toast.success(responseData?.message);
      productData.splice(index, 1);

      setData((preve) => {
        return {
          ...preve,
          productImage: [...productData],
        };
      });
    }

    if (responseData.error) {
      if (String(responseData.message).includes("File Not Found")) {
        productData.splice(index, 1);
        setData((preve) => {
          return {
            ...preve,
            productImage: [...productData],
          };
        });
      }

      toast.error(responseData?.message);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onClose();
    fetchData();
  };
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     const response = await fetch(SummaryApi.AddBanner.url, {
  //       method: SummaryApi.AddBanner.method,
  //       credentials: "include",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     const responseData = await response.json();

  //     if (responseData.success) {
  //       toast.success(responseData?.message);
  // onClose();
  //  fetchdata();
  //     }

  //     if (responseData.error) {
  //       toast.error(responseData?.message);
  //     }
  //   };

  return (
    <div className="fixed w-full  h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden">
        <div className="flex justify-between items-center pb-3">
          <h2 className="font-bold text-lg">Banner</h2>
          <div
            className="w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer"
            onClick={onClose}
          >
            <CgClose />
          </div>
        </div>

        <form className="grid p-4 gap-2 overflow-y-scroll h-full pb-5">
          <label htmlFor="productImage" className="mt-3">
            Banner Image :
          </label>
          <label htmlFor="uploadImageInput">
            <div className="p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer">
              <div className="text-slate-500 flex justify-center items-center flex-col gap-2">
                <span className="text-4xl">
                  <FaCloudUploadAlt />
                </span>
                <p className="text-sm">Upload Banner Image</p>
                <input
                  type="file"
                  id="uploadImageInput"
                  className="hidden"
                  accept=".png,jpeg,jpg,JPEG"
                  onChange={handleUploadProduct}
                />
              </div>
            </div>
          </label>
          <div>
            {data?.productImage[0] ? (
              <div className="flex items-center gap-2">
                {data.productImage.map((el, index) => {
                  return (
                    <div className="relative group">
                      <img
                        src={el}
                        alt={el}
                        width={80}
                        height={80}
                        className="bg-slate-100 border cursor-pointer"
                        onClick={() => {
                          setOpenFullScreenImage(true);
                          setFullScreenImage(el);
                        }}
                      />

                      <div
                        className="absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer"
                        onClick={() => handleDeleteProductImage(index)}
                      >
                        <MdDelete />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-red-600 text-xs">*Please upload image</p>
            )}
          </div>

          <button
            className="px-3 py-2 bg-red-600 text-white mb-10 hover:bg-red-700"
            onClick={onSubmit}
          >
            Update Banner
          </button>
        </form>
      </div>

      {/***display image full screen */}
      {openFullScreenImage && (
        <DisplayImage
          onClose={() => setOpenFullScreenImage(false)}
          imgUrl={fullScreenImage}
        />
      )}
    </div>
  );
};

export default BannerEdit;
