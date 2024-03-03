function Select({ options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="text-xs md:text-sm md:p-2 p-1 border-[1px] border-solid border-gray-300 rounded-sm bg-gray-400 font-medium shadow-sm max-w-[250px] "
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = null;

export default Select;
