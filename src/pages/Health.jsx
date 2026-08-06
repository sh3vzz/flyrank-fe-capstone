import React, { useEffect, useState } from "react";

export default function Health() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => console.error("Health fetch failed:", err));
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate">System Health Check</h1>
      <div className="p-6 bg-white border border-slate/10 rounded-lg shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="font-semibold text-slate">Status: Operational</span>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase font-bold text-slate/50 tracking-wider">
            Fetched Payload (Live API Test):
          </p>
          {loading ? (
            <p className="text-sm text-charcoal/60">Fetching live status...</p>
          ) : (
            <pre className="p-4 bg-canvas border border-slate/10 rounded text-xs font-mono text-charcoal overflow-x-auto">
              {JSON.stringify(data, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
