import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useGetDataQuery } from "@/features/DataGrid/dataSlice";
import Loader from "../resources/Loader/Loader";
import { useSnackbar } from "notistack";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CircleChart() {
  const { data: mainData, isLoading, error } = useGetDataQuery();
  const { enqueueSnackbar } = useSnackbar();
  if (isLoading) return <Loader />;
  if (error) enqueueSnackbar("Problem getting data", { variant: "error" });
  const names = [...new Set(mainData.map((v) => v.scannedBy.firstName))];

  const howMuchEachScanned = names.map((name) => {
    return mainData.filter((data) => data.scannedBy.firstName === name).length;
  });
  const data = {
    labels: names,
    datasets: [
      {
        label: "Scanned items",
        data: howMuchEachScanned,

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
}
