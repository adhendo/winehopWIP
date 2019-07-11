import axios from 'axios';
import React, {Fragment, useEffect, useState} from 'react';

const useDataApi = (initialUrl, initialData) => {
	const [data, setData] = useState(initialData);
	const [url, setUrl] = useState(initialUrl);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(
		() => {
			const fetchData = async () => {
				setIsError(false);
				setIsLoading(true);

				try {
					const result = await axios(url);

					setData(result.data);
				} catch (error) {
					setIsError(true);
				}

				setIsLoading(false);
			};

			fetchData();
		},
		[url]
	);

	return [{data, isLoading, isError}, setUrl];
};

function NewComponent() {
	const [query, setQuery] = useState('redux');
	const [{data, isLoading, isError}, doFetch] = useDataApi('http://hn.algolia.com/api/v1/search?query=wine', {
		hits: [3]
	});

	return (
		<Fragment>
			{/*<form
				onSubmit={event => {
					doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);

					event.preventDefault();
				}}
			>
				<input type="text" value={query} onChange={event => setQuery(event.target.value)} />
				<button type="submit">Search</button>
			</form>**/}

			{isError && <div>Something went wrong ...</div>}

			{isLoading ? (
				<div>Loading ...</div>
			) : (
				<div>
					{data.hits.map(item => (
						<li key={item.objectID}>
							<a href={item.url}>{item.title}</a>
						</li>
					))}
				</div>
			)}
		</Fragment>
	);
}

export default NewComponent;
