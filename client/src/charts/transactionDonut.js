import { Doughnut } from "react-chartjs-2";

const TransactionDonut = (props) => {
  const transaction = props.transaction;
  // console.log(transaction);

  // Data Transformation
  for (let i=0; i<transaction.length; i++) {
    // color: 0, category: 1, business: 2, count: 3, price: 4, count*price: 5, date: 6
    const category = transaction[i][1];
    const spending = transaction[i][5];
    const idx = config.index[category];

    // Append spending to the datasets
    config.data.datasets[0].data[idx] += parseFloat(spending);
  }

  return (
    <div>
      {/* <h3>Transaction PieChart</h3> */}
      <Doughnut data={config.data} options={config.options} />
    </div>
  );
};

export default TransactionDonut;

const config = {
  data: {
    labels: ["mask", "shoe cover", "shield", "goggles", "respirator"], // X-axis labels
    datasets: [{
      label: 'Spending',
      data: [0, 0, 0, 0, 0],
      backgroundColor: [`rgba(255, 99, 132, 0.9)`,
        `rgba(54, 162, 235, 0.9)`,
        `rgba(255, 206, 86, 0.9)`,
        `rgba(75, 192, 192, 0.9)`,
        `rgba(153, 102, 255, 0.9)`],
      borderColor: [`rgba(255, 99, 132, 1)`,
        `rgba(54, 162, 235, 1)`,
        `rgba(255, 206, 86, 1)`,
        `rgba(75, 192, 192, 1)`,
        `rgba(153, 102, 255, 1)`],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Recent Spending',
        color: "#ffffff",
        font: {
          size: 18
        }
      }
    }
  },
  index: {
    "mask": 0, "shoe cover": 1, "shield": 2, "goggles": 3, "respirator": 4, "repirator": 4
  }
}