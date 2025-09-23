
import "./App.css"
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <Avatar image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrRsqIDyC_V_Cf_p53fU_76igYhah04ERD3g&s"
      name={"IronMan"}
      power={200}
      />

      <Avatar image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmOgxuNE0GeqAGrTn5KTrLnTxjuk-5L1hjA&s"
      name={"Thor"}
      power={300}
      />
    </div>
  );
}

export default App;
