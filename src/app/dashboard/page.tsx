import React, { Suspense } from "react";
import { delay, simulateDelay } from "../../../utils/utils";
import DashboardComponent from "@/components/dashboard/dashboard";

const Dashboard = async () => {
  const data = await simulateDelay("hello", 1000);
  return (
    <div>
      Dashboard Page - {data}
      <h2>Other Pages</h2>
      <Suspense fallback={<h2>Loading Components ...</h2>}>
        <DashboardComponent de={3000} da={"dashboard"} />
      </Suspense>
      <Suspense fallback={<h2>Loading Components ...</h2>}>
        <DashboardComponent de={5000} da={"page"} />
      </Suspense>
      <Suspense fallback={<h2>Loading Components ...</h2>}>
        <DashboardComponent de={1000} da={"italy"} />
      </Suspense>
      <Suspense fallback={<h2>Loading Components ...</h2>}>
        <DashboardComponent de={4000} da={"german"} />
      </Suspense>
    </div>
  );
};

export default Dashboard;
