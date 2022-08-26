import { useState } from "react";
import "./table.scss";
import "@glideapps/glide-data-grid/dist/index.css";

function DataTable() {
  const [count, setCount] = useState(0);

  return (
    <div className="table-component">
      <h1>Database Name</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default DataTable;
