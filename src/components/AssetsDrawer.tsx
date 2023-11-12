import React, { Fragment } from "react";
import { Drawer } from "@material-tailwind/react";
import AssetsTable from "./AssetsTable";
import { Portfolio } from "./types";

interface IClientDetailsDrawerProps {
  portfolios: Portfolio[];
  close: () => void;
  open: boolean;
}

const AssetsDrawer: React.FC<IClientDetailsDrawerProps> = ({
  portfolios,
  close,
  open,
}) => {
  // this is a hack to fix the bug in the library - and it is a little to late to change it now
  if (!open) return null;
  return (
    <>
      <Drawer
        //Ignoring next line
        //This is a bug in the library - it allows you yo put only number but strings also works
        // i this case it will be more mobile friendly as user will be able to scroll down and close
        // the drawer by clicking on the background
        //@ts-ignore-next-line
        size={"50vh"}
        open={open}
        onClose={close}
        className="p-4 w-full bg-white overflow-y-scroll"
        placement="bottom"
      >
        {portfolios.map((portfolio) => {
          return (
            <div key={portfolio.portfolioId} >
              <h3 className="text-md font-semibold pt-4 px-4">
                Portfolio name: {portfolio.portfolioName}
              </h3>
              <AssetsTable
                assets={portfolio.assets}
                key={portfolio.portfolioId}
              />
            </div>
          );
        })}
      </Drawer>
    </>
  );
};

export default AssetsDrawer;
