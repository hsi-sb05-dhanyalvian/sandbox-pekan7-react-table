//- app/manages/recipes/page.tsx

import { DataTable } from "@/components/table/table";
// import { userMockup } from "@/libs/data";
import { columns } from "./column";
import { recipeMockup } from "./data";

const ManageRecipesPage = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Manage Recipes</h1>
      <DataTable
        columns={columns}
        data={recipeMockup}
        pageSize={10}
      />
    </>
  );
};

export default ManageRecipesPage;
