import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import { getDashBoard } from "../api/api";

import CategoryBarChart from "../charts/categoryBarChart";
import TransactionDonut from "../charts/transactionDonut";
import TransactionTable from "../charts/transactionTable";

const DashBoard = () => {
  const [inventory, setInventory] = useState([]);
  const [transaction, setTransaction] = useState([]);

  const hospital = useSelector(state => state.auth.hospital);

  useEffect(() => {
    getDashBoard(hospital).then(data => {
      const { recent_transaction, inventory } = data;
      setInventory(inventory);
      setTransaction(recent_transaction);
    })
  }, [])

  if (inventory.length === 0 || transaction.length === 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  };

  return (
    <div>
      <h1 className="m-3">DashBoard</h1>
      <Container>
        <Row>
          <Col md={8}><CategoryBarChart inventory={inventory}/></Col>
          <Col md={4}><TransactionDonut transaction={transaction} /></Col>
        </Row>
        <Row>
          <Col md={true}><TransactionTable transaction={transaction} /></Col>
        </Row>
      </Container>
      {/* <CategoryBarChart inventory={inventory}/>
      <TransactionTable transaction={transaction} />
      <TransactionDonut transaction={transaction} /> */}
    </div>
  );
};

export default DashBoard;