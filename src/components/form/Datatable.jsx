import React from 'react';
import EtiquetaEstado from '../ui/EtiquetaEstado';

const DataTable = ({ headers, data }) => {
  return (
    <div className="table-container overflow-x-auto">
      <div className="inline-block min-w-full">
        <div className="overflow-hidden">
          <table className="data-table min-w-full">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index} className="table-p font-medium">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="table-p sm:text-sm">
                    {row.id}
                  </td>

                  {row.datos.map((dato, colIndex) => (
                    <td key={colIndex} className="table-p sm:text-sm">
                      {colIndex === row.datos.length - 1
                        ? <EtiquetaEstado status={dato} />
                        : dato}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
