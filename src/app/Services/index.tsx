export function Services({id}:{id: string}) {
    return (
        <div id={id} className='w-full'>
          <div className="flex justify-center">
            <h2 className='flex text-3xl text-center font-light text-[#E79C88]'>Nossos serviços</h2>
          </div>
          <div className="flex gap-10 w-full flex-col md:flex-row flex-wrap justify-center m-auto mt-10">
            <div className="rounded-[50px] flex text-white text-xl justify-center items-center bg-slate-100  md:w-[30%] h-[290px] bg-[url('/images/eyebrow.png')] "><h3>Design Sobrancelhas</h3></div>
            <div className="rounded-[50px] flex text-white text-xl justify-center items-center bg-slate-100 md:w-[30%] h-[290px] bg-[url('/images/spa.png')]"><h3>Spá</h3></div>
            <div className="rounded-[50px] flex text-white text-xl justify-center items-center bg-slate-100 md:w-[30%] h-[290px] bg-[url('/images/piercing.png')]"><h3>Piercing</h3></div>

            <div className="rounded-[50px] flex text-white text-xl justify-center items-center bg-slate-100 md:w-[30%] h-[290px] bg-[url('/images/eyelash.png')]"><h3>Tatuagens</h3></div>
            <div className="rounded-[50px] flex text-white text-xl justify-center items-center bg-slate-100 md:w-[30%] h-[290px] bg-[url('/images/manicure.png')]"><h3>Manicure</h3></div>
            <div className="rounded-[50px] flex text-white text-xl justify-center items-center bg-slate-100 md:w-[30%] h-[290px] bg-[url('/images/hair.png')]"><h3>Cabelo</h3></div>
          </div>
        </div>
    )
}
