import { useState } from "react";
import App from "./App";

function Search({ posts, setFilteredPosts }) {
    const [q, setQ] = useState('');

    const search = (event) => {
        const query = event.target.value.toLowerCase();
        setQ(query);

        const filteredPosts = posts.filter(
            (post) =>
                post.userId.toString().includes(query) ||
                post.title.toLowerCase().includes(query) ||
                post.body.toLowerCase().includes(query)
        );
        setFilteredPosts(filteredPosts);

    }
    return (

        <input type="text" value={q} onChange={search}></input>

    );

}
export default Search;