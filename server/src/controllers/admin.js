const Application = require("../models/application");
const User = require("../models/user");
const { Workbook } = require("exceljs");

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

const exportApplicationDataToExcel = async (req, res) => {
  const { startDate, endDate, category } = req.query;
  const query = {};
  if (startDate)
    query.createdAt = { ...query.createdAt, $gte: new Date(startDate) };
  if (endDate) {
    const date = new Date(endDate).setHours(23, 59, 59, 999);
    query.createdAt = { ...query.createdAt, $lte: new Date(date) };
  }
  if (category) query.category = category;

  try {
    const data = await Application.find(query);

    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet("Sheet 1");

    const columns = [
      { header: "S.No", key: "sn", width: 10 },
      { header: "First Name", key: "firstName", width: 20 },
      { header: "Last Name", key: "lastName", width: 20 },
      { header: "Email", key: "email", width: 20 },
      { header: "Mobile", key: "mobile", width: 20 },
      { header: "Category", key: "category", width: 20 },
      { header: "Vehicle Number", key: "vehicleNumber", width: 20 },
      { header: "DOB", key: "dob", width: 20 },
      { header: "Message", key: "message", width: 20 },
      { header: "Created At", key: "createdAt", width: 20 },
    ];

    worksheet.columns = columns;

    for (let i = 0; i < data.length; i++) {
      worksheet.addRow({
        sn: i + 1,
        firstName: data[i]?.firstName || "N/A",
        lastName: data[i]?.lastName || "N/A",
        email: data[i]?.email || "N/A",
        mobile: data[i]?.mobile || "N/A",
        category: data[i]?.category || "N/A",
        vehicleNumber: data[i]?.vehicleNumber || "N/A",
        dob: data[i]?.dob || "N/A",
        message: data[i]?.subject || "N/A",
        createdAt: new Date(data[i]?.createdAt).toLocaleString(),
      });
    }

    const buffer = await workbook.xlsx.writeBuffer();
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + `Application-data.xlsx`
    );

    return res.status(200).send(buffer);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const exportUserDataToExcel = async (req, res) => {
  const { startDate, endDate, role } = req.query;
  const query = {};
  if (startDate)
    query.createdAt = { ...query.createdAt, $gte: new Date(startDate) };
  if (endDate) {
    const date = new Date(endDate).setHours(23, 59, 59, 999);
    query.createdAt = { ...query.createdAt, $lte: new Date(date) };
  }
  if (role) query.role = role;
  try {
    const data = await User.find(query);

    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet("Sheet 1");

    const columns = [
      { header: "S.No", key: "sn", width: 10 },
      { header: "Name", key: "name", width: 20 },
      { header: "Email", key: "email", width: 20 },
      { header: "Mobile", key: "mobile", width: 20 },
      { header: "Role", key: "role", width: 20 },
      { header: "Date", key: "createdAt", width: 20 },
    ];

    worksheet.columns = columns;

    for (let i = 0; i < data.length; i++) {
      worksheet.addRow({
        sn: i + 1,
        name: data[i]?.name || "N/A",
        email: data[i]?.email || "N/A",
        mobile: data[i]?.phone || "N/A",
        role: data[i]?.role || "N/A",
        createdAt: new Date(data[i]?.createdAt).toLocaleString(),
      });
    }

    const buffer = await workbook.xlsx.writeBuffer();
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + `user-data.xlsx`
    );

    return res.status(200).send(buffer);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getChartsData,
  exportApplicationDataToExcel,
  exportUserDataToExcel,
};
