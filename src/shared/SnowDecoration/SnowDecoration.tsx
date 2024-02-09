import React from 'react'

const SnowDecoration = () => {
	return (
		<div className='snow-container'>
			{Array.from({ length: 200 }).map((_, idx) => {
				return <div className='snow' key={idx} />;
			})}
		</div>
	)
}

export default SnowDecoration
