import React from 'react'

// Закомментирован пример неуправляемого компонента
// export const Input = React.forwardRef((props, ref) => {
// 	return (
// 		<input ref={ref} className="input" {...props} />
// 	)
// })
export const Input = (props) => {
	return (
		<input className="input" {...props} />
	)
}
