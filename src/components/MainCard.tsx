import React from 'react';
import { Card, Banner } from '@shopify/polaris';
import { Tag } from 'lucide-react';
import { HowItWorks } from './HowItWorks';
import { ExampleTags } from './ExampleTags';

export function MainCard() {
  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Tag className="w-8 h-8 text-indigo-600" />
          <h2 className="text-2xl font-bold">UTM Tag Tracker</h2>
        </div>
        
        <Banner
          title="Automatic UTM Tracking Active"
          status="success"
        >
          <p>
            Your store is now tracking UTM parameters from incoming traffic
            and adding them as tags to new orders.
          </p>
        </Banner>

        <div className="mt-6 space-y-4">
          <HowItWorks />
          <ExampleTags />
        </div>
      </div>
    </Card>
  );
}