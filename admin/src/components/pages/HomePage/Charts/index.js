import { getChartsData } from "@/services/other";
import { Chart } from "chart.js/auto";
import { useEffect, useRef, useState } from "react";
import styles from "./charts.module.scss";

function Charts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await getChartsData();
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const pieChartConfig = {
    type: "pie",
    data: data?.pieChart || {},
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "none",
        },
      },
    },
  };

  const lineChartConfig = {
    type: "line",
    data: data?.lineChart || {},
    options: {
      responsive: true,
    },
  };

  const userLineChartConfig = {
    type: "line",
    data: data?.userLineChart || {},
    options: {
      responsive: true,
    },
  };

  const pieChartRef = useRef();
  const lineChartRef = useRef();
  const userLineChartRef = useRef();

  useEffect(() => {
    if (!data) return;
    if (!pieChartRef?.current || !lineChartRef?.current) return;
    const pieChartCtx = pieChartRef.current.getContext("2d");
    const lineChartCtx = lineChartRef.current.getContext("2d");
    const userLineChartCtx = userLineChartRef.current.getContext("2d");
    if (!pieChartCtx || !lineChartCtx || !userLineChartCtx) return;
    if (pieChartRef.current.chart) pieChartRef.current.chart.destroy();

    if (lineChartRef.current.chart) lineChartRef.current.chart.destroy();

    if (userLineChartRef.current.chart)
      userLineChartRef.current.chart.destroy();

    pieChartRef.current.chart = new Chart(pieChartCtx, pieChartConfig);
    lineChartRef.current.chart = new Chart(lineChartCtx, lineChartConfig);
    userLineChartRef.current.chart = new Chart(
      userLineChartCtx,
      userLineChartConfig
    );
  }, [data]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <div className={styles.charts}>
        {loading ? (
          <>
            <div className={styles.loader}></div>
            <div className={styles.loader}></div>
            <div className={styles.loader}></div>
          </>
        ) : (
          <>
            <div>
              <canvas
                ref={userLineChartRef}
                width="100%"
                height="100%"
              ></canvas>
            </div>
            <div>
              <canvas ref={lineChartRef} width="100%" height="100%"></canvas>
            </div>
            <div>
              <canvas ref={pieChartRef} width="80%" height="100%"></canvas>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Charts;
