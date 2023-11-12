"use client";
import ClientList from "@/components/ClientList";
import { getCustomers } from "@/services/customers.service";
import { ThemeProvider } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await getCustomers();
        console.log(response);
        setCustomers(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCustomers();
  }, []);

  return (
    <ThemeProvider>
      <main>
        <ClientList clients={customers} />
      </main>
    </ThemeProvider>
  );
}
