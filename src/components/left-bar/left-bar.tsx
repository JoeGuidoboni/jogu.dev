import Image from "next/image";

export default function LeftBar() {
  return (
    <div className="flex-1 font-medium text-4xl tracking-tighter text-right p-4">
      <div className="border-amber-400 border-r-2 border-b-2 p-2">
        hey,
        <br></br>
        i&apos;m jogu
      </div>

      <div className="flex justify-end py-4">
        <Image
          src="/img/me.jpg"
          width={300}
          height={300}
          alt="there's supposed to be a picture of me here"
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
