import Image from "next/image";

export function OfficeBeauty() {
    return (
      <>
        <div className="w-full h-[50vh] sm:h-[95vh] flex flex-col-reverse rounded-b-[200px] sm:rounded-b-[88px] top-0 sm:flex-row sm:justify-between bg-[url('/images/m-capa.png')] sm:bg-[url('/images/capa-1200.png')] sm:bg-cover bg-no-repeat">
        <div className="hidden sm:block m-auto">
            <h1 className='left-0 flex text-5xl text-left font-light sm:w-[50%] text-[#fff]'>Office Beauty: A essência do cuidado feminino, refletindo sua beleza única.</h1>
          </div>
        </div>
          <div className="sm:hidden m-auto">
            <h1 className='flex text-xl text-center font-light p-8 text-[#404040]'>Office Beauty: A essência do cuidado feminino, refletindo sua beleza única.</h1>
          </div>
      </>
    )
}
