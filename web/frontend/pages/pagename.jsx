import { Card, Page, Layout, TextContainer, Heading } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function PageName() {
  return (
    <Page>
      <TitleBar title="Statistics" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Heading>Total Number of Deliveries Today</Heading>
            <TextContainer>
              <p>583</p>
            </TextContainer>
          </Card>
          <Card sectioned>
            <Heading>Ames Farm Deliveries Today</Heading>
            <TextContainer>
              <p>45</p>
            </TextContainer>
          </Card>
          <Card sectioned>
            <Heading>Minneapolis Farm Deliveries Today</Heading>
            <TextContainer>
              <p>132</p>
            </TextContainer>
          </Card>
          <Card sectioned>
            <Heading>Chicago Farm Deliveries Today</Heading>
            <TextContainer>
              <p>406</p>
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
