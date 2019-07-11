{
	/**
const BASE_URL = "https://vine-finds.firebaseio.com";

function useDataFetcher(url) {
  const [merchants, setMerchants] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Error fetching posts!");
        }
      })
      .then(merchants => {
        setMerchants(merchants);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  }, [url]);

  return { merchants, isLoading, error };
}

function Card() {
  const { merchants, isLoading, error } = useDataFetcher(BASE_URL);

  if (error) {
    return <p style={{ color: "red" }}>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {merchants.map(merchant => (
        <>
          <h4>{merchant.name}</h4>
          <h5>{merchant.address}</h5>
          <p>{merchant.description}</p>
        </>
      ))}
    </div>
  );
}

export default Card;

{
  /**
const cardStyle = {
  margin: 1
};

function Winery () {
  constructor() {
    super();
    this.state = {
      wineries: [{}]
    }
  }
  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const wineries = await response.json()
    this.setState({wineries: wineries})
    }



const Card = () => (
  <div>
    {this.state.wineries ? (
      <ul>
        {this.state.wineries.map(winery => (
          <li>
            <h3>{winery.name}</h3>
          </li>
        ))}
      </ul>
    ) : (
      <p>no</p>
    )}
  </div>
);
};

export default Card;

 */
}

{
	/** 
import { loadFirebase } from "../lib/db.js";
    
export default class Card extends React.Component {
  static getInitialProps = () =>
    loadFirebase()
      .firestore()
      .collection("merchants")
      .limit(10)
      .get()
      .then(snapshot => {
        let data = [];
        snapshot.forEach(doc => {
          data.push({
            id: doc.id,
            ...doc.data()
          });
        });
        return { merchants: data };
      });
  render() {
    const merchants = this.props.merchants;
    return (
      <div id="merchants">
        {merchants && merchants.length > 0 ? (
          <div>
            {merchants.map(merchant => (
              <li key="{merchant.id}">
                <h3>
                  {merchant.name} has a ranking of
                  <em>{merchant.address}!</em>
                </h3>
              </li>
            ))}
          </div>
        ) : (
          <p>
            <strong>Loading...</strong>
          </p>
        )}
        <hr />
      </div>
    );
  }
}
*/
}

{
	/** 
import firebase from "firebase/app";
import "firebase/database";
import React, { useEffect, useState } from "React";

firebase.initializeApp(firebaseConfig);

type PageProps = {
  children: (data: any) => JSX.Element;
  dataRoute: string;
};

const Page: React.FunctionComponent<PageProps> = ({ children, dataRoute }) => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    const dbRef: firebase.database.Reference = firebase
      .database()
      .ref(dataRoute);
    dbRef.on("value", (snap: firebase.database.DataSnapshot) => {
      let dbValue = snap.val() || {};
      setData(dbValue);
    });
    return () => {
      dbRef.off();
    };
  }, []);

  return (
    <>
      {!data && <></>}
      {data && children(data)}
    </>
  );
};

export { Page };

*/
}

const Card = () => <div />;
export default Card;
