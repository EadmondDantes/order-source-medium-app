import React from 'react';
import { Card } from '@shopify/polaris';

export function Stats() {
  return (
    <Card>
      <div className="p-6">
        <h3 className="font-semibold mb-4">Quick Stats</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Orders Tagged Today</span>
            <span className="font-semibold">24</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Top Source</span>
            <span className="font-semibold">Google</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Top Medium</span>
            <span className="font-semibold">CPC</span>
          </div>
        </div>
      </div>
    </Card>
  );
}