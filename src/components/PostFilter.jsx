import React from 'react'
import { Input } from './UIKit/Input'
import { Select } from './UIKit/Select'

export const PostFilter = ({filter, setFilter}) => {
	return (
		<div className="post-filter">
			<Input
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
				placeholder="Search..."
			/>
			<Select
				value={filter.sort}
				onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
				defaultValue="Sort by"
				options={[
					{ value: "title", name: "By name" },
					{ value: "body", name: "By description" },
				]}
			/>
		</div>
	)
}
