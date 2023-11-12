import { useState } from "react";

const useSort = (initialField = "", initialDirection = "asc") => {
  const [sortField, setSortField] = useState(initialField);
  const [sortDirection, setSortDirection] = useState(initialDirection);

  const handleSort = (field: any) => {
    setSortField(field);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return { sortField, sortDirection, handleSort };
};


const useDrawer = (initialState = false) => {
  const [open, setOpen] = useState(initialState);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return { open, openDrawer, closeDrawer };
};

export { useSort, useDrawer };