import {
  Drawer,
  Button,
  Space,
  Typography,
  Divider,
  Card,
  Slider,
  InputNumber,
} from "antd";
import { ReloadOutlined, ColumnWidthOutlined } from "@ant-design/icons";
const { Text } = Typography;
import { getLeafColumns } from "./utils";

const ColumnSettingsDrawer = ({
  drawerOpen,
  setDrawerOpen,
  resetAllWidths,
  columns,
  resizing,
  handleColumnWidthChange,
  autoFitColumn,
}) => {
  const leafColumns = getLeafColumns(columns);
  return (
    <Drawer
      title="Column Width Settings"
      placement="right"
      onClose={() => setDrawerOpen(false)}
      open={drawerOpen}
      width={400}
      extra={
        <Button onClick={resetAllWidths} icon={<ReloadOutlined />}>
          Reset All
        </Button>
      }
    >
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <Text type="secondary">
          Adjust individual column widths using the controls below, or drag
          column borders directly in the table.
        </Text>

        <Divider />

        {leafColumns.map((col) => (
          <Card
            key={col.key}
            size="small"
            style={{
              backgroundColor: resizing === col.key ? "#e6f7ff" : "#fafafa",
            }}
          >
            <Space direction="vertical" size="small" style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text strong>
                  {typeof col.title === "string" ? col.title : col.key}
                </Text>
                <Text code>{col.width}px</Text>
              </div>

              <Slider
                min={50}
                max={500}
                value={col.width}
                onChange={(value) => handleColumnWidthChange(col.key, value)}
                tooltip={{ formatter: (value) => `${value}px` }}
              />

              <Space>
                <InputNumber
                  size="small"
                  min={50}
                  max={800}
                  value={col.width}
                  onChange={(value) => handleColumnWidthChange(col.key, value)}
                  addonAfter="px"
                  style={{ width: 120 }}
                />
                <Button
                  size="small"
                  onClick={() => autoFitColumn(col.key)}
                  icon={<ColumnWidthOutlined />}
                >
                  Auto Fit
                </Button>
              </Space>
            </Space>
          </Card>
        ))}
      </Space>
    </Drawer>
  );
};

export default ColumnSettingsDrawer;
