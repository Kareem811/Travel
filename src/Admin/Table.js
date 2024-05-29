import React from "react";
import tableStyles from "./table.module.css";
import Navbar from "../Components/Navbar/Navbar";
const Table = () => {
  return (
    <>
      <Navbar />
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th>11111111</th>
            <th>11111111</th>
            <th>11111111</th>
            <th>11111111</th>
            <th>11111111</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>22222</td>
            <td>22222</td>
            <td>22222</td>
            <td>22222</td>
            <td>
              {" "}
              <button>OK</button>
            </td>
          </tr>
          <tr>
            <td>22222</td>
            <td>22222</td>
            <td>22222</td>
            <td>22222</td>
            <td>
              {" "}
              <button>OK</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
