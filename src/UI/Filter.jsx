import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilterValue =
    searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <div className="border-1 border-solid border-gray-500 bg-gray-200  shadow-sm p-[0.4rem] flex gap-[0.4rem]">
      {options.map((option) => (
        <button
          onClick={() => handleClick(option.value)}
          key={option.value}
          disabled={currentFilterValue === option.value}
          className={` border-none  rounded-sm font-semibold text-sm p-1 md:p-2 transition duration-300 hover:bg-gray-600 hover:text-red-50 ${
            currentFilterValue === option.value
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

Filter.propTypes = null;

export default Filter;
