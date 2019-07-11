import NewComponent from './NewComponent';

{
	/*import Card from "../components/Card";*/
}

const carouselStyle = {
	margin: 1,
	flex: 1,
	display: 'flex',
	overflow: 'auto',
	flexDirection: 'row',
	maxHeight: '15em',
	WebkitScrollbar: 'none'
};

const cardStyle = {
	display: 'flex',
	marginRight: 15,
	borderBottom: '1px solid #DDD',
	minWidth: '20em',
	minHeight: '10em'
};

const CarouselDeck = () => (
	<div style={carouselStyle}>
		<div style={cardStyle}>
			<NewComponent />
		</div>
		<div style={cardStyle}>
			<NewComponent />
		</div>
		<div style={cardStyle}>
			<NewComponent />
		</div>
		<div style={cardStyle}>
			<NewComponent />
		</div>
		<div style={cardStyle}>
			<NewComponent />
		</div>
	</div>
);

export default CarouselDeck;
