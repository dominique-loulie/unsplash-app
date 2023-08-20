// Define the Explore component!!
const Explore = ({ setWord, getPhotoData }) => {
    return (
      <form className="example">

        {/* Input field for entering search keyword */}
        <input 
          type="text" 
          name="keyword" 
          placeholder="Search.." 
          onChange={e => setWord(e.target.value)} 
        />
        
        {/* Button to submit the search */}
        <button type="submit" onClick={getPhotoData}>Search</button>
      </form>
    );
  };
  
  // Export the Explore component !!
  export default Explore;
  



