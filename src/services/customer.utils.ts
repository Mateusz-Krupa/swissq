export function sortObjectArray(
  objectArrayToSort: any[],
  sortField: string,
  sortDirection: string
) {
  return [...objectArrayToSort].sort((a, b) => {
    if (a[sortField] < b[sortField]) {
      return sortDirection === "asc" ? -1 : 1;
    }
    if (a[sortField] > b[sortField]) {
      return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });
}
