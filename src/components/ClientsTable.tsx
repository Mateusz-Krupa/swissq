import React, { useMemo } from 'react';
import TableHeader from './TableHeader';
import { formatCurrency } from '../app/utils';
import { Button } from '@material-tailwind/react';
import { Client, MappedClient, Portfolio } from './types';
import { useSort } from '../app/hooks/clientHooks';
import { sortObjectArray } from '@/services/customer.utils';
import { mapClients } from '@/services/customers.mapper';

interface TableProps {
  clients: Client[];
  setActivePortfolio: (portfolio: Portfolio[]) => void;
  openDrawer: () => void;
}

const ClientsTable: React.FC<TableProps> = ({ clients, setActivePortfolio, openDrawer }) => {

  const { sortField, sortDirection, handleSort } = useSort("fullName");
  const tableColumns = [
    {
      title: "Full Name",
      field: "fullName",
    },
    {
      title: "Customer risk profile",
      field: "customerRiskProfile",
    },
    {
      title: "Customer net worth",
      field: "customerNetWorth",
    },
    {
      title: "Restriction status",
      field: "restrictionStatus",
    },
    {
      title: "Capital gain",
      field: "capitalGain",
    },
    {
      title: "Details",
      field: "details",
    },
  ];

  const tableRowsSorted = useMemo(
    () =>
      sortObjectArray(
        mapClients(clients),
        sortField,
        sortDirection
      ) as MappedClient[],
    [clients, sortField, sortDirection]
  );


  return (
    <table className="mt-4 w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          {tableColumns.map((head, index) => (
            <th
              key={head.field}
              className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
            >
              <TableHeader
                title={head.title}
                field={head.field}
                handleSort={handleSort}
              ></TableHeader>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableRowsSorted.map(
          (
            {
              portfolios,
              fullName,
              customerRiskProfile,
              customerNetWorth,
              restrictionStatus,
              capitalGain,
              id,
            },
            index
          ) => {
            const isLast = index === tableRowsSorted.length - 1;
            const classes = isLast
              ? "p-4"
              : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={fullName + index}>
                <td className={classes}>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">{fullName}</div>
                  </div>
                </td>
                <td className={classes}>
                  <div className="flex flex-col">
                    {customerRiskProfile}
                  </div>
                </td>
                <td className={classes}>
                  <div className="w-max">
                    {formatCurrency(customerNetWorth)}
                  </div>
                </td>
                <td className={classes}>{restrictionStatus}</td>
                <td className={classes}>
                  {formatCurrency((capitalGain as unknown) as number)}
                </td>
                <td className={classes}>
                  <Button
                    onClick={() => {
                      setActivePortfolio(portfolios);
                      openDrawer();
                    }}
                  >
                    Details
                  </Button>
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default ClientsTable;