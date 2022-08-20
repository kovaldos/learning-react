import React from 'react'

export const Select = ({ options, defaultValue, value, onChange }) => {
	return (
		<select
			name="post-sort" 
			id="1" 
			className="select"
			value={value}
			onChange={evt => onChange(evt.target.value)}
		>
			<option disabled value="">{defaultValue}</option>
			{options.map(option =>
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			)}
		</select>
	)
}
