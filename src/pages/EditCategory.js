import React, { useState } from "react";
import SummaryApi from "../common";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

const EditCategory = ({ onClose, object, callFunc }) => {
  const [Category, setCategory] = useState({
    _id: object._id,
    cat_id: object.cat_id,
    category: object.category,
  });

  const handleOnChangeSelect = (e) => {
    setCategory({
      _id: object._id,
      cat_id: object.cat_id,
      category: e.target.value,
    });

    console.log(e.target.value);
  };

  const updateUserRole = async () => {
    const fetchResponse = await fetch(SummaryApi.UpdateCategory.url, {
      method: SummaryApi.UpdateCategory.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Category),
    });

    const responseData = await fetchResponse.json();

    if (responseData.success) {
      toast.success(responseData.message);
      onClose();
      callFunc();
    }

    console.log("role updated", responseData);
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center bg-slate-200 bg-opacity-50">
      <div className="mx-auto bg-white shadow-md p-4 w-full max-w-sm">
        <button className="block ml-auto" onClick={onClose}>
          <IoMdClose />
        </button>

        <h1 className="pb-4 text-lg font-medium">Edit Category</h1>

        <div className="flex items-center justify-between my-4">
          <p>Category :</p>

          <input
            id="Category"
            name="Category"
            value={Category.category}
            onChange={handleOnChangeSelect}
          />
        </div>

        <button
          className="w-fit mx-auto block  py-1 px-3 mt-4 rounded-full bg-red-600 text-white hover:bg-red-700"
          onClick={updateUserRole}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditCategory;
