import React from 'react'
import { Button } from './UIKit/Button'

export const PostItem = (props) => {
	return (
		<div className="post__item">
			<div className="post__content">
				<strong>{props.number}. {props.post.title}</strong>
				<p className="text">{props.post.body}</p>
			</div>
			<div className="post__btns">
				<Button onClick={() => props.remove(props.post)} className="btn">Remove</Button>
			</div>
		</div>
	)
}
