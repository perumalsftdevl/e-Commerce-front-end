import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { MdModeEdit } from "react-icons/md";
import EditCategory from "./EditCategory";
import AddCategory from "./AddCategory";

const AllCategory = () => {
  const [allUser, setAllUsers] = useState([]);
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [openAddRole, setOpenAddRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({});

  const fetchAllUsers = async () => {
    const fetchData = await fetch(SummaryApi.FindAllCategory.url, {
      method: SummaryApi.FindAllCategory.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();

    if (dataResponse.success) {
      setAllUsers(dataResponse.data);
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="bg-white pb-4">
      <div className="flex justify-end text-end py-2 ">
        <button
          className="w-fit  block  p-1  px-3  rounded-full bg-red-600 text-white hover:bg-red-700"
          onClick={() => {
            setOpenAddRole(true);
          }}
        >
          Add new
        </button>
      </div>

      <table className="w-full userTable">
        <thead>
          <tr className="bg-black text-white">
            <th>S.No</th>
            <th>Category Name</th>
            {/* <th>Email</th>
                    <th>Role</th>
                    <th>Created Date</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="">
          {allUser.map((el, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{el?.category}</td>
                <td>
                  <button
                    className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white"
                    onClick={() => {
                      setUpdateUserDetails(el);
                      setOpenUpdateRole(true);
                    }}
                  >
                    <MdModeEdit />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {openUpdateRole && (
        <EditCategory
          onClose={() => setOpenUpdateRole(false)}
          object={updateUserDetails}
          callFunc={fetchAllUsers}
        />
      )}

      {openAddRole && (
        <AddCategory
          onClose={() => setOpenAddRole(false)}
          callFunc={fetchAllUsers}
        />
      )}
    </div>
  );
};

export default AllCategory;
