import { useMemo, useState } from 'react';
import { PostFilter, } from './components/PostFilter';
import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';
// import { Input } from './components/UIKit/Input';
// import { Select } from './components/UIKit/Select';
import './styles/App.scss';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "JavaScript often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS." },
    { id: 2, title: "TypeScript", body: "TypeScript is JavaScript with syntax for types." },
    { id: 3, title: "ReactJS", body: " React is a JavaScript library for creating user interfaces" },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedPosts = useMemo(() => {
    console.log('getSortedPosts is working');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    } else {
      return posts;
    }
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App wrapper">
      <section className="section">
        <div className="container">
          <PostForm create={createPost} />
          <hr style={{ margin: '1em 0' }} />
          <PostFilter
            filter={filter}
            setFilter={setFilter}
          />
          {sortedAndSearchedPosts.length
            ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts about JS" />
            : <p className="text text--lg post__not-found">Posts not found</p>
          }
        </div>
      </section>
    </div>
  )
}

export default App
