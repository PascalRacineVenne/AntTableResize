import { Tooltip } from "antd";
import ResizeHandle from "./ResizeHandle";

const enhancedColumns = (
  columns,
  resizing,
  handleResizeMouseDown,
  wrapHeaders
) => {
  return columns.map((col) => {
    if (col.children) {
      return {
        ...col,
        children: enhancedColumns(
          col.children,
          resizing,
          handleResizeMouseDown,
          wrapHeaders
        ),
      };
    }

    return {
      ...col,
      title: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            userSelect: "none",
            width: "100%",
            height: "32px",
          }}
        >
          <Tooltip
            title={typeof col.title === "string" ? col.title : undefined}
          >
            <span
              style={
                wrapHeaders
                  ? {
                      whiteSpace: "normal",
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                      paddingRight: col.resizable ? "12px" : "0",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: resizing === col.key ? "#1890ff" : "inherit",
                    }
                  : {
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      paddingRight: col.resizable ? "12px" : "0",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: resizing === col.key ? "#1890ff" : "inherit",
                    }
              }
            >
              {typeof col.title === "string" ? col.title : col.title}
            </span>
          </Tooltip>
          {col.resizable && (
            <ResizeHandle
              onMouseDown={(e, offset) =>
                handleResizeMouseDown(e, col.key, col.width, offset)
              }
              active={resizing === col.key}
            />
          )}
        </div>
      ),
    };
  });
};

export default enhancedColumns;
