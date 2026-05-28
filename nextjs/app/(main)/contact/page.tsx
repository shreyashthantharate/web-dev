import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div>
      <Image
        src="/under-construction.svg"
        width={500}
        height={500}
        alt="Picture of Page Under Construction"
      />
      <h1>Contact page will be available soon.</h1>
      <Link href={"/"} replace={false}>
        Go back to Home Page
      </Link>

      <Image
        src={"https://avatars.githubusercontent.com/u/156114974?v=4"}
        width={500}
        height={500}
        alt="Picturefrom third part resource"
      />
    </div>
  );
};

export default ContactPage;
