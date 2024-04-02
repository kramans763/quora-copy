import React, { useState, useEffect } from 'react';
import "./SearchResult.css"
import { useLocation } from 'react-router-dom';
import starLogo from "../../assets/star2.png"
import Feed from '../Feed/Feed';
import Navbar from '../Navbar/Navbar';
const SearchResult = () => {
  const { state } = useLocation();
  const { searchTerm } = state;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`https://academics.newtonschool.co/api/v1/quora/post?search={"title":"${searchTerm}"}`, {
          headers: {
            'projectID': 'f104bi07c490'
          }
        });
        let data = await response.json();
        data=data.data;
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (searchTerm) {
      fetchSearchResults();
    }
  }, [searchTerm]);
  console.log("search", searchResults);
  return (
    <>
    <Navbar/>
    <div className='search-page dark:bg-neutral-900 dark:text-zinc-400'>
      <div className='search-page-top'>
        <img src={starLogo} alt="" />
        <p>Search Results --</p>
      </div>
      <div className='main-feed-content'>
        {searchResults.length? 
          <Feed
            pageType='searchPage'
            searchResults={searchResults}
          />
        
        : 
        <div>
            <h2>No results found</h2>
        </div>
        }
      </div>
    </div>
    </>
  );
};

export default SearchResult;
