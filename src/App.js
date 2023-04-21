import { useState } from 'react';
import React, { useEffect } from 'react';
import Posts from './posts';
import Search from './search';
function App() {
  const [state, setState] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then((data) => {
        setState(data);
        setFilteredPosts(data);
      });
  }, [])

  return (
    <div class="card">
      <div class="card-body">
        <Search posts={state} setFilteredPosts={setFilteredPosts} />
        <Posts posts={filteredPosts} />
      </div>
    </div>
  );
}

export default App;
