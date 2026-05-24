import React from "react";

// @ts-ignore
const DynamicDocumentsPage = async ({ params }) => {
  const { slug } = await params;
  console.log("slug is", slug?.join("/"));
  return (
    <div>
      this is DynamicDocumentsPage {slug?.join("/")}
      <p>slug is: {slug?.join("/")}</p>
    </div>
  );
};

export default DynamicDocumentsPage;
