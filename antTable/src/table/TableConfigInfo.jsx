import { Card, Divider, Space, Typography } from "antd";
const { Text } = Typography;
import { getLeafColumns } from "./utils";

const TableConfigInfo = ({
  dataSource,
  containerWidth,
  scrollX,
  columnCount,
  columns,
  resizing,
}) => {
  const leafColumns = getLeafColumns(columns);
  return (
    <Card title="Table Configuration" size="small">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
          fontSize: "14px",
        }}
      >
        <div>
          <Text strong>Container Width:</Text>{" "}
          <Text code>{containerWidth}px</Text>
          <br />
          <Text strong>Scroll X:</Text> <Text code>{scrollX}px</Text>
          <br />
          <Text strong>Total Columns:</Text> <Text code>{columnCount}</Text>
        </div>
        <div>
          <Text strong>Total Rows:</Text>{" "}
          <Text code>{dataSource.length.toLocaleString()}</Text>
          <br />
          <Text strong>Virtual Scrolling:</Text> <Text code>✅ Enabled</Text>
          <br />
          <Text strong>Fixed Columns:</Text> <Text code>Left: 2, Right: 1</Text>
        </div>
      </div>

      <Divider />

      <div>
        <Text strong style={{ marginBottom: "8px", display: "block" }}>
          Current Column Widths:
        </Text>
        <Space wrap size={[4, 4]}>
          {leafColumns.map((col) => (
            <span
              key={col.key}
              style={{
                padding: "2px 6px",
                backgroundColor: resizing === col.key ? "#fff3cd" : "#f0f0f0",
                border:
                  resizing === col.key
                    ? "1px solid #ffc107"
                    : "1px solid #d9d9d9",
                borderRadius: "4px",
                fontSize: "12px",
                fontFamily: "monospace",
              }}
            >
              {typeof col.title === "string" ? col.title : col.key}: {col.width}
              px
            </span>
          ))}
        </Space>
      </div>
    </Card>
  );
};

export default TableConfigInfo;
