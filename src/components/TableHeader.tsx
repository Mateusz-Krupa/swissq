import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";

interface ITableHeaderWithSort {
  title: string;
  field: string;
  handleSort ?: (field: string) => void;
}

const TableHeaderWithSort: React.FC<ITableHeaderWithSort> = ({title, field, handleSort}) => (
  <Typography
    variant="small"
    color="blue-gray"
    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
  >
    {title}
    {handleSort && <ChevronUpDownIcon
      strokeWidth={2}
      className="h-4 w-4"
      onClick={() => handleSort(field)}
    />}
  </Typography>
);

export default TableHeaderWithSort;
