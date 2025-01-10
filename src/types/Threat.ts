// src/types/Threat.ts
export interface Threat {
    id: string;
    source: { lat: number; lng: number; country: string };
    target: { lat: number; lng: number; country: string };
    type: string; // Example: Ransomware, Phishing, etc.
    timestamp: string;
  }
  