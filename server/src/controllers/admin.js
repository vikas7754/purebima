const Application = require("../models/application");
const User = require("../models/user");

const getChartsData = async (req, res) => {
  try {
    const promises = [
      Application.countDocuments({ category: "Become POSP" }),
      Application.countDocuments({ category: "Two Wheeler Insurance" }),
      Application.countDocuments({ category: "Car Insurance" }),
      Application.countDocuments({ category: "Health Insurance" }),
      Application.countDocuments({ category: "Other Query" }),
    ];
    const totalApplications = await Promise.all(promises);

    const pieChart = {
      labels: [
        "Become POSP",
        "Two Wheeler Insurance",
        "Car Insurance",
        "Health Insurance",
        "Other Query",
      ],
      datasets: [
        {
          label: `Applications `,
          data: totalApplications,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(153, 102, 255)",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const labels = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      labels.push(date.toLocaleString("en-us", { weekday: "long" }));
    }

    const userPromise = [];
    for (let i = 7; i > 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const date1 = new Date(date);
      date1.setDate(date1.getDate() + 1);
      userPromise.push(
        User.countDocuments({
          createdAt: {
            $gt: date,
            $lt: date1,
          },
        })
      );
    }

    const applicationPromise = [];
    for (let i = 7; i > 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const date1 = new Date(date);
      date1.setDate(date1.getDate() + 1);
      applicationPromise.push(
        Application.countDocuments({
          createdAt: {
            $gt: date,
            $lt: date1,
          },
        })
      );
    }

    const lineChartUser = await Promise.all(userPromise);
    const lineChartApplication = await Promise.all(applicationPromise);
    const lineChart = {
      labels,
      datasets: [
        {
          label: "Application",
          data: lineChartApplication,
          fill: false,
          borderColor: "rgb(255, 99, 132)",
          tension: 0.4,
        },
      ],
    };
    const userLineChart = {
      labels,
      datasets: [
        {
          label: "User",
          data: lineChartUser,
          fill: false,
          borderColor: "rgb(54, 162, 235)",
          tension: 0.4,
        },
      ],
    };
    return res.status(200).json({ pieChart, lineChart, userLineChart });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getChartsData,
};
