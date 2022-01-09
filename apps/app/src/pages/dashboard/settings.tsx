import {
  Avatar,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { useSession } from "supabase";
import { Page, PageContent, PageHeader, PageSubHeader } from "ui";
import {
  SectionContainer,
  SectionContainerGroup,
} from "../../components/dashboard/settings/SectionContainer";

const Settings = () => {
  const session = useSession();

  return (
    <Page>
      <Head>
        <title>Agity Settings</title>
      </Head>
      <PageHeader
        links={[
          { title: "Overview", href: "/dashboard" },
          { title: "Activity", href: "/dashboard/activity" },
          { title: "Settings", href: "/dashboard/settings" },
        ]}
      />
      <PageContent>
        <PageSubHeader
          title="Profile & Settings"
          subTitle={"Your personal account"}
        />

        <Tabs orientation="vertical" id="settings-tabs" isLazy>
          <TabList w="30%">
            <Tab justifyContent={"flex-start"}>Profile</Tab>
            <Tab justifyContent={"flex-start"}>Account</Tab>
          </TabList>
          <TabPanels>
            <TabPanel p="2">
              <SectionContainerGroup>
                <SectionContainer
                  title="Display Name"
                  subTitle="Your display name like your full name."
                  actions={<Button onClick={() => console.log}>Save</Button>}
                >
                  <Input
                    placeholder="Your display name"
                    onChange={(event) => {}}
                  />
                </SectionContainer>
                <SectionContainer
                  title="Email Address"
                  subTitle="Please enter the email address you want to use with Agity."
                  actions={<Button onClick={() => console.log}>Save</Button>}
                >
                  <Input
                    type="email"
                    value={session?.user.email}
                    placeholder="Your email address"
                    onChange={(event) => {}}
                  />
                </SectionContainer>
                <SectionContainer
                  title="Avatar"
                  subTitle="We strongly recommend to upload an avatar image."
                  actions={<Button onClick={() => console.log}>Save</Button>}
                >
                  <Avatar />
                </SectionContainer>
              </SectionContainerGroup>
            </TabPanel>
            <TabPanel p="2">
              <SectionContainerGroup>
                <SectionContainer
                  title="Your Agity ID"
                  subTitle="We strongly recommend to upload an avatar image."
                >
                  <InputGroup size="md">
                    <Input pr="4.5rem" value={session?.user.id} readOnly />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={() => console.log}>
                        Copy
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </SectionContainer>
                <SectionContainer
                  title="Delete Account"
                  subTitle="Once you delete your account, there is no going back. Please be certain."
                  actions={
                    <Button colorScheme="red" onClick={() => console.log}>
                      Delete
                    </Button>
                  }
                />
              </SectionContainerGroup>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </PageContent>
    </Page>
  );
};

export default Settings;
