import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSortByValue = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-2 font-montserrat items-center ">
      <span className="text-sm font-bold">Sort By:</span>
      <Select
        value={currentSortByValue}
        options={options}
        onChange={handleChange}
      />
    </div>
  );
}

SortBy.propTypes = null;

export default SortBy;
