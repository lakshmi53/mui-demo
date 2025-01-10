import React from 'react';
import { Threat } from '../types/Threat';

interface ThreatDetailsProps {
  threats: Threat[];
}

const ThreatDetails: React.FC<ThreatDetailsProps> = ({ threats }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Real-Time Threat Details</h2>
      <ul className="space-y-4">
        {threats.map((threat) => (
          <li
            key={threat.id}
            className="p-4 bg-gray-700 rounded shadow-md border border-gray-600"
          >
            <p><strong>Type:</strong> {threat.type}</p>
            <p><strong>Source:</strong> {threat.source.country}</p>
            <p><strong>Target:</strong> {threat.target.country}</p>
            <p><strong>Time:</strong> {new Date(threat.timestamp).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreatDetails;
