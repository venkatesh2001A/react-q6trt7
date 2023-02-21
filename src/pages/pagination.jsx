import React from 'react';
import '../css/pagination.css';
function Pagination() {
  const [data, setdata] = React.useState([]);
  const [pagelimit, setpagelimit] = React.useState(10);
  const [page, setpage] = React.useState(1);

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

  const generatedata = (row) => {
    const keys = Object.keys(data[0]);
    console.log(keys);
    return keys.map((e) => <td>{row[e]}</td>);
  };

  const generaterow = (page) => {
    const start = (page - 1) * pagelimit;
    const end = start + pagelimit;
    return data.slice(start, end).map((row) => <tr>{generatedata(row)}</tr>);
  };

  const generatebuttons = () => {
    const lastpage = Math.ceil(data.length / pagelimit);
    const buttons = [];
    for (let i = 1; i <= lastpage; i++) buttons.push(i);
    return buttons.map((eachbutton) => (
      <button onClick={() => setpage(eachbutton)}>{eachbutton}</button>
    ));
  };

  return (
    <div>
      <div>{generatebuttons()}</div>
      <table>
        <thead>
          <tr> {data.length > 0 ? generateHead() : 'loading...'} </tr>
        </thead>
        <tbody>{generaterow(page)}</tbody>
      </table>
    </div>
  );
}
export default Pagination;
