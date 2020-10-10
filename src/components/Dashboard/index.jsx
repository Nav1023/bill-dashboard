import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MonthlyChart from "../MonthlyChart";
import BillList from "../BillList";
import "react-tabs/style/react-tabs.css";
import MinimumBills from "../MinimumBills";

function Dashboard() {
  return (
    <Tabs>
      <TabList>
        <Tab>Your Bills</Tab>
        <Tab>Monthly Bill Graph</Tab>
        <Tab>Minimum Bills </Tab>
      </TabList>

      <TabPanel>
        <BillList />
      </TabPanel>
      <TabPanel>
        <MonthlyChart />
      </TabPanel>
      <TabPanel>
        <MinimumBills />
      </TabPanel>
    </Tabs>
  );
}

export default Dashboard;
