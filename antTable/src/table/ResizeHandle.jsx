import React, { useRef } from "react";
import { DragOutlined } from "@ant-design/icons";

/**
 * Props:
 * - onMouseDown: function (event) => void
 * - active: boolean (is this handle currently resizing)
 */
const ResizeHandle = ({ onMouseDown, active }) => {
  const handleRef = useRef(null);

  const handleMouseDown = (e) => {
    if (handleRef.current) {
      const rect = handleRef.current.getBoundingClientRect();
      const offset = rect.right - e.clientX;
      onMouseDown(e, offset);
    }
  };
  return (
    <div
      ref={handleRef}
      style={{
        position: "absolute",
        right: -4,
        top: "50%",
        transform: "translateY(-50%)",
        width: 8,
        height: 20,
        cursor: "col-resize",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: active ? 1 : 0.7,
        transition: "opacity 0.2s, background-color 0.2s",
        backgroundColor: active ? "#1890ff" : "transparent",
        borderRadius: "2px",
        zIndex: 100,
      }}
      onMouseDown={handleMouseDown}
      onMouseEnter={(e) => {
        e.target.style.opacity = 1;
        e.target.style.backgroundColor = "#e6f7ff";
      }}
      onMouseLeave={(e) => {
        e.target.style.opacity = active ? 1 : 0.7;
        e.target.style.backgroundColor = active ? "#1890ff" : "transparent";
      }}
    >
      <DragOutlined
        style={{
          fontSize: "10px",
          color: active ? "#fff" : "#999",
          transform: "rotate(90deg)",
        }}
      />
    </div>
  );
};
export default ResizeHandle;
