const Select = ({ options }) => {
  return (
    <select className="border border-zinc-400 rounded-md px-3 py-2 w-full">
      <option disabled>Categorys</option>
      {options.map((option) => (
        <option value={option.value}>{option.value}</option>
      ))}
    </select>
  );
};

export default Select;
