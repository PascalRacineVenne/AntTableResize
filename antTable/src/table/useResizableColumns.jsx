import { useState, useCallback } from "react";
import DEFAULT_COLUMN_WIDTH from "../AntTable";
import { isGroupColumn } from "./utils";

export function useResizableColumns(dataSource, initialColumns) {
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

  // const getTextWidth = (text, font = "14px Arial") => {
  //   // Create a canvas for measuring text width
  //   const canvas =
  //     getTextWidth.canvas ||
  //     (getTextWidth.canvas = document.createElement("canvas"));
  //   const context = canvas.getContext("2d");
  //   context.font = font;
  //   return context.measureText(text).width;
  // };

  const getTextWidth = (text) => {
    // Estimate average character width for 14px font (adjust as needed)
    const avgCharWidth = 8; // You can tweak this value for your font
    return String(text).length * avgCharWidth;
  };

  const findColumnByKey = (cols, key) => {
    for (const col of cols) {
      if (col.key === key || col.dataIndex === key) {
        return col;
      }
      if (isGroupColumn(col)) {
        const found = findColumnByKey(col.children, key);
        if (found) return found;
      }
    }
    return null;
  };

  const autoFitColumn = useCallback(
    (key) => {
      // Find the column definition
      const col = findColumnByKey(columns, key);
      // console.log("Auto-fitting column:", key, col);
      if (!col) return;

      // Get header width
      const headerText = typeof col.title === "string" ? col.title : "";
      // const headerWidth = getTextWidth(headerText, "bold 14px Arial");
      const headerWidth = getTextWidth(headerText);

      // Get max cell width (sample up to 50 rows for performance)
      let maxCellWidth = 0;
      dataSource.slice(0, 50).forEach((row) => {
        const value = row[key];
        const cellText = value == null ? "" : String(value);
        // const cellWidth = getTextWidth(cellText, "14px Arial");
        const cellWidth = getTextWidth(cellText);
        if (cellWidth > maxCellWidth) maxCellWidth = cellWidth;
      });

      // Add padding for cell and header
      const padding = 32; // 16px left + 16px right
      let estimatedWidth = Math.ceil(
        Math.max(headerWidth, maxCellWidth) + padding
      );
      estimatedWidth = Math.min(estimatedWidth, 150);
      // console.log(`Auto-fitting column ${key} to width ${estimatedWidth}px`);

      handleColumnWidthChange(key, estimatedWidth);
    },
    [columns, dataSource, handleColumnWidthChange, getTextWidth]
  );

  // Reset all columns to default
  const resetAllWidths = useCallback(() => {
    function resetWidths(cols) {
      return cols.map((col) => {
        if (isGroupColumn(col)) {
          return {
            ...col,
            children: resetWidths(col.children),
          };
        }
        const { width: _, ...rest } = col;
        return rest;
      });
    }
    setColumns((prevColumns) => resetWidths(prevColumns));
  }, []);

  return { columns, handleColumnWidthChange, autoFitColumn, resetAllWidths };
}
