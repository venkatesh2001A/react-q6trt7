import React from 'react';
import '../css/pagination.css';
function Pagination() {
  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setdata(result);
      });
  }, []);

  const generateHead = () => {
    const keys = Object.keys(data[0]);
    console.log(keys);
    // return <th>hello</th>;

    return keys.map((e) => <th>{e}</th>);
  };
  const generaterow = () => {
    return data.map((row) => <tr>"hello"</tr>);
  };
  return (
    // <p> PUGZHAL {JSON.stringify(data)}</p>
    <div>
      <table>
        <thead>
          <tr> {data.length > 0 ? generateHead() : 'loading...'} </tr>
        </thead>
        <tbody>{generaterow()}</tbody>
      </table>
    </div>
  );
}
export default Pagination;
