import React from 'react';
import Selector from './Selector';

export default (props) => {
	return (
		<div className="card">
			<div className="card-body row">
				<div className="col-6">
					<h1 className="card-title">{props.card.title}</h1>
					<p className="card-text">{props.card.text}</p>
					{ 
						props.card.selectors.map(selector => <Selector key={selector.label} selector={selector} />) 
					}
				</div>
				<div className="col-6">
					<img src={props.card.image.imgURL} alt={props.card.image.imgText} className="card-img" />
				</div>
				<div className="col" style={{marginTop: "20px"}}>
					<a href="#" className="btn btn-primary btn-start">Start</a>
        		</div>
			</div>
		</div>
	);
}