import { useState, useRef, useLayoutEffect } from "react";
import { Space, Button } from "antd";

import { useTableData } from "./table/useTableData";
import { useResizableColumns } from "./table/useResizableColumns";
import enhancedColumns from "./table/EnhancedColumns";
import TableHeader from "./table/TableHeader";
import RealAntResizableTable from "./table/RealAntResizableTable";
import TableConfigInfo from "./table/TableConfigInfo";
import ColumnSettingsDrawer from "./table/ColumnSettingsDrawer";
// import { mockColumns } from "./mockColumns";
// import { mockColumnsV2 } from "./mockColumnsV2";
// import { mockData } from "./mockData";
import { mockDataESG } from "./mockDataESG";
import { mockColumnsESG } from "./mockColumnsESG";
import { getLeafColumns } from "./table/utils";

export const DEFAULT_COLUMN_WIDTH = 150;

const AntTable = () => {
  const [autoFitActive, setAutoFitActive] = useState(false);
  const tableContainerRef = useRef(null);
  const hasMoved = useRef(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [resizing, setResizing] = useState(null);
  const startXRef = useRef(0);
  const startWidthRef = useRef(0);

  const dataSource = useTableData(mockDataESG);
  const { columns, handleColumnWidthChange, autoFitColumn, resetAllWidths } =
    useResizableColumns(mockColumnsESG, dataSource);

  useLayoutEffect(() => {
    if (tableContainerRef.current) {
      setContainerWidth(tableContainerRef.current.offsetWidth);
    }
  }, [columns]);

  const columnCount = columns.length;

  const scrollX =
    columnCount * DEFAULT_COLUMN_WIDTH > containerWidth
      ? columnCount * DEFAULT_COLUMN_WIDTH
      : containerWidth - 2;

  const handleAutoFitAll = () => {
    const leafColumns = getLeafColumns(columns);
    if (!autoFitActive) {
      leafColumns.forEach((col) => {
        autoFitColumn(col.key);
      });
    } else {
      resetAllWidths();
    }
    setAutoFitActive((prev) => !prev);
  };

  const handleResizeMouseDown = (e, columnKey, currentWidth, offset = 0) => {
    e.preventDefault();
    e.stopPropagation();

    setResizing(columnKey);
    startXRef.current = e.clientX + offset;
    startWidthRef.current = currentWidth;
    hasMoved.current = false;

    const handleMouseMove = (moveEvent) => {
      if (!hasMoved.current) {
        if (Math.abs(moveEvent.clientX - e.clientX) > 0) {
          hasMoved.current = true;
        } else {
          return;
        }
      }

      const diff = moveEvent.clientX - startXRef.current;
      const newWidth = Math.max(50, startWidthRef.current + diff);
      handleColumnWidthChange(columnKey, newWidth);
    };

    const handleMouseUp = () => {
      setResizing(null);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const newEnhancedColumns = enhancedColumns(
    columns,
    resizing,
    handleResizeMouseDown
  );

  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        cursor: resizing ? "col-resize" : "default",
        userSelect: resizing ? "none" : "auto",
      }}
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <TableHeader
          onResetWidths={resetAllWidths}
          onOpenSettings={() => setDrawerOpen(true)}
        />
        <Button onClick={handleAutoFitAll} type="primary">
          {autoFitActive ? "Reset All Columns" : "Auto-Fit All Columns"}
        </Button>
        <RealAntResizableTable
          columns={newEnhancedColumns}
          dataSource={dataSource}
          scrollX={scrollX}
          resizing={resizing}
          tableContainerRef={tableContainerRef}
        />

        <TableConfigInfo
          dataSource={dataSource}
          containerWidth={containerWidth}
          scrollX={scrollX}
          columnCount={columnCount}
          columns={columns}
          resizing={resizing}
        />

        <ColumnSettingsDrawer
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          resetAllWidths={resetAllWidths}
          columns={columns}
          resizing={resizing}
          handleColumnWidthChange={handleColumnWidthChange}
          autoFitColumn={autoFitColumn}
        />
      </Space>
    </div>
  );
};

export default AntTable;
