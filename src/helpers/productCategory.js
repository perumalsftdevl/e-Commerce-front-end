const { default: SummaryApi } = require("../common");

const productCategory = async () => {
  const response = await fetch(SummaryApi.FindAllCategory.url, {
    method: SummaryApi.FindAllCategory.method,
    headers: {
      "content-type": "application/json",
    },
  });

  const dataResponse = await response.json();
  console.log("dataResponse", dataResponse);
  return dataResponse;
};

export default productCategory;

// const productCategory = [
//   { id: 1, label: "Airpodes", value: "airpodes" },
//   { id: 2, label: "Camera", value: "camera" },
//   { id: 3, label: "Earphones", value: "earphones" },
//   { id: 4, label: "Mobiles", value: "mobiles" },
//   { id: 5, label: "Mouse", value: "Mouse" },
//   { id: 6, label: "Laptop", value: "Laptop" },
//   { id: 7, label: "Printers", value: "printers" },
//   { id: 8, label: "Processor", value: "processor" },
//   { id: 9, label: "Refrigerator", value: "refrigerator" },
//   { id: 10, label: "Speakers", value: "speakers" },
//   { id: 11, label: "Trimmers", value: "trimmers" },
//   { id: 12, label: "Televisions", value: "televisions" },
//   { id: 13, label: "Watches", value: "watches" },
// ];

// export default productCategory;
