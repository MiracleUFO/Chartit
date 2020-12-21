import {createGlobalStyle} from 'styled-components'
export const GlobalStyles = createGlobalStyle`
	body {
		background: ${({theme}) => theme.background};
		padding: 0 5%;
		color: ${({theme}) => theme.text};
		font-family: Merriweather, Helvetica;
		transition: background 2s, color 2s;
	}
	header {
		display: flex;
		align-items: center;
		justify-content: space-between
	}
	#moonIcon {
		width: 50px;
	}
`