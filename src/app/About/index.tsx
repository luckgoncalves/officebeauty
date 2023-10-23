export function About({id}:{id: string}) {
  return (
    <section id={id} className="flex w-full flex-col items-start justify-center bg-slate-100 rounded-[50px] bg-cover sm:mt-20 bg-[url('/images/image-about.png')] bg-no-repeat bg-bottom bg-fixed">
      <div className=" sm:w-[60%] flex flex-col items-start p-8 sm:ml-20 gap-4 ">
        <h2 className="text-4xl" >Sobre nós</h2>
        <p className="text-lg text-start text-white font-light sm:w-[50%]">Somos a Office Beauty, um Estúdio de Beleza e Tatuagem localizado no bairro Capão Raso em Curitiba, mais especificamente, no Edifício H. A. Offices Linha Verde. Um local de fácil acesso, onde temos um espaço preparado para recebê-la!</p>

        <p className="text-lg text-start text-white font-light sm:w-[50%]">Aqui, oferecemos uma ampla variedade de serviços, incluindo manicure, pedicure, design de sobrancelhas, henna, mechas, tintura, escova, lavagem e hidratação de cabelos, aplicação de piercings, tatuagens e spa.</p>

        <p className="text-lg text-start text-white font-light sm:w-[50%]">Temos como prioridade a excelência no que fazemos e no tratamento com nossos clientes, proporcionando um ambiente leve e acolhedor que eleva a autoestima e realça a sua beleza em cada detalhe.</p>
      </div>
    </section>
  )
}
