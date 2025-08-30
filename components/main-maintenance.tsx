//- components/main-soon.tsx

import { Construction } from "lucide-react";

interface PageMaintenanceProps {
  title: string;
}

const PageMaintenance = ({ title }: PageMaintenanceProps) => {
  return (
    <>
      <div className="min-h-12 text-3xl font-semibold mb-4">{title}</div>
      <div className="flex flex-1 items-center justify-center space-y-4 mt-12">
        <div className="flex h-150 items-center justify-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold">
              <Construction size={26} className="text-gray-500" />
            </h1>
            <div className="h-8 border-l border-gray-400"></div>
            <p className="text-gray-600">This page is under construction.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageMaintenance;
