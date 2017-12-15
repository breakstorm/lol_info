import React from 'react';

class CharacterContent extends React.Component{
   constructor(props) {
		super(props);
	}

    render(){
        return (
     		<td>{this.props.data.stats.attackdamage}</td>       
        );
    }
}
export default CharacterContent
