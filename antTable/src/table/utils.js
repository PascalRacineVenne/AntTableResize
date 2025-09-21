export const getLeafColumns = (columns) => {
  let result = [];
  if (Array.isArray(columns)) {
    columns.forEach((col) => {
      if (col.children && Array.isArray(col.children)) {
        result = result.concat(getLeafColumns(col.children));
      } else {
        result.push(col);
      }
    });
  }
  return result;
};

export function isGroupColumn(col) {
  return Array.isArray(col.children) && col.children.length > 0;
}
