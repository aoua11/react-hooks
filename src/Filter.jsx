

const Filter = ({ filterTitle, filterRate, handleTitleChange, handleRateChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={(e) => handleTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filterRate}
        onChange={(e) => handleRateChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
