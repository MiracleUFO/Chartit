import night from '../imgs/night.jpg';
import formBg from '../imgs/formBg.jpg';

export const lightTheme = {
	text: `#000`,
	background: `#FFF`,
	button: `orange`,
	borderBottom: `1px solid #eee`,
	navBg: `purple`,
	navBgMobile: `transparent`,
	authViewBg: `url(${formBg})`,
	heroImgBg: `#E0E9FA`,
	heroTextColor: `rgba(31,35,65,0.99)`,
	mobileHeroTextColor: `black`,
	transparentButtonColorBg: `#E0E9FA`,
	transparentButtonColor: `mediumpurple`,
	transparentButtonBgHover: `#E0E9FA`,
	curve: `white`,
	charterElementBg: `mediumpurple`,
	charterElementBgHover: `#6C49B4`,
	footerBg: `slategrey`,
	submitBtn: `#FFB347`,
	submitBtnActive: `orange`,
	heroWidth: `revert`,
	heroMargin: `0 0 0 2vw`,
	navMargin: `revert`,
	marginLeft: `2vw`
}

export const darkTheme = {
	text: `#EDF5E1`,
	background: `url(${night})`,
	button: `tomato`,
	borderBottom: `none`,
	navBg: `transparent`,
	navBgMobile: `transparent`,
	authViewBg: `url(${formBg})`,
	heroImgBg: `transparent`,
	heroTextColor: `white`,
	mobileHeroTextColor: `whitea`,
	transparentButtonColorBg: `#a45bd6`,
	transparentButtonColor: `#E0E9FA`,
	transparentButtonBgHover: `#7447d1`,
	curve: `transparent`,
	charterElementBg: `#a25bd6`,
	charterElementBgHover: `blueviolet`,
	footerBg: `black`,
	submitBtn: `#FF7961`,
	submitBtnActive: `tomato`,
	heroWidth: `90vw`,
	heroMargin: `0 auto`,
	navMargin: `0 2vw`,
	marginLeft: `revert`
}