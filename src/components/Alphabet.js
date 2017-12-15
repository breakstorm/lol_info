import React from 'react'

class Alphabet extends React.Component{
   constructor(props) {
		super(props);
	}

   propTypes(){
        
    }
 
    getDefaultProps(){
        return {
            
        };
    }

    getInitialState(){
        return {
        };
    }

    render(){
        return (
            <div class="btn-group" data-toggle="buttons" onClick={(e) => {
					this.props.clickBadge(e)
				}}>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="a" />A
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="b" />B
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="c"/>C
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="d"/>D
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="e"/>E
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="f"/>F
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="g"/>G
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="h"/>H
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="i"/>I
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="j" />J
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="k" />K
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="l"/>L
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="m"/>M
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="n"/>N
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="o"/>O
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="p"/>P
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="q"/>Q
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="r"/>R
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="s" />S
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="t" />T
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="u"/>U
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="v"/>V
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="w"/>W
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="x"/>X
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="y"/>Y
				</label>
				<label class="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autocomplete="off" value="z"/>Z
				</label>
			</div>
        );
    }
}
export default Alphabet
