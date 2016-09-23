import React from 'react';

class InnerComponent extends React.Component {
	render() {
		const { data } = this.props;
		return(
			<h2>{data}</h2>
    	);
	}
};

export default InnerComponent;