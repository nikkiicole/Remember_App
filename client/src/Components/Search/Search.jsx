import { useState } from 'react'
import { searchMemoir } from "../../services/memoir.jsx"
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from  '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';
import { FormGroup, Input } from '@material-ui/core';

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
      {/* <FormGroup  onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit}>
      <TextField name='search' onChange={handleChange} placeholder="Enter Full Name"label="Name" variant="outlined" color="secondary" />

        <Button startIcon={<SearchIcon /> }size="large"variant="contained" color="secondary" type="submit">Search</Button>

      </form>
      {searchResults.map((searchResult) => {
        return <Link to={`/user-home/${searchResult.id}`}><h1>{searchResult.name}</h1></Link>;
    
      })}
    </div>
  )
}

export default Search
