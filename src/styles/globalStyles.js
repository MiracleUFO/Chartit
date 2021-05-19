import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`

	body {
		background: ${({theme}) => theme.background};
		color: ${({theme}) => theme.text};
		font-family: 'Nunito', Helvetica, sans-serif;
		transition: background 2s, color 2s, display 5s;
	}
	* {
		overflow-x: hidden;
	}
	a {
		text-decoration: none;
		color: ${({theme}) => theme.text};
	}
	a, button {
		cursor: pointer;
	}
	.none {
		display: none;
	}
	h1, #charter-wrapper-wrapper > h2 {
		font-family: 'Montserrat';
		color: ${({theme}) => theme.heroTextColor};
	}
	.flex {
		display: flex;
	}
	.centerText {
		text-align: center;
	}
	.icon-container-mobile {
		width: 20vw;
	}
	.icon-container {
		display: none;
	}
	.icon-mobile, .icon {
		width: 87%;
	}
	.icon {
		display: none;
	}
	
	@media screen and (min-width: 800px) {
		h1, #charter-wrapper-wrapper > h2 {
			font-family: 'Inter';
		}
		.icon, .icon-container {
			display: inline-block;
		}
		.icon-mobile {
			width: 30%;
		}
		.icon-container {
			width: 13vw;
		}
	}

	button {
		color: white;
		background: ${({theme}) => theme.button};
		padding: 0.75rem 1.5rem;
		border-radius: 5px;
		border: none;
	}
	button a, button {
		color: white;
		font-size: 1rem;
		font-weight: 700;
	}
	


/* - - - - - - - - - - - - -
					Header
- - - - - - - - - - - - - - */

	nav {
		height: 15vh;
		padding: 0 4vw;
		background: ${({theme}) => theme.navBgMobile};
		border-bottom: ${({theme}) => theme.borderBottom};
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	nav > section {
		width: 45vw;
		display: flex;
		justify-content: space-between;
		height: -webkit-fill-available;
	}
	.switchIcon {
		width: 30%;
	}
	.buttonDiv {
		justify-content: space-between;
		align-items: center;
	}

	@media screen and (max-width: 320px) {
		nav > section {
		  width: 50vw;
		}
	}

	@media screen and (min-width: 800px) {
		nav {
			border-bottom: none;
			padding: 0 0 0 4vw;
			margin: ${({theme}) => theme.navMargin};
		}
		nav > section {
			width: 40.4vw;
			background: ${({theme}) => theme.heroImgBg};
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
		.buttonDiv {
			width: 100%;
			justify-content: flex-end;
			align-items: center;
		}
		.switchIcon {
			margin-left: 5%;
			margin-right: 5%;
			width: 8%;
    	height: 8%;
		}
	}

	@media screen and (min-width: 1281px) {
		nav > section {
			width: 37.7vw;
		}
	}


/* - - - - - - - - - - - - -
					Auth Forms
- - - - - - - - - - - - - - */

	.formContainer .iconDiv {
		position: fixed;
		top: 50px;
		background-color: teal;
    z-index: 20;
	}
	.formContainer .icon {
		/*display: block;
		width: 28%;
		margin: 0 auto;*/
		display: block;
    width: 41%;
    margin-left: 25vw;
	}
	.formContainer {
		background: teal;
		height: 100vh;	
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		position: relative;
	}
	.formContainerPC {
		display: block;
		position: relative;
		width: 40%;
		margin: 10vh auto 0;
		border-radius: 20px 20px 0 0;
	}
	.formContainer form, .formContainerPC form {
		display: flex;
		flex-direction: column;
		margin-top: 120px;
	}
	.formContainerPC form {
		margin: 0 auto;
		width: 50%;
	}
	.formContainer form label {
		display: block;
		padding-bottom: 0.3vh;
		color: cornsilk;
	}
	.formContainer form > div {
		margin-bottom: 2.5vh;
		display: flex;
		flex-direction: column;
	}
	.inputDiv {
		margin: 0 auto;
		width: 50vw;
	}
	.formContainer form input {
		width: 45vw;
    padding: 4px 0;
		border: none;
		border-radius: 5px;
		padding-left: 10px;
		height: 2.7vh;
	}
	.formContainer button {
		background: tomato;
	}
	.formContainer p {
		color: cornsilk;
	}
	.errorsDiv {
		max-height: 300px;
    max-width: 50vw;
    min-width: 40vw;
    margin: 0 auto;
	}
	.errorP p {
		margin: inherit;
	}
.errorsDiv p, .errorP p {
		margin: 5px;
		font-size: 0.8em;
	}
	.gotAccount > button {
		margin-left: 10px;
	}
	.loader {
		width: 100vw;
    position: fixed;
    height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: orange;
		z-index: 5;
	}
	.loader img {
		height: 40vh;
	}

	@media screen and (min-width: 800px) {
		.authView {
			background: ${({theme}) => theme.authViewBg};
		}
		.formContainer	.iconDiv {
			position: static;
			width: 35vw;
			margin: 45px auto 20px;
		}
		.formContainer .icon {
			margin: 50px auto;
    	margin-left: 32%;
    	width: 30%;ang
		}
		.formContainer .inputDiv {
			margin: 0 auto;
			width: 90%;
		}
		.formContainer form {
			margin: 20px auto 50px;
		}
		.formContainer form input {
			width: 95%;
		}
	}


/* - - - - - - - - - - - - -
							Home 
- - - - - - - - - - - - - - */

/* - - - - - Hero - - - - */
	#hero {
		display: flex;
		flex-direction: column;
	}
	#hero > section {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	#hero > section > h1, #hero > section > p {
		margin: 2px;
		color: ${({theme}) => theme.mobileHeroTextColor};
	}
	#hero > section > h1 {
		font-size: 2.25rem;
		font-weight: 700;
		line-height: 3.7rem;
		letter-spacing: 1.2px;
		padding-top: 4.7vh;
		text-transform: capitalize;
	}
	#hero > section > h1 span, #hero > section:first-of-type p span {
			display: none;
	}
	#hero > section:first-of-type p {
		font-family: 'Inter';
		font-weight: 600;
		font-size: 1.15rem;;
		line-height: 1.5rem;
		letter-spacing: 1.2px;
		width: 81vw;
	}
	#hero-text {
		height: 85vh;
	}
	#hero-img {
		height: 55vh;
		background: ${({theme}) => theme.heroImgBg};
		margin-top: 65px;
	}
	/*#hero-img:before {
		content:"";
		height: 7px;
		background: ${({theme}) => theme.curve};
		position:absolute;
		left:0;
		right:0;
		top: 102vh;
	}*/
	#hero .buttonDiv {
		margin: 10px 0;
	}
	#hero .buttonDiv a:first-of-type button {
		margin-right: 15px;
	}
	#transparent-button {
		background: blueviolet;
		color: #E0E9FA;
	}
	#transparent-button:hover {
		padding: 0.9rem 1.7rem;;
	}

	@media screen and (max-height: 600px) {
		#hero > section > h1 {
			font-size: 2rem;
			line-height: 3.2rem;
		}
		#hero-text {
			height: -webkit-fill-available;
		}
		#hero-img:before {
			top: 93.5vh;
		}
	}

	@media screen and (min-width: 800px) {
		#hero {
			height: 90vh;
			margin: ${({theme}) => theme.heroMargin};
			width: ${({theme}) => theme.heroWidth};
			flex-direction: row;
			justify-content: center;
		}
		#hero > section {
			margin-top: 0;
		}
		#hero > section:first-of-type {
			display: block;
			margin-top: 95px;
			align-items: start;
			margin-left: 2vw;
			text-align: start;
			width: 85%;
			height: fit-content;
		}
		#hero > section > h1 {
			font-size: 2.2rem;
			font-weight: 800;
			margin-bottom: 7px;
		}
		#hero > section > h1, #hero > section:first-of-type p {
			color: ${({theme}) => theme.heroTextColor};
			width: 42rem;
		}
		#hero > section > h1 span, #hero > section:first-of-type p span {
			display: inline;
		}
		#hero > section:first-of-type p {
			font-size: 1.1rem;
			line-height: 1.7rem;
			font-weight: 700;
			width: 37rem;
			margin-top: 7px;
			letter-spacing: 2px
		}
		#hero .buttonDiv {
			display: block;
		}
		#transparent-button {
			background: ${({theme}) => theme.transparentButtonColorBg};
			color: ${({theme}) => theme.transparentButtonColor};
		}
		#transparent-button:hover {
			background: ${({theme}) => theme.transparentButtonBgHover};
		}
		#hero-text {
			margin-top: 30px;
		}
		#hero-img:before {
			height: 0;
		}
		#hero-img {
			border-radius: 0 0 0 60%;
			margin: 0;
			height: 80vh;
		}
	}

/* - - - - - Charter - - - - */

	#charter-wrapper-wrapper {
		padding-top: 110px;
		padding-bottom: 80px;
	}
	#charter-wrapper-wrapper > h2 {
		margin-bottom: 5px;
		text-align: center;
		width: 95vw;
		margin: 0 auto;
		font:  bolder 2.5rem 'Montserrat';
	}
	#clear-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.charter-element {
		background: ${({theme}) => theme.charterElementBg};
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
		height: 370px;
		width: 85vw;
		margin: 60px auto ;
		border-radius: 20px;
		color: white;
	}
	.charter-element:hover {
		background: ${({theme}) => theme.charterElementBgHover};
		box-shadow: 20px 20px 10px 5px rgba(0,0,0,0.105);
	}
	.charter-element h2 {
		font-size: 1.3rem;
		text-align: center;
		margin: 0 auto 20px;
	}
	.charter-element form {
		width: max-content;
		height: -webkit-fill-available;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 80%;
	}
	.charter-element form > div {
		position: relative;
	}
	#first-charter-element form > div:hover {
		display: flex;
		align-items: center;
		height: 90px;
		width: 220px;
	}
	#first-charter-element form > div:hover .tooltip-wrapper  {
		display: block;
	}
	#first-charter-element form:hover h2  {
		display: none;
	}
	.tooltip-wrapper {
		margin-left: 10px;
		display: none;
    position: absolute;
    left: 7.5em;
    background: transparent;
    width: fit-content;
    font-size: 0.8em;
    padding: 0.3em;
	}
	.tooltip-wrapper img {
		width: 75px;
		height: 75px;
		border-radius: 50%;
	}
	#second-charter-element-form-wrapper {
		height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    align-items: center;
	}
	#second-charter-element-form-wrapper form {
		justify-content: flex-start;
		padding-top: 30px;
		height: 70%;
	}
	#second-charter-element-form-wrapper form input {
		border-radius: 8px;
    padding: 5px;
    border: none;
		margin-bottom: 10px;
	}
	#second-charter-element-form-wrapper form button {
		position: relative;
		left: 20%;
		margin-top: 20px;
	}
	#third-charter-element-flex {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	#preview-icon {
		width: 50vw;
    height: 45vw;
	}
	SplideSlide {
		display: none;
	}
	.submit-btn {
		background: ${({theme}) => theme.submitBtn};
	}
	.submit-btn-active {
		background: ${({theme}) => theme.submitBtnActive};
	}
	.clear-btn {
		display: inline;
		font-weight: 600;
		padding-right: 10px;
		cursor: pointer;
	}
	.clear-btn:hover {
		font-weight: 800;
	}
 .charter-element form div:hover {
		font-weight: 600;
	}
	.hidden {
		overflow-y: hidden;
	}

	@media screen and (min-width: 800px) {
		#charter-wrapper-wrapper {
			padding-top: 0;
		}
		#charter-wrapper {
			display: flex;
			justify-content: space-around;
		}
		.charter-element {
			width: 27vw;
			margin: 0;
		}
		#charter-wrapper-wrapper > h2 {
			margin-bottom: 50px;
			font: bolder 2.8rem 'Inter';
		}
		#preview-icon {
			width: 17vw;
			height: 15vw;
		}
	}

/* - - - - - Footer - - - - */
	footer {
		height: 90px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #E0E9FA;
		font-weight: 900;
		background: ${({theme}) => theme.footerBg};
	}

	@media screen and (min-width: 800px) {
		footer {
			height: 100px;
		}
	}
`