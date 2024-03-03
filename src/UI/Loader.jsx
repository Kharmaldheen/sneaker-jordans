function Loader() {
  return (
    <div className="absolute md:top-[60px] top-[55px] left-0 w-full h-full z-10 overflow-hidden backdrop-blur-sm bg-red-500/20">
      <div className="block relative left-1/2 md:left-[45%] top-[40%] md:top-[30%] md:w-[300px] md:h-[300px] md:mt-[-75px] h-[150px] w-[150px] mt-[-40px] mr-0 mb-0 ml-[-75px] rounded-full border-solid border-transparent border-t-red-500 animate-spin-faster z-[11] before:content-[''] before:absolute before:inset-[5px] before:rounded-full before:border-[3px] before:border-solid before:border-transparent before:border-t-amber-500 before:animate-spin-reverse after:content-[''] after:absolute after:inset-[15px] after:rounded-full after:border-[3px] after:border-solid after:border-transparent after:border-t-yellow-400 after:animate-spin   ">
        <img src="/JordanLogo.png" alt="" />
      </div>
    </div>
  );
}

export { Loader };
