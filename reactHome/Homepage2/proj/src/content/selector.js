import React from 'react';

export default (props) => {
	return (
		<form>
			<div className="form-group">
				<label>{props.selector.label}</label>
				<select className="form-control">
				{
					props.selector.options.map(option => <option key={option}>{option}</option>)
				}
				</select>
			</div>
		</form>
	);
}
