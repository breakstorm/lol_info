import React from 'react'

class Alphabet extends React.Component{
   constructor(props) {
		super(props);
	}

    render(){
        return (
            <div className="btn-group" data-toggle="buttons" onClick={(e) => {
					this.props.clickBadge(e)
				}}>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="a" />A
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="b" />B
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="c"/>C
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="d"/>D
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="e"/>E
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="f"/>F
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="g"/>G
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="h"/>H
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="i"/>I
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="j" />J
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="k" />K
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="l"/>L
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="m"/>M
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="n"/>N
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="o"/>O
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="p"/>P
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="q"/>Q
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="r"/>R
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="s" />S
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="t" />T
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="u"/>U
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="v"/>V
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="w"/>W
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="x"/>X
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="y"/>Y
				</label>
				<label className="btn btn-light">
					<input type="radio" name="searchOptions" id="aOptions" autoComplete="off" value="z"/>Z
				</label>
			</div>
        );
    }
}
export default Alphabet
