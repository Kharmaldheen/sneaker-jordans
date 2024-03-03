const sizeObject = [
  "Uk-6",
  "Uk-6.5",
  "UK-7",
  "UK-7.5",
  "UK-8",
  "Uk-8.5",
  "UK-9",
  "UK-9.5",
  "UK-10",
  "UK-10.5",
  "UK-11",
  "UK-11.5",
];
function Size({ size, setSize, selectedId, setSelectedId, isInCart }) {
  const handleClick = (e) => {
    if (!e.target.closest("li")) return;

    const sizeId = e.target.id;

    setSelectedId(sizeId);

    // const realSize = id.split("-").join(" ");
    setSize(sizeId);
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex justify-between px-6 lg:px-0">
        <p className="font-bold">Select Size</p>

        <p className="text-gray-400">Select Guide</p>
      </div>

      <ul
        className="grid grid-cols-3 gap-2 text-center cursor-pointer"
        onClick={handleClick}
      >
        {sizeObject.map((sizeValue) => (
          <li
            className={`p-2 border-[1px] border-solid ${
              selectedId === sizeValue ? "bg-gray-400" : ""
            } ${isInCart && "disabled"}`}
            key={sizeValue}
            id={sizeValue}
          >
            {sizeValue.split("-").join(" ")}
          </li>
        ))}
      </ul>

      <p className="text-left mt-4 px-4 lg:px-0 font-semibold">
        {!size && !isInCart && (
          <span className="text-red-500 text-bold">
            if no size is selected, size UK-6 will be selected for you
          </span>
        )}
        {size && !isInCart && `Size selected is: ${size}, add to cart`}
        {isInCart &&
          "Size selected and added to cart, remove the item from cart to select another size"}
      </p>
    </div>
  );
}

Size.propTypes = null;

export default Size;
