import { useSelector } from "react-redux";
function Worning() {
  const state = useSelector((state) => {
    return {
      worning: state.worning.worning,
    };
  });
  return (
    <div>
      <h2 className="worning">{state.worning}</h2>
    </div>
  );
}
export default Worning;
