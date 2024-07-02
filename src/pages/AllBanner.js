import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import BannerCard from "../components/BannerCard";
import BannerEdit from "../components/BannerEdit";

const AllBanner = () => {
  const [openUploadBanner, setOpenUploadBanner] = useState(false);
  const [allBanner, setAllBanner] = useState([]);

  const fetchAllBanner = async () => {
    const response = await fetch(SummaryApi.FindAllBanner.url);
    const dataResponse = await response.json();

    console.log("Banner data", dataResponse);

    setAllBanner(dataResponse?.data || []);
  };

  useEffect(() => {
    fetchAllBanner();
  }, []);

  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">All Banner</h2>
        <button
          className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full "
          onClick={() => setOpenUploadBanner(true)}
        >
          Upload Banner
        </button>
      </div>

      {/**all product */}
      <div className="flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll">
        {allBanner.map((product, index) => {
          return (
            <BannerCard
              data={product}
              key={index + "allProduct"}
              fetchdata={fetchAllBanner}
            />
          );
        })}
      </div>

      {/**upload prouct component */}
      {openUploadBanner && (
        <BannerEdit
          onClose={() => setOpenUploadBanner(false)}
          productData={allBanner}
          fetchData={fetchAllBanner}
        />
      )}
    </div>
  );
};

export default AllBanner;
