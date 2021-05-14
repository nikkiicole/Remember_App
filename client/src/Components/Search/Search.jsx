import { useState, useEffect } from 'react'
import { searchForMemoir, getMemoirs } from "../../services/memoir.jsx"

import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from  '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';


function Search() {
  const [input, setInput] = useState({

  });
  const [searchResults, setSearchResults] = useState([]);
  const [memoirs, setMemoirs] = useState([]);
  const [searchMemoir, setSearchMemoir] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchResults = await searchForMemoir(input.search);
    setSearchResults(searchResults);
  }

  const handleSecondSubmit = async (e) => {
    e.preventDefault();
    const memoirs = await getMemoirs();
    setMemoirs(memoirs);
  }

  useEffect(() => {
    // eslint-disable-next-line
    memoirFilter()
    // eslint-disable-next-line
  }, [memoirs])

  const memoirFilter = () => {
    console.log(memoirs, input.shareble_id)
    let found = memoirs.filter(memoir => memoir.shareble_id === input.shareble_id)
    setSearchMemoir(found)
  }

  return (
    <div className="search-component">
      <h1>Search For Memoirs</h1>
   
      <form className="search-spacer" onSubmit={handleSubmit}>
      <TextField name='search' onChange={handleChange} placeholder="Enter Full Name"label="Name" variant="outlined" color="secondary" />

        <Button startIcon={<SearchIcon /> }size="large"variant="contained" color="secondary" type="submit">Search Name</Button>

      </form>
      <h3>OR</h3>
      <form className="search-spacer" onSubmit={handleSecondSubmit}>
      <TextField name='shareble_id' onChange={handleChange} placeholder="Enter Shareable ID"label="Shareble ID" variant="outlined" color="secondary" />

        <Button startIcon={<SearchIcon /> }size="large"variant="contained" color="secondary" type="submit">Search By ID</Button>

      </form>
      {searchResults.map((searchResult) => {
        return <Link key={searchResult.id} className="search-link"to={`/user-home/${searchResult.id}`}><h1>{searchResult.name}</h1></Link>;
    
      })}


{searchMemoir.length > 0 && <Link className="search-link" to={`/user-home/${searchMemoir[0].id}`}><h1>{searchMemoir[0].name}</h1></Link>}
    </div>
  )
}

export default Search
