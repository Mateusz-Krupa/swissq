import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import ClientDetailsDrawer from "./AssetsDrawer";
import { useDrawer } from "../app/hooks/clientHooks";
import { ClientListProps, Portfolio } from "./types";
import ClientsTable from "./ClientsTable";

const ClientList: React.FC<ClientListProps> = ({ clients }) => {
  const { open, openDrawer, closeDrawer } = useDrawer();
  const [activePortfolio, setActivePortfolio] = useState<Portfolio[]>([]);

  return (
    <>
      <div className="flex items-center justify-center">
        <Card className="h-full w-3/4 flex">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Clients
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  This is a list of all your customers and their portfolios.
                </Typography>
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll px-0">
            <ClientsTable
              clients={clients}
              setActivePortfolio={setActivePortfolio}
              openDrawer={openDrawer}
            ></ClientsTable>
          </CardBody>
        </Card>
      </div>
      <ClientDetailsDrawer
        portfolios={activePortfolio}
        open={open}
        close={closeDrawer}
      />
    </>
  );
};

export default ClientList;
