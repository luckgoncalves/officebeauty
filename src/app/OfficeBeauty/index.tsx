import Image from "next/image";

export function OfficeBeauty() {
    return (
      <>
        <div className="w-full h-[50vh] sm:h-[95vh] flex flex-col-reverse rounded-b-[200px] sm:rounded-b-[88px] top-0 sm:flex-row sm:justify-between bg-[url('/images/m-capa.png')] sm:bg-[url('/images/capa-1200.png')] sm:bg-cover bg-no-repeat">
        <div className="hidden sm:block my-auto ml-40">
            <h1 className='left-0 flex text-5xl text-left font-bold sm:w-[50%] text-[#fff]'>Office Beauty</h1>
            <p className='left-0 flex text-3xl text-left font-light sm:w-[60%] text-[#fff] mt-6'>A essência do cuidado feminino, refletindo sua beleza única.</p>
          </div>
        </div>
          <div className="sm:hidden m-auto">
            <h1 className='text-xl text-center font-bold px-8 pt-8 text-[#404040]'>Office Beauty</h1>
            <p className='flex text-xl text-center font-light px-8 text-[#404040]'>A essência do cuidado feminino, refletindo sua beleza única.</p>
          </div>
      </>
    )
}
