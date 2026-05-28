import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <h1>Hello from AboutPage</h1>
      <Link href={"/contact"}>Go to Contact</Link> <br />
      <Link href={"/products/prod-1"} replace={true}>
        Go to Product page
      </Link>
      <br />
      <Link
        href={{
          pathname: "/contact",
          query: { name: "test" },
        }}
      >
        Contact with query
      </Link>
    </div>
  );
};

export default AboutPage;
