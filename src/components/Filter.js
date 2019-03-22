import React from "react";
import {FaWindowClose} from "react-icons/fa";
import DimWindow from "./DimWindow";
const Filter = () => (
	<>
		<div className="flex ">
			<div className="w-1/5 ">
				<h1>Filters</h1>
			</div>
			<div className="w-3/5" />
			<div className="w-1/5  text-center">
				<button>
					<FaWindowClose />
				</button>
			</div>
		</div>
		<form>
			<h4>Price</h4>
			<div className="flex">
				<input
					className="w-full m-2 p-1 h-8"
					placeholder="Min."
					type="number"
					name=""
				/>
				<input
					className="w-full m-2 p-1 h-8"
					placeholder="Max."
					type="number"
					name=""
				/>
			</div>
			<h4>Category</h4>
			<select className="w-full h-8" name="" id="">
				<option value="">cat-1</option>
				<option value="">cat-1</option>
				<option value="">cat-1</option>
			</select>
			<button
				className="bg-green-light 
                            float-right
										hover:bg-green-dark
										text-white 
										font-bold 
										h-8 
										w-16
										px-45 
										border-none 
										focus:outline-none 
										focus:shadow-outline"
				type="submit">
				Save
			</button>
		</form>
	</>
);
export default Filter;
