import Image from "next/image";

import image1 from "../../../img/1.jpg";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

const Detail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>{id} Detail</div>
      <Image src={image1} alt="" width={200} />
    </div>
  );
};

export default Detail;
