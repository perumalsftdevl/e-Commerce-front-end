import React, { useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";

const AddCategory = ({ onClose, callFunc }) => {
  const [Category, setCategory] = useState({
    category: "",
  });

  const handleOnChangeSelect = (e) => {
    setCategory({
      category: e.target.value,
    });

    console.log(e.target.value);
  };

  const save = async () => {
    const fetchResponse = await fetch(SummaryApi.AddCategory.url, {
      method: SummaryApi.AddCategory.method,
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

        <h1 className="pb-4 text-lg font-medium">Add Category</h1>

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
          onClick={save}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
