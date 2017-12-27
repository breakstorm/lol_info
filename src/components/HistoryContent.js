import React from 'react';


class HistoryContent extends React.Component{
   constructor(props) {
		super(props);
	}

    render(){
    	console.log("HistoryContent component : " + this.props.data);
        return (
            <li><a>{this.props.data}</a></li>
        );
    }
}
export default HistoryContent;