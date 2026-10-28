import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { LineChartComponent } from "../components";
import { chartWhiteBgOnDownloadPlugin } from "../../../../utils/helper";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
};

const scaleOptions = {
  ...options,
  plugins: {
    ...options.plugins,
    tooltip: {
      enabled: true,
      callbacks: {
        label: (context) => `${context.formattedValue} %`,
      },
    },
  },
  scales: {
    y: {
      max: 100,
      ticks: {
        callback: (value) => `${value} %`,
      },
    },
  },
};

const LineChart = ({
  data,
  displayInPercentageFormat,
  label,
  isDownloadable,
}) => {
  const chartRef = useRef();

  const handleDownloadChart = (label) => {
    const link = document.createElement("a");
    link.download = `${label}.png`;
    link.href = chartRef.current.toBase64Image();
    link.click();
  };

  return (
    <LineChartComponent
      data={data}
      label={label}
      plugins={[chartWhiteBgOnDownloadPlugin]}
      options={displayInPercentageFormat ? scaleOptions : options}
      ref={chartRef}
      handleDownloadChart={handleDownloadChart}
      isDownloadable={isDownloadable}
    />
  );
};

export default LineChart;