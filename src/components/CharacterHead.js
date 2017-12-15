import React from 'react';

class CharacterHead extends React.Component{
   constructor(props) {
		super(props);
	}

    render(){
        return (
            <th scope="row">{this.props.data.name}</th>
        );
    }
}
export default CharacterHead
