const Search = ({ value, onChange }) => {
  return (
    <div className="flex justify-center mb-4 flex-1">
      <input
        name="search"
        className="w-full shadow border rounded py-2 px-3 text-pink-700 focus:outline-none m-8"
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
