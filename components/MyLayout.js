import Header from './Header';
import HeroButtons from './HeroButtons';
import Map from './MapComponent';

const mainStyle = {
	fontFamily: 'Rubik',
	fontStyle: 'light'
};

const layoutStyle = {
	margin: 20,
	padding: 20
};

const headerStyle = {
	padding: 20,
	display: 'flex',
	flexDirection: 'row',
	borderRadius: '4px',
	justifyContent: 'space-between'
};

const basicContainerStyle = {
	display: 'flex',
	justifyContent: 'space-around'
};
const basicTwoContainerStyle = {
	display: 'flex',
	justifyContent: 'space-around',
	margin: '5'
};

const withLayout = Page => {
	return () => (
		<div style={mainStyle}>
			<div style={headerStyle}>
				<Header />
			</div>

			<div style={layoutStyle}>
				<Page />
			</div>

			<div style={basicContainerStyle}>
				<HeroButtons />
			</div>
			<div style={basicTwoContainerStyle}>
				<Map />
			</div>
		</div>
	);
};

export default withLayout;
