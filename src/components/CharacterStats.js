import React from 'react';

class CharacterStats extends React.Component{
   constructor(props) {
		super(props);
	}

    render(){
        return (
          <td>{this.props.data}</td>  
        );
    }
}
export default CharacterStats
