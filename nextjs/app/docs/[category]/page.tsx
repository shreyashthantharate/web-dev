import React from "react";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  return (
    <div>
      Hello from CategoryPage
      <p>Dynamic cateogry is: {category}</p>
    </div>
  );
};

export default CategoryPage;
