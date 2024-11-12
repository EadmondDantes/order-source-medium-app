import React from 'react';

export function ExampleTags() {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="font-semibold mb-2">Example Tags</h3>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
          utm_source:facebook
        </span>
        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
          utm_medium:social
        </span>
        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
          utm_source:google
        </span>
        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
          utm_medium:cpc
        </span>
      </div>
    </div>
  );
}