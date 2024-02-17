import React from "react"


const useFetch = ( topic, page) =>{
    const API_URL = `https://raw.githubusercontent.com/The-Valley-School/react-w5-newspaper/main/api/${topic}/${page}.json`
    const [info, setinfo] = React.useState([])
    React.useEffect(() => {
        fetch( API_URL)
          .then((response) => response.json())
          .then((data) => setinfo(data));
        console.log(info);
      },[API_URL]);
      return info;
}

export default useFetch;