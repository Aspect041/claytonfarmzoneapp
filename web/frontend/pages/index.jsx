import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="Clayton Farm Delivery App" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Heading>Ames Farm</Heading>
                  <p>
                    The Ames farm is currently active you have a total 45 deliveries today.
                  </p>
                  <p>
                    Click below to export delivery data for today
                  </p>
                  <button class="Polaris-Button Polaris-Button--primary" type="button">
                  <span class="Polaris-Button__Content">
                  <span class="Polaris-Button__Text">Export Deliveries</span>
                  </span>
                  </button>
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={trophyImage}
                    alt="Farm"
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Heading>Minneapolis Farm</Heading>
                  <p>
                    The Minneapolis farm is currently active you have a total 132 deliveries today.
                  </p>
                  <p>
                    Click below to export delivery data for today
                  </p>
                  <button class="Polaris-Button Polaris-Button--primary" type="button">
                  <span class="Polaris-Button__Content">
                  <span class="Polaris-Button__Text">Export Deliveries</span>
                  </span>
                  </button>
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={trophyImage}
                    alt="Farm"
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Heading>Chicago Farm</Heading>
                  <p>
                    The Chicago farm is currently active you have a total 406 deliveries today.
                  </p>
                  <p>
                    Click below to export delivery data for today
                  </p>
                  <button class="Polaris-Button Polaris-Button--primary" type="button">
                  <span class="Polaris-Button__Content">
                  <span class="Polaris-Button__Text">Export Deliveries</span>
                  </span>
                  </button>
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={trophyImage}
                    alt="Farm"
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}