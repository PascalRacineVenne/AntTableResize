import { useState, useCallback } from "react";
import DEFAULT_COLUMN_WIDTH from "../AntTable";
import { isGroupColumn } from "./utils";

export function useResizableColumns(initialColumns) {
  const [columns, setColumns] = useState(
    initialColumns || [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
        width: 60,
        resizable: true,
        fixed: "left",
        // sorter: (a, b) => a.id - b.id,
      },
      {
        title: "Full Name",
        dataIndex: "name",
        key: "name",
        width: 150,
        resizable: true,
        fixed: "left",
        // sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        title: "Email Address",
        dataIndex: "email",
        key: "email",
        width: 200,
        resizable: true,
        // sorter: (a, b) => a.email.localeCompare(b.email),
      },
      {
        title: "Phone Number",
        dataIndex: "phone",
        key: "phone",
        width: 130,
        resizable: true,
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        width: 70,
        resizable: true,
        // sorter: (a, b) => a.age - b.age,
      },
      {
        title: "Department",
        dataIndex: "department",
        key: "department",
        width: 120,
        resizable: true,
        // sorter: (a, b) => a.department.localeCompare(b.department),
      },
      {
        title: "Salary",
        dataIndex: "salary",
        key: "salary",
        width: 110,
        resizable: true,
        render: (value) => `$${Math.round(value).toLocaleString()}`,
        // sorter: (a, b) => a.salary - b.salary,
      },
      {
        title: "Full Address",
        dataIndex: "address",
        key: "address",
        width: 280,
        resizable: true,
        ellipsis: true,
      },
      {
        title: "Hire Date",
        dataIndex: "hireDate",
        key: "hireDate",
        width: 100,
        resizable: true,
        // sorter: (a, b) => new Date(a.hireDate) - new Date(b.hireDate),
      },
      {
        title: "Manager",
        dataIndex: "manager",
        key: "manager",
        width: 120,
        resizable: true,
      },
      {
        title: "Location",
        dataIndex: "location",
        key: "location",
        width: 100,
        resizable: true,
      },
      {
        title: "Experience",
        dataIndex: "experience",
        key: "experience",
        width: 100,
        resizable: true,
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        width: 90,
        resizable: true,
        // fixed: "right",
        render: (status) => (
          <span
            style={{
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "12px",
              backgroundColor: status === "Active" ? "#f6ffed" : "#fff1f0",
              color: status === "Active" ? "#52c41a" : "#ff4d4f",
              border: `1px solid ${
                status === "Active" ? "#b7eb8f" : "#ffa39e"
              }`,
            }}
          >
            {status}
          </span>
        ),
      },
    ]
  );
  const handleColumnWidthChange = useCallback((key, newWidth) => {
    function updateWidth(cols) {
      return cols.map((col) => {
        if (col.key === key) {
          return { ...col, width: Math.max(50, newWidth) };
        }
        if (isGroupColumn(col)) {
          return { ...col, children: updateWidth(col.children) };
        }
        return col;
      });
    }
    setColumns((prevColumns) => updateWidth(prevColumns));
  }, []);

  // Auto-fit column to estimated content width
  const autoFitColumn = useCallback(
    (key) => {
      const estimatedWidths = {
        id: 60,
        name: 140,
        email: 190,
        phone: 130,
        age: 70,
        department: 110,
        salary: 100,
        address: 250,
        hireDate: 100,
        manager: 110,
        location: 90,
        experience: 90,
        status: 80,
      };
      const estimatedWidth = estimatedWidths[key] || 120;
      handleColumnWidthChange(key, estimatedWidth);
    },
    [handleColumnWidthChange]
  );

  // Reset all columns to default
  const resetAllWidths = useCallback(() => {
    function resetWidths(cols) {
      return cols.map((col) => {
        if (isGroupColumn(col)) {
          return { ...col, children: resetWidths(col.children) };
        }
        return { ...col, width: DEFAULT_COLUMN_WIDTH };
      });
    }
    setColumns((prevColumns) => resetWidths(prevColumns));
  }, []);

  return { columns, handleColumnWidthChange, autoFitColumn, resetAllWidths };
}
