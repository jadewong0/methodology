import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="flex flex-col">
      {/* <NavLink to="/">Home</NavLink> */}
      <NavLink to="histogram">Histogram</NavLink>
      <NavLink to="histogramfigma">Histogram - Figma Edit</NavLink>
      <NavLink to="swarmchart">Swarmchart</NavLink>
      <NavLink to="spanningset">Spanning Set - Image</NavLink>
      <NavLink to="workflow">Workflow - Image</NavLink>
    </div>
  );
};

export default SideNav;
