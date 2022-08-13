import './style.scss';

export const Message = (props) => {
	return (
		<li className="message">
			<span className="message-author">{props.author}</span>
			<span className="message-text">{props.text}</span>
		</li>
	);
}