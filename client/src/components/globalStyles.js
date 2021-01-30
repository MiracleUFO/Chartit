import {createGlobalStyle} from 'styled-components'
export const GlobalStyles = createGlobalStyle`

	body {
		background: ${({theme}) => theme.background};
		color: ${({theme}) => theme.text};
		font-family: Merriweather, Helvetica;
		transition: background 2s, color 2s, display 5s;
	}
	* {
		overflow: hidden;
	}
	a {
		text-decoration: none;
	}
	.none {
		display: none;
	}
	.centerText {
		text-align: center;
	}

	/* - - - - - Header - - - - */
	header {
		display: flex;
		align-items: center;
		justify-content: space-between
	}
	svg {
		width: 150px;
		height: 100px;
		position: relative;
		right: 0;
	}
	#crescent {
		fill: ${({theme}) => theme.fillCrescent};
		stroke: ${({theme}) => theme.strokeCrescent};
		transition: fill 1s;
	}
	#circle {
		fill: ${({theme}) => theme.fillCircle};
		stroke: ${({theme}) => theme.strokeCircle};
	}


	/* - - - - Forms - - - - */
	.iconDiv {
		position: fixed;
		top: 50px;
	}
	.icon {
		width: 28%;
    display: block;
    margin: 0 auto;
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
		border-radius: 20px;
	}
	.formContainer form, .formContainerPC form {
		display: flex;
		flex-direction: column;
		margin-top: 140px;
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
		border: none;
		border-radius: 5px;
		padding-left: 10px;
		height: 2.7vh;
	}
	.formContainer button {
		background: tomato;
		border-radius: 7px;
		border: none;
		height: 25px;
	}
	.formContainer button a, .formContainer button {
		color: white;
		font-size: 15px;
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
    background: teal;
	}
	.loader img {
		height: 40vh;
	}

	@media screen and (min-width: 800px) {
		.iconDiv {
			position: static;
			width: 35vw;
			margin: 45px auto 20px;
		}
		.inputDiv {
			margin: 0 auto;
			width: 90%;
	}
	.formContainer form {
		margin: 20px auto 50px;
	}
	.formContainer form input {
		width: 100%;
	}
	}
`