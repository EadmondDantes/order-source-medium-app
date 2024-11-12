import React from 'react';
import { Menu } from 'lucide-react';
import { AppProvider as PolarisProvider, Page, Layout } from '@shopify/polaris';
import { Provider as AppBridgeProvider } from '@shopify/app-bridge-react';
import enTranslations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/build/esm/styles.css';
import { MainCard } from './components/MainCard';
import { Stats } from './components/Stats';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  // For development, we'll use a mock host
  const host = new URL(location.href).searchParams.get("host") || 
    (import.meta.env.DEV ? btoa("admin.shopify.com/store/my-store") : '');

  const config = {
    apiKey: import.meta.env.VITE_SHOPIFY_API_KEY || 'dummy-key-for-dev',
    host: host,
    forceRedirect: !import.meta.env.DEV // Only force redirect in production
  };

  return (
    <ErrorBoundary>
      <AppBridgeProvider config={config}>
        <PolarisProvider i18n={enTranslations}>
          <Page
            title="UTM Tag Tracker"
            primaryAction={{
              content: 'Settings',
              icon: Menu,
            }}
          >
            <Layout>
              <Layout.Section>
                <MainCard />
              </Layout.Section>

              <Layout.Section secondary>
                <Stats />
              </Layout.Section>
            </Layout>
          </Page>
        </PolarisProvider>
      </AppBridgeProvider>
    </ErrorBoundary>
  );
}

export default App;