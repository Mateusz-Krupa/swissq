import React, { useMemo } from "react";
import { AssetProps } from "./types";
import TableHeader from "./TableHeader";
import { sortObjectArray } from "@/services/customer.utils";
import { useSort } from "../app/hooks/clientHooks";
import { formatCurrency } from "../app/utils";

export interface AssetsTableProps {
  assets: AssetProps[];
}

const AssetsTable: React.FC<AssetsTableProps> = ({ assets }) => {

  const { sortField, sortDirection, handleSort } = useSort("assetName");

  const tableColumns = [
    { title: "Asset Name", field: "assetName" },
    { title: "Asset Type", field: "assetType" },
    { title: "Location", field: "location" },
    { title: "Quantity", field: "quantity" },
    { title: "Total Value", field: "valuePerAsset" },
    { title: "Capital Gain", field: "capitalGainPerAsset" },
    { title: "Associated Risk", field: "associatedRiskPerAsset" },
  ];
  
  const sortedRows = useMemo(
    () =>
      sortObjectArray(
        assets,
        sortField,
        sortDirection
      ) as AssetProps[],
    [assets, sortField, sortDirection]
  );

  return (
    <div>
      <table className="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {tableColumns.map((head, index) => (
              <th
                key={head.field}
                className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
              >
              <TableHeader title={head.title} field={head.field} handleSort={handleSort}></TableHeader>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((asset, index) => {
            const isLast = index === assets.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={asset.isin}>
                  <td className={classes}>
                   {asset.assetName}
                  </td>
                  <td className={classes}>
                    {asset.assetType}
                  </td>
                  <td className={classes}>
                    {asset.location}
                  </td>
                  <td className={classes}>
                    {asset.quantity}
                  </td>
                  <td className={classes}>
                    {formatCurrency(asset.quantity * asset.valuePerAsset, asset.currency)}
                  </td>
                  {/* TODO ask if this should also be quantity * capital Gain the strange thing here is that in the response 
                  numbers are once int and one string would be nice to have some consistency  */}
                  <td className={classes}>
                    {formatCurrency(asset.quantity * parseInt(asset.capitalGainPerAsset), asset.currency)}
                  </td>
                  {/* TODO ask what is Associated Risk as risk there is quite high */}
                  <td className={classes}>
                    {asset.associatedRiskPerAsset}
                  </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;
