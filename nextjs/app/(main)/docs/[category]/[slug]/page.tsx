import React from "react";

const DynamicSlugPage = async ({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) => {
  const { category, slug } = await params;
  return (
    <div>
      Hello from DynamicSlugPage
      <p>this is category: {category}</p>
      <p>this is slug: {slug}</p>
    </div>
  );
};

export default DynamicSlugPage;
