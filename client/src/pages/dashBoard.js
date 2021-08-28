import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getDashBoard } from "../api/api";

import { InventoryBarChart } from "../components/charts";

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
    )
  }

  // if (inventory.length === 0) {
  //   return (
  //     <div>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }

  return (
    <div>
      <h1>DashBoard</h1>
      <InventoryBarChart inventory={inventory}/>
    </div>
  )
}

export default DashBoard;