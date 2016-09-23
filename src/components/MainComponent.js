import React from 'react';
import InnerComponent from './InnerComponent';

class MainComponent extends React.Component {
	render() {
		const desc = 'If you see this, you are success to build this app.';
		return(
			<div>
			    <h1>
			    	Hello, React with webpack.
			    </h1>
			    <InnerComponent data={desc} />
		    </div>
    	);
	}
};

export default MainComponent;