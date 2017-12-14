import React from 'react';
import ChracterCard from './ChracterCard';

class Test extends React.Component{
   constructor(props) {
		super(props);
	}

   propTypes(){
        
    }

    render(){
    	console.log("this is Test Component render : ")
    	console.log(this.props.tempNameArray)

    	const mapToCharacterCard = (data) => {
    		return data.map((data,i) =>{
    			return (<div 
    				class="card bg-light"
					data={data} 
					key={i} 
					>
						<div 
							class="card-img-overlay">{data}</div>
					</div>)
    		}
    	)}

        return (
        	<div >
				{mapToCharacterCard(this.props.nameArray)}
            </div>
        );
    }
}
Test.propTypes = {

}
Test.defaultProps = {
	nameArray: [],
	testString: "this is Test props"
}
export default Test
