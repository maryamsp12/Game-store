import { FormEvent } from "react";
import { FaSearch } from "react-icons/fa";
import "./styles.css";

export const SearchPanel = (props: {
  searchTerm: string;
  handleStateChange: (search: string) => void;
}) => {
  let search: string[] = [];

  const { searchTerm, handleStateChange } = props;

  if (localStorage["search"]) {
    search = JSON.parse(localStorage["search"]);
  }
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleStateChange(e.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search.indexOf(searchTerm) == -1) {
      search.unshift(searchTerm);
      if (search.length > 10) {
        search.pop();
      }
      localStorage["search"] = JSON.stringify(search);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="wrapper">
      <input
        type="text"
        className="input"
        value={searchTerm}
        onChange={(e) => handleInputChange(e)}
        list="searchData"
        autoComplete="off"
      />
      <span>
        <datalist id="searchData">
          {search.map((prevSearch: string, index: number) => (
            <option key={index} value={prevSearch} />
          ))}
        </datalist>
      </span>
      <button className="searchBtn">
        <span className="fas">
          <FaSearch />
        </span>
      </button>
    </form>
  );
};
