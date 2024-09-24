import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="flex-flex-wrap">
    <div className="w-3/5">
        <h1 className="mt-24 text-6xl font-sans md:Apple Color Emoji">Hi, </h1>
        <h1 className=" text-6xl font-sans md:Apple Color Emoji text-blue-600/100 " > I am Ahmad Zaki </h1>
        <h1 className=" text-6xl font-sans md:Apple Color Emoji" >Data Analyst</h1>
     </div>
        <div className="w-2/5">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/profil.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
            </div>
     
        <div>
          <button className=" mt-20 rounded-lg bg-blue-500 w-48 min-h-12 text-white" >Get Started</button>
        </div>
      </div>
    </>
  );
}
