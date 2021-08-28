import { Chart, Bar } from "react-chartjs-2";

const transpose = m => m[0].map((x, i) => m.map(x => x[i]));

const data = {
  labels: [],
  datasets: [{
    label: 'Count',
    data: [],
    backgroundColor: [],
    borderColor: [],
    borderWidth: 1
  }]
}

export const InventoryBarChart = (props) => {
  const inventory = transpose(props.inventory);

  console.log(inventory);
  data.datasets[0].data = inventory[2];
  for (let i = 0; i < inventory[0].length; i++) {
    data.labels.push(inventory[3][i] + " " + inventory[4][i]);
    const color = getRandomColor(1);
    data.datasets[0].backgroundColor.push(color);
    data.datasets[0].borderColor.push(color);
  }
  return (
    <div className="chart">
      <Bar data={data}/>
    </div>
  )
}

const getRandomColor = (opacity) => {
  const colors = [
    `rgba(255, 99, 132, ${opacity})`,
    `rgba(54, 162, 235, ${opacity})`,
    `rgba(255, 206, 86, ${opacity})`,
    `rgba(75, 192, 192, ${opacity})`,
    `rgba(153, 102, 255, ${opacity})`,
    `rgba(255, 159, 64, ${opacity})`
  ]
  return colors[getRandomInt(colors.length)]
};

function getRandomInt(max) {
  // expected output: 0 -> max-1
  return Math.floor(Math.random() * max);
};
