import React from 'react' 

export default function({title, skills}) {
	return (
		<div class="item">
            <p><span className='skill-title'>{title}</span>{skills}</p>                             
        </div>
	)
} 