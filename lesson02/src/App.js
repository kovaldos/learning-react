
import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import { Message } from './components/message/Message';

const authors = {
  user: "user",
  bot: "bot"
}

function App() {

  const [messageList, setMessageList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageChange = (evt) => {
    setInputValue(evt.target.value)
  }

  const handleMessageSubmit = (evt) => {
    evt.preventDefault();
    setMessageList((currentMessageList) => [
      ...currentMessageList, {author: authors.user, text: inputValue}
    ])
    setInputValue('')
  }

  useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== authors.bot) {
      setTimeout(() => {
        setMessageList((currentMessageList) => [
          ...currentMessageList, { author: authors.bot, text: 'Hi. We will answer you soon. Wait please'}
        ])
      }, 1500)
    }
  }, [messageList])

  return (
    <div className="App">
      <ul className="message-list">
        {messageList.map((message, index) => (
          <Message key={index} author={message.author} text={message.text} />
        ))}
      </ul>

      <form action="#" onSubmit={handleMessageSubmit}>
        <input type="text" value={inputValue} onChange={handleMessageChange} />
      </form>

    </div>
  );
}

export default App;
