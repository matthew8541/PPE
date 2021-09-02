import { Bar } from "react-chartjs-2";

const CategoryBarChart = (props) => {
  const inventory = props.inventory;
  // console.log(inventory);

  // Data Transformation
  for (let i = 0; i < inventory.length; i++) {
    const currCategory = inventory[i][4];
    const idx = config.index[currCategory];
    // Append numbers to the datasets
    config.data.datasets[0].data[idx] += inventory[i][2];
  }
  return (
    <div>
      <Bar data={config.data} options={config.options} />
    </div>
  )
}

export default CategoryBarChart;

// const transpose = m => m[0].map((x, i) => m.map(x => x[i]));

const config = {
  data: {
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
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Current Inventory',
        color: "#ffffff",
        font: {
          size: 18
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
  },
  index: {
    "mask": 0, "shoe cover": 1, "shield": 2, "goggles": 3, "respirator": 4, "repirator":4
  }
}