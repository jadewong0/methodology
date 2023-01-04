import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Histogram from "./components/charts/Histogram";
import HistogramFigma from "./components/charts/HistogramFigma";
import SwarmChart from "./components/charts/SwarmChart";
import SpanningSet from "./components/charts/SpanningSet";
import Workflow from "./components/charts/Workflow";
import SideNav from "./components/SideNav";

function App() {
  return (
    <>
      <div className="grid grid-cols-5 p-5">
        <section className="col-span-1">
          <SideNav />
        </section>
        <section className="col-span-4 h-full w-[1000px]">
          <Routes>
            <Route path="histogram" element={<Histogram />} />
            <Route path="*" element={<Navigate to="/histogram" replace />} />
            <Route path="histogramfigma" element={<HistogramFigma />} />
            <Route path="swarmchart" element={<SwarmChart />} />
            <Route path="spanningset" element={<SpanningSet />} />
            <Route path="workflow" element={<Workflow />} />
          </Routes>
        </section>
      </div>
    </>
  );
}

export default App;
