import React from "react";

const FormError = props => 
	(<div className="bg-red-lightest border border-red-light text-red-dark px-4 py-1 rounded relative" role="alert">
		<strong className="font-bold"></strong>
		<span className="block sm:inline">{props.message}</span>
	</div>)


export default FormError;
