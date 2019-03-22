import React from "react";

const FormError = props => {
	return <div className="col-12 alert alert-danger px-3">{props.message}</div>;
};

export default FormError;
