/**@jsx jsx*/
import { css, jsx } from "@emotion/core";
import { FaPlus } from "react-icons/fa";
import {Link} from "react-router-dom";

const FloatingButton = ()=>
    (<Link to="/add" css={css`position:fixed;
	width:60px;
	height:60px;
	bottom:30px;
	right:25px;
	background-color:#0C9;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;`} > 
    <FaPlus css={css`margin:22px;`}/>
    </Link>)



export default FloatingButton;