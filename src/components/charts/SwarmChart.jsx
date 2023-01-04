import { ResponsiveSwarmPlot } from "@nivo/swarmplot";
import swarmData from "../../data/methodology_swarm.json";

export default function SwarmChart() {
  const theme = {
    fontSize: 18,
    axis: {
      legend: {
        text: {
          fontSize: 18,
          fill: "rgb(75 85 99)",
        },
      },
      ticks: {
        text: {
          fontSize: 18,
          fill: "rgb(102 102 102)",
        },
      },
    },
  };

  return (
    <div className="h-screen">
      <h1 className="text-slate-600 font-bold text-center text-lg">
        Heatwave Index for North York, Canada
      </h1>
      <ResponsiveSwarmPlot
        theme={theme}
        data={swarmData}
        groups={["2030", "2050", "2070", "2090"]}
        groupBy="horizon"
        identity="value"
        value="value"
        valueScale={{ type: "linear", min: 130, max: 280, reverse: false }}
        simulationIterations={60}
        size={3}
        useMesh={true}
        margin={{ top: 50, right: 100, bottom: 80, left: 100 }}
        axisBottom={{
          orient: "bottom",
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Horizon",
          legendPosition: "middle",
          legendOffset: 56,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Climate Risk Score",
          legendPosition: "middle",
          legendOffset: -76,
        }}
        axisRight={null}
      />
    </div>
  );
}
