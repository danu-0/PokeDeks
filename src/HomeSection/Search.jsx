import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search({ search, setSearch }) {
  return (
    <div className="flex justify-center p-4">
      <div className="flex w-full items-center bg-darkC shadow-lg rounded-lg px-4 py-4">
        <input
          type="text"
          placeholder="Search your Pokemon"
          className="flex-grow outline-none px-2 bg-transparent text-lightC"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lightC" />
      </div>
    </div>
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired, 
  setSearch: PropTypes.func.isRequired, 
};

export default Search;
