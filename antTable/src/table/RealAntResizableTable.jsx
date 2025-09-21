import { Table, Card } from "antd";

/**
 * Props:
 * - columns: array of column definitions (already enhanced with resize handles)
 * - dataSource: array of data for the table
 * - scrollX: number, horizontal scroll value
 * - resizing: key of the column currently being resized (for cursor style)
 * - tableContainerRef: ref to the table container div
 */
const RealAntResizableTable = ({
  columns,
  dataSource,
  scrollX,
  resizing,
  tableContainerRef,
}) => {
  return (
    <Card styles={{ padding: 0 }}>
      <div ref={tableContainerRef}>
        <Table
          columns={columns}
          dataSource={dataSource}
          scroll={{
            x: scrollX,
            y: 10 * 55, // Your specified height
          }}
          virtual
          // pagination={{
          //   pageSize: 50,
          //   showSizeChanger: true,
          //   showQuickJumper: true,
          //   showTotal: (total, range) =>
          //     `${range[0]}-${range[1]} of ${total} items`,
          // }}
          size="small"
          bordered
          sticky
          style={{
            cursor: resizing ? "col-resize" : "default",
          }}
          rowKey="key"
        />
      </div>
    </Card>
  );
};

export default RealAntResizableTable;