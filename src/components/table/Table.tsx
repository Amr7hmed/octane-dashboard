/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface TableColumn {
  title: string;
  key: string;
  render?: (value: any) => JSX.Element;
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
  actions: any
}

const Table: React.FC<TableProps> = ({ columns, data, actions }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.title}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col.key}>{col.render ? col.render(item[col.key]) : item[col.key]}</td>
            ))}
            <td>{actions}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;