import React from 'react';

export function HowItWorks() {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-semibold mb-2">How it works</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>Automatically captures UTM parameters from customer visits</li>
        <li>Stores source/medium information in customer session</li>
        <li>Adds UTM data as tags when orders are created</li>
        <li>Format: utm_source:google, utm_medium:cpc</li>
      </ul>
    </div>
  );
}