import React from 'react';

class TableHead extends React.Component{
   constructor(props) {
		super(props);
	}

    render(){
        return (
            <th scope='col'>{this.props.data}</th>
        );
    }
}
export default TableHead
