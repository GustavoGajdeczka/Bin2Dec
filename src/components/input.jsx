import React from "react"
import PropTypes from 'prop-types'

const input = ({ inputBin, handleBinaryInput }) => {
	return (
		<div className="input">
			<input
				name="binarynum"
				type="text"
				minLength="1"
				maxLength="20"
				value={inputBin.value}
				onChange={(e) => handleBinaryInput(e)}
				autoFocus
			/>
		</div>
	)
}
input.propTypes = {
	value: PropTypes.number,
}

export default input
  