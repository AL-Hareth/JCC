"use client";
import { Mosaic } from "react-loading-indicators";

export default function Loading() {
  return (
    <div className="flex items-center justify-center flex-1">
      <Mosaic color="#CA8A04" size="medium" />
    </div>
  );
}
