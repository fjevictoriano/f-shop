import React from "react";

const DimWindow = props => (
	<div
		className="p-2 
		
		bg-grey-lightest 
		transition-slower 
		z-1
		w-full
		h-full	
		pin-t
		pint-l
		overflow-hidden
		fixed">
		{props.children}
	</div>
);
export default DimWindow;
