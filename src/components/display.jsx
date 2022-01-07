import React from "react";

const display = ({inputBin, decNum}) => {
	return (
		<div>
			{!inputBin.binary ? (
				<p className="info">
					Aguardando por um número binário valido...
				</p>
			) : (
				<p>{decNum}</p>
			)}
		</div>
	)
}

export default display