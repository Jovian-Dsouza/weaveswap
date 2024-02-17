import React from "react";

function DataTable({ className, header, data, btnName, btnOnClick, RowComponent }) {
  return (
    <div className={`relative overflow-x-auto rounded-t-xl ${className}`}>
      <table className="w-full text-center text-white border-x border-lightGray">
        <thead className="capitalize bg-lightGray text-darkGray font-bold">
          <tr>
            {header.map((x, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {x}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <RowComponent key={index} index={index} item={d} btnName={btnName} btnOnClick={btnOnClick} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
