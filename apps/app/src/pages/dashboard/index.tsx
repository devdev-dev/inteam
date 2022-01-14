import React from "react";
import { PageSubHeader } from "ui";
import { TeamManager } from "../../components/dashboard/TeamManager";
import { CreateTeamModal } from "../../components/dashboard/CreateTeamModal";
import { AgityAppLayout } from "../../components/dashboard/AgityAppLayout";
import {
  AgityAppServerSideProps,
  initAppDashboardProps,
} from "../../components/dashboard/initAppDashboardProps";

const Dashboard = (props: AgityAppServerSideProps) => {
  return (
    <AgityAppLayout {...props} title={"Agity Dashboard"}>
      <PageSubHeader
        title="Your Teams"
        subTitle={"The Teams you have access to"}
        actions={<CreateTeamModal />}
      />
      <TeamManager />
    </AgityAppLayout>
  );
};

export const getServerSideProps = initAppDashboardProps;

export default Dashboard;
