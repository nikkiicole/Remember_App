import { useState } from 'react'
import { searchMemoir } from "../../services/memoir.jsx"
import { Link } from "react-router-dom";

function Search() {
  const [input, setInput] = useState({

  });
  const [searchResults, setSearchResults] = useState([]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchResults = await searchMemoir(input.search);
    setSearchResults(searchResults);
  }
  // const [searchResults, setSearchResults] = useState([]);
  
  // useEffect(() => {
  //   fetchMemoir();
  // }, []);

  // const fetchMemoir = async () => {
  //   const res = await handleSubmit;
  //   setSearchResults(res);
  //   console.log(res)
  // }

  return (
    <div>
      <h1>Search For Memoirs</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
      <input
                type='text'
                name='search'
                id='search'
                autocomplete="off"
                placeholder='Search memoir here...'

        />
      <input type="submit" />
      </form>
      {searchResults.map((searchResult) => {
        return <Link to={`/user-home/${searchResult.id}`}><h1>{searchResult.name}</h1></Link>;
    
      })}
    </div>
  )
}

export default Search
