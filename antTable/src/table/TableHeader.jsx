import { Card, Button, Space, Typography } from "antd";
import { ReloadOutlined, SettingOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

/**
 * Props:
 * - onResetWidths: function to reset all column widths
 * - onOpenSettings: function to open the column settings drawer
 */
const TableHeader = ({ onResetWidths, onOpenSettings }) => (
  <Card>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div>
        <Title level={2} style={{ margin: 0, marginBottom: "8px" }}>
          Real Ant Design Virtual Table with Resizable Columns
        </Title>
        <Text type="secondary" style={{ fontSize: "16px" }}>
          Drag column borders to resize • Virtual scrolling with 2,000 rows • Real Ant Design Table component
        </Text>
      </div>

      <Space>
        <Button
          icon={<ReloadOutlined />}
          onClick={onResetWidths}
          type="default"
        >
          Reset Widths
        </Button>
        <Button
          type="primary"
          icon={<SettingOutlined />}
          onClick={onOpenSettings}
        >
          Column Settings
        </Button>
      </Space>
    </div>
  </Card>
);

export default TableHeader;