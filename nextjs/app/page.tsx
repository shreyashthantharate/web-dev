import { Button } from "@/components/button";
import Image from "next/image";

export default async function Home() {
  const res = await fetch(
    "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10",
  );
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <h1>Hello world!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, minus eum
        illo odio illum cumque fugiat. Deleniti, dicta? Debitis perspiciatis
        tempora autem molestias. Aperiam dignissimos dicta nam neque sunt
        corrupti quidem ea! Explicabo porro magni maiores in minus, ad
        voluptatem voluptate asperiores placeat, cum facilis eveniet doloremque?
        Hic, nemo. Laboriosam?
      </p>
      <Button />
    </div>
  );
}
