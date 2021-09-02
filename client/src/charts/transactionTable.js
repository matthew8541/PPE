import { Table } from "react-bootstrap";

const TransactionTable = (props) => {
  const transaction = props.transaction;
  console.log(transaction);
  const header = ["product", "manufacturer", "amount", "price", "total price", "date"]

  return (
    <div className="mt-5">
      <h3>Transaction Table</h3>
      <Table className="fs-6" responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Recent Transaction</th>
            {Array.from({ length: header.length }).map((_, index) => (
              <th key={index}>{header[index]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, rowIdx) => {
            return (
              <tr>
                <td>{rowIdx}</td>
                {Array.from({ length: transaction[0].length - 1 }).map((_, colIdx) => {
                  if (colIdx === 0) {
                    return (<td key={colIdx}>{transaction[rowIdx][colIdx] + " " + transaction[rowIdx][1]}</td>);
                  } else if (colIdx === 3 || colIdx === 4) {
                    return (<td key={colIdx}>{transaction[rowIdx][colIdx + 1].toFixed(2)}</td>);
                  }
                  return (<td key={colIdx}>{transaction[rowIdx][colIdx + 1]}</td>);
                  
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionTable;