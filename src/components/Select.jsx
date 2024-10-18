const Select = ({ options, title="" }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={title}>{title}</label>
      <select
        name={title.charAt(0).toUpperCase() + title.slice(1)}
        className="border border-zinc-400 rounded-md px-3 py-2 w-full"
      >
        <option disabled>Categorys</option>
        {options.map((option) => (
          <option value={option.value}>{option.value}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
