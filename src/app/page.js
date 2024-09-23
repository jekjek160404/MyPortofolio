export default function Home() {
  return (
    <>
      <div className="flex mt-16">
                <div className="md:w-3/4 px-4 ">
                    <div className="  rounded-xl">
                    <h1 className="mt-24 text-6xl font-sans md:Apple Color Emoji">Hi, </h1>
        <h1 className=" text-6xl font-sans md:Apple Color Emoji text-blue-600/100 " > I'am Ahmad Zaki </h1>
        <h1 className=" text-6xl font-sans md:Apple Color Emoji" >Data Analyst</h1>
      <div>
        <br></br>
      <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">MULAI</button>
      </div>
                        
                    </div>
                </div>
                <div className="md:w-1/2 border">
                <img class="h-auto max-w-lg rounded-lg" src="/profil.png" alt="image description">
                </img>
                </div>
            </div>
    </>
  );
}

