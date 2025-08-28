//- app/manages/recipes/page.tsx

'use client';

import { DataTable } from "@/components/table/table";
// import { userMockup } from "@/libs/data";
import { columns } from "./column";
// import { recipeMockup } from "./data";
import { ApiClient, ApiLimit } from "@/libs/api";
// import { RecipesResponse } from "@/types/recipes";
import { useQuery } from "@tanstack/react-query";
import { RecipeResponse } from "./type";
// import { QueryStrings } from "@/libs/query";

// const PageCurrent = (): number => {
//   const { page } = QueryStrings();
//   return page;
// };

const currPage = 2;
const skip = (currPage - 1) * ApiLimit;

const ApiRecipes = async (): Promise<RecipeResponse> => {
  const { data } = await ApiClient.get('/recipes', {
    params: {
      select: 'name,difficulty,cuisine,mealType,ingredients',
      limit: ApiLimit,
      skip: skip,
    }
  });
  return data;
}

const ManageRecipesPage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['manages', 'recipes'],
    queryFn: ApiRecipes,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Manage Recipes</h1>
      <DataTable
        columns={columns}
        data={data?.recipes || []}
        perPage={ApiLimit}
        currPage={currPage}
        totalRows={data?.total || 0}
      />
    </>
  );
};

export default ManageRecipesPage;
