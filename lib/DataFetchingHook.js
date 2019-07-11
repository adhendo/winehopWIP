import useDataApi from 'use-data-api';

const AnyComponent = props => {
	const [{data, isLoading, isError}, doFetch] = useDataApi('http://hn.algolia.com/api/v1/search?query=redux', null);

	return {data, isLoading, isError};
};

export default AnyComponent;
