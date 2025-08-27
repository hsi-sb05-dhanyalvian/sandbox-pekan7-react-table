//- app/page.tsx

import { columns } from "@/components/column";
import { DataTable } from "@/components/data-table";
import { userMockup } from "@/libs/data";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Manage Recipes</h1>
      <DataTable
        columns={columns}
        data={userMockup?.map((a) => ({ ...a, name: `${a.name}|${a.username}` }))}
        pageSize={12}
      />
    </>
  );
}
