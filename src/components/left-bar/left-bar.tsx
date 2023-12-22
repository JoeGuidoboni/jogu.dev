export default function LeftBar() {
  return (
    <div className="flex font-medium text-4xl tracking-tighter text-right p-4 justify-end">
      <div className="max-w-fit">
        <div className="border-amber-400 border-r-2 border-b-2 p-2">
          hey,
          <br></br>
          i&apos;m jogu
        </div>

        <div className="flex justify-end py-4">
          <img
            src="/img/me.jpg"
            alt="there's supposed to be a picture of me here"
            className="object-cover rounded-lg max-w-full h-auto md:max-w-xs"
          />
        </div>
      </div>
    </div>
  );
}
