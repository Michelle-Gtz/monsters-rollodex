
import './search-box.styles.css';

const SearchBox = ({className, placeholder, handleSearchChange}) => (
            <input 
                className= {`search-box ${className}`} 
                type='search' 
                placeholder={placeholder}
                onChange={handleSearchChange}
          />
);

export default SearchBox