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

  React.useEffect(() => {
    setpage(1);
  }, [pagelimit]);
  const generateHead = () => {
    const keys = Object.keys(data[0]);
    console.log(keys);
    return keys.map((e) => <th>{e}</th>);
  };
  const generateData = (row) => {
    const keys = Object.keys(data[0]);
    console.log(keys);
    return keys.map((e) => <td>{row[e]}</td>);
  };
  const generateRow = (page) => {
    const start = (page - 1) * pagelimit;
    const end = start + pagelimit;
    return data.slice(start, end).map((row) => <tr>{generateData(row)}</tr>);
  };
  const generateButton = () => {
    const lastPage = Math.ceil(data.length / pagelimit);
    const buttons = [];
    const buttonstart = page - 2 > 0 ? page - 2 : 1;
    const buttonend = page + 2 < lastPage ? page + 2 : lastPage;

    for (let i = buttonstart; i <= buttonend; i++) buttons.push(i);
    return buttons.map((eachbutton) => (
      <button
        className={eachbutton === page ? 'active' : ''}
        onClick={() => setpage(eachbutton)}
      >
        {eachbutton}
      </button>
    ));
  };
  return (
    <div className="pagination">
      <div>
        <button onClick={() => setpage(1)}>&lt;&lt;</button>
        <button onClick={() => setpage(page - 1)}>&lt;</button>
        {generateButton()}
        <button onClick={() => setpage(page + 1)}>&gt;</button>
        <button onClick={() => setpage(Math.ceil(data.length / pagelimit))}>
          &gt;&gt;
        </button>
        <select
          value={pagelimit}
          onChange={(e) => setpagelimit(e.target.value)}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={25}>25</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>{data.length > 0 ? generateHead() : 'loading....'}</tr>
        </thead>
        <tbody>{generateRow(page)}</tbody>
      </table>
    </div>
  );
}
export default Pagination;
