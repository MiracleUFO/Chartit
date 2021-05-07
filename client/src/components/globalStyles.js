import {createGlobalStyle} from 'styled-components'
export const GlobalStyles = createGlobalStyle`

	body {
		background: ${({theme}) => theme.background};
		color: ${({theme}) => theme.text};
		font-family: 'Nunito', Merriweather, Helvetica, sans-serif;
		transition: background 2s, color 2s, display 5s;
	}
	* {
		overflow: hidden;
	}
	a {
		text-decoration: none;
		color: ${({theme}) => theme.text};
	}
	.none {
		display: none;
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
		width: 85%;
	}
	.icon {
		display: none;
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
	@media screen and (min-width: 800px) {
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


	/* - - - - - Header - - - - */
	nav {
		height: 110px;
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
	@media screen and (min-width: 800px) {
		nav {
			border-bottom: none;
			padding: 0 0 0 4vw;
		}
		nav > section {
			width: 40.6vw;
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
			width: 38vw;
		}
	}

	/* - - - - Forms - - - - */
	.formContainer .iconDiv {
		position: fixed;
		top: 50px;
	}
	.formContainer .icon {
		display: block;
		width: 28%;
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
		.formContainer	.iconDiv {
			position: static;
			width: 35vw;
			margin: 45px auto 20px;
		}
		.formContainer	.inputDiv {
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


/* - - - - - Home - - - - */
#hero {
	margin: 50px 3vw 0;
	display: flex;
	flex-direction: column;
	height: 550px;
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
}

#hero > section > h1 {
	font-family: 'Montserrat';
	font-size: 3rem;
	line-height: 4.2rem;
	color: rgba(31,35,51,var(--text-opacity));
	text-transform: capitalize;
}

#hero > section:first-of-type p {
	font-size: 1.125rem;
}

#hero-img {
	background: ${({theme}) => theme.heroImgBg};
}

#hero .buttonDiv a:nth-of-type(2) button {
	background: ${({theme}) => theme.transparentButtonColorBg};
	color: ${({theme}) => theme.transparentButtonColor};
}

@media screen and (min-width: 800px) {
	#hero {
		height: 77vh;
		margin: 0 0 0 2vw;
		flex-direction: row;
		justify-content: center;
	}
	#hero > section:first-of-type {
		align-items: start;
		margin-left: 2vw;
		text-align: start;
		width: 85%;
	}
	#hero > section > h1, #hero > section:first-of-type p {
		width: 40rem;
	}
	#hero > section:first-of-type p {
		width: 37rem;
		color: ${({theme}) => theme.heroPColor};
    margin-top: 7px;
		letter-spacing: 1.5px;
		font-weight: 900;
	}
	#hero-img {
	  border-radius: 0 0 0 60%;
	}
	#hero .buttonDiv {
		display: block;
		margin-top: 10px;
	}
	#hero .buttonDiv a:first-of-type button {
		margin-right: 15px;
	}
}
`