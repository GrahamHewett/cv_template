import React from 'react' 

export default function({title, skills}) {
	return (
		<div className="item">
            <p><span className='skill-title'>{title}</span>{skills}</p>                             
        </div>
	)
} 