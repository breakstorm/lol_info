import React from 'react';


class HistoryContent extends React.Component{
   constructor(props) {
		super(props);
	}

    render(){
    	// console.log("HistoryContent component : " + this.props.data);
        return (
            <li onClick={(e)=>{this.props.clickCharacter(e)}}>{this.props.data}</li>
        );
    }
}
export default HistoryContent;