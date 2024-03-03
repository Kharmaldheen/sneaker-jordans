import { useLoaderData, useSearchParams } from "react-router-dom";
import { getShoes } from "../services/apiJordanShoes";
import ProductItem from "../features/products/productItem";
import Filter from "../UI/Filter";
import SortBy from "../UI/SortBy";
import { useEffect, useState } from "react";

function Products() {
  const [jordanShoes, setJordanShoes] = useState([]);
  const [searchParams] = useSearchParams();
  const jordanShoesFromApi = useLoaderData();

  useEffect(
    function () {
      setJordanShoes(jordanShoesFromApi);
    },
    [jordanShoesFromApi]
  );

  //filter
  const filterValueParams = searchParams.get("category") || "all";

  let filteredJordanShoes;

  if (filterValueParams === "all") filteredJordanShoes = jordanShoes;

  if (filterValueParams === "men")
    filteredJordanShoes = jordanShoes.filter(
      (jordanShoe) => jordanShoe.category === "men"
    );

  if (filterValueParams === "women")
    filteredJordanShoes = jordanShoes.filter(
      (jordanShoe) => jordanShoe.category === "women"
    );

  if (filterValueParams === "basketball")
    filteredJordanShoes = jordanShoes.filter(
      (jordanShoe) => jordanShoe.category === "basketball"
    );

  //SORT
  const currentSortByValue = searchParams.get("sortBy") || "modelName-asc";
  const [field, direction] = currentSortByValue.split("-");

  const modifier = direction === "asc" ? 1 : -1;
  const sortedJordanShoes = filteredJordanShoes.sort((a, b) => {
    // (a, b) => (a[field] - b[field]) * modifier
    const fieldValueA =
      typeof a[field] === "string" ? a[field].toLowerCase() : a[field];
    const fieldValueB =
      typeof b[field] === "string" ? b[field].toLowerCase() : b[field];

    // Compare field values
    if (fieldValueA < fieldValueB) {
      return -1 * modifier;
    }
    if (fieldValueA > fieldValueB) {
      return 1 * modifier;
    }
    return 0;
  });

  return (
    <div className="max-w-screen-2xl mx-auto ">
      <div className="flex items-center flex-col gap-4">
        <h1 className="capitalize text-white mt-8 py-2 md:w-80 w-48 text-center bg-black md:text-3xl text-xl  font-BeVietnam">
          Shop everyday
        </h1>
        <span className="w-20 h-[3px] bg-black mb-6"></span>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-[1.6rem] font-montserrat md:px-14 lg:px-44 md:py-20 px-6 py-8 ">
          <Filter
            filterField="category"
            options={[
              { value: "all", label: "All" },
              { value: "men", label: "Men Shoes" },
              { value: "women", label: "Women Shoes" },
              { value: "basketball", label: "Basketball Shoes" },
            ]}
          />
          <SortBy
            options={[
              { value: "modelName-asc", label: "name [A-Z]" },
              { value: "modelName-desc", label: "name [Z-A]" },
              {
                value: "price-desc",
                label: "price-desc",
              },
              { value: "price-asc", label: "price-asc" },
            ]}
          />
          <div>
            <p>
              <span className="font-bold">Result:</span>{" "}
              {sortedJordanShoes.length}
            </p>
          </div>
        </div>
      </div>

      <ul className="py-10 grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        {sortedJordanShoes.map((jordanShoe) => (
          <ProductItem key={jordanShoe.id} jordanShoe={jordanShoe} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const jordanShoes = await getShoes();
  return jordanShoes;
}

export default Products;
