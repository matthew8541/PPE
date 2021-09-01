import { Bar } from "react-chartjs-2";

const transpose = m => m[0].map((x, i) => m.map(x => x[i]));

const categoryData = {
  labels: ["mask", "shoe cover", "shield", "goggles", "respirator"], // X-axis labels
  datasets: [{
    label: 'Count',
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
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Current Inventory',
      color: "#ffffff",
      font: {
        size: 18,
        style: "bold"
      }
    }
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 14
        },
        color: "#ffffff"
      },
      grid: {
        drawBorder: false,
        color: function(context) {
          // console.log(context);
          return "#ffffff";
        }
      }
    },
    y: {
      ticks: {
        font: {
          size: 14
        },
        color: "#ffffff"
      },
      grid: {
        color: "#ffffff"
      }
    }
  }
}

const categoryIdx = {
  "mask": 0, "shoe cover": 1, "shield": 2, "goggles": 3, "respirator": 4, "repirator":4
}

export const CategoryBarChart = (props) => {
  const inventory = transpose(props.inventory);

  console.log(inventory);
  for (let i = 0; i < inventory[0].length; i++) {
    let currCategory = inventory[4][i];
    console.log("currCategory: ", currCategory);
    let idx = categoryIdx[currCategory];
    console.log("categoryIdx: ", idx);
    console.log("currData: ", inventory[2][i])
    categoryData.datasets[0].data[idx] += inventory[2][i];
  }
  return (
    <div className="chart">
      <Bar data={categoryData} options={options} />
    </div>
  )
}

const getRandomColor = (opacity) => {
  const colors = [
    `rgba(255, 99, 132, 1)`,
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
