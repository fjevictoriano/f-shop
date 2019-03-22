import React, {useState} from "react";

const useDropdown = (label, defaultState, options) => {
	const [state, setState] = useState(defaultState);
	const DropDown = () => (
		<select
			className="input"
			value={state}
			onChange={e => setState(e.target.value)}
			name="currency">
			{options.map(item => (
				<option key={item} value={state}>
					{item}
				</option>
			))}
		</select>
	);
	return [state, DropDown];
};

export default useDropdown;
