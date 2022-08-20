import { React, useState } from 'react';
import { Button } from './UIKit/Button';
import { Input } from './UIKit/Input';

export const PostForm = ({create}) => {

	const [post, setPost] = useState({ title: '', body: '' });
	// Не рекомендуется взаимодействовать без необходимости с DOM напрямую
	// Пример хука useRef и неуправляемого\неконтролируемого компонента
	// const bodyInputRef = useRef();

	const addNewPost = (e) => {
		e.preventDefault()
		const newPost = {
			...post, id: Date.now()
		}
		create(newPost)
		setPost({ title: '', body: '' })
	}
	return (
		<form action="#" className="post__form">
			{/*Управляемый компонент*/}
			<Input
				type="text"
				placeholder="Post name"
				value={post.title}
				onChange={evt => setPost({ ...post, title: evt.target.value })}
			/>
			<Input
				type="text"
				placeholder="Post description"
				value={post.body}
				onChange={evt => setPost({ ...post, body: evt.target.value })}
			/>
			{/*Неуправляемый\Неконтролируемый компонент*/}
			{/* Для корректной работы сам компонент необходмио обернуть в React.forwardRef и передать помимо props вторым аргументом ref */}
			{/* <Input
	  ref={bodyInputRef}
	  type="text"
	  placeholder="Post text"
	/> */}
			<Button type="submit" onClick={addNewPost}>Add</Button>
		</form>
	)
}
