<<<<<<< HEAD

import { useState } from 'react';
import { PostForm } from './components/PostForm';
import { PostList } from './components/PostList';
import { Select } from './components/UIKit/Select';
import './styles/App.scss';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "JavaScript often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS." },
    { id: 2, title: "TypeScript", body: "TypeScript is JavaScript with syntax for types." },
    { id: 3, title: "ReactJS", body: " React is a JavaScript library for creating user interfaces" },
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App wrapper">
      <section className="section">
        <div className="container">
          <PostForm create={createPost} />
          <hr style={{ margin: '1em 0' }} />
          <Select
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="Sort by"
            options={[
              { value: "title", name: "By name" },
              { value: "body", name: "By description" },
            ]}
          />
          {posts.length
            ? <PostList remove={removePost} posts={posts} title="Posts about JS" />
            : <p className="text text--lg post__not-found">Posts not found</p>
          }
        </div>
      </section>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 216c8407ff3589ec9d14d5e825ca3ebb4529e8b5
    </div>
  );
}

export default App;
