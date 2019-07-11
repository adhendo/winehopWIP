import Link from 'next/link';
import IosContactOutline from 'react-ionicons/lib/IosContactOutline';
import IosWine from 'react-ionicons/lib/IosWine';
import MdMap from 'react-ionicons/lib/MdMap';

const headStyle = {
	width: '99%',
	height: '100%'
};
const linkStyle = {
	fontFamily: 'Rubik',
	fontSize: '27px',
	color: '#3D9636',
	textDecoration: 'none'
};
const rowStyle = {
	display: 'flex',
	flex: '1',
	flexDirection: 'row',
	justifyContent: 'space-between'
};
const iconRowStyle = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between'
};
const iconContainerStyle = {
	paddingLeft: '0.7em',
	paddingRight: '0.7em'
};

{
	/** Component------<Here>--->Styles---Above^ */
}

const Header = () => (
	<div style={headStyle}>
		<div style={rowStyle}>
			<div>
				<Link href="/">
					<a style={linkStyle}>vinefinds</a>
				</Link>
				<link href="https://fonts.googleapis.com/css?family=Rubik:300&display=swap" rel="stylesheet" />
			</div>

			<div style={iconRowStyle}>
				<div style={iconContainerStyle}>
					<MdMap onClick={() => alert('feature coming soon:)')} fontSize="27px" color="#43853d" />
				</div>
				<div style={iconContainerStyle}>
					<IosWine onClick={() => alert('feature coming soon:)')} fontSize="27px" color="#43853d" />
				</div>
				<div style={iconContainerStyle}>
					<IosContactOutline onClick={() => alert('feature coming soon:)')} fontSize="27px" color="#43853d" />
				</div>
			</div>
		</div>
	</div>
);

export default Header;
