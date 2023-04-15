import { IOrigin } from "@/utils";
import React from "react";

interface OriginProps {
  origins: IOrigin[];
  click_timestamp: string[];
  clicks: number;
}
const Report = ({ origins, click_timestamp, clicks }: OriginProps) => {
  return (
    <div className="mt-4">
      <h3 className="font-bold text-base text-gray-900 mb-2">Report</h3>
      <p className="mb-2 font-bold tracking-tight text-gray-700">
        Number of clicks: {clicks}
      </p>
      {origins.map((origin, index) => (
        <div key={index} className="text-gray-600 mb-2">
          <span className="mr-2">Origin: {origin.city},</span>
          <span>{origin.country}</span>
          <br />
          <span>Timestamp: {click_timestamp[index]}</span>
        </div>
      ))}
    </div>
  );
};

export default Report;
