import React from 'react';

export default function Button(props) {
	return (
		<div>
			<button
				className={`${props.bgColor} py-1 px-2 rounded-md text-[#DCD7C9]`}
				onClick={props.onClickHandler}>
				{props.text}
			</button>
		</div>
	);
}
