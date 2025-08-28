//- app/manages/recipes/page.tsx

'use client';

import { DataTable } from "@/components/table/table";
import { columns } from "./column";
import { ApiClient } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";
import { RecipeResponse } from "./type";
import React from "react";

const ApiRecipes = async (
  page: number,
  limit: number,
  globalFilter: string
): Promise<RecipeResponse> => {
  const skip = (page - 1) * limit;
  const { data } = await ApiClient.get('/recipes/search', {
    params: {
      q: globalFilter,
      select: 'name,difficulty,cuisine,mealType,ingredients,image',
      limit: limit,
      skip: skip,
      // delay: 3000,
    }
  });
  return data;
}

const ManageRecipesPage = () => {
  const [page, setPage] = React.useState(1);
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [debouncedFilter, setDebouncedFilter] = React.useState(globalFilter);
  const perPage = 6;
  
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFilter(globalFilter);
    }, 1000);
    return () => clearTimeout(handler);
  }, [globalFilter]);
  
  const { data, isLoading } = useQuery({
    queryKey: ['manages', 'recipes', page, debouncedFilter],
    queryFn: () => ApiRecipes(page, perPage, debouncedFilter),
    // enabled: true,
  });

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Manage Recipes</h1>
      <DataTable
        columns={columns}
        data={data?.recipes || []}
        pageSize={perPage}
        totalRows={data?.total || 0}
        page={page}
        setPage={setPage}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        loading={isLoading}
        searchPlaceholder="Search by name"
      />
    </>
  );
};

export default ManageRecipesPage;
