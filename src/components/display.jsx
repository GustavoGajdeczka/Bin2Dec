import React from "react";

const display = ({inputBin, decNum}) => {
	return (
		<div>
			{!inputBin.binary ? (
				<p className="info">
					Waiting for a valid binary number...
				</p>
			) : (
				<p>{decNum}</p>
			)}
		</div>
	)
}

export default display