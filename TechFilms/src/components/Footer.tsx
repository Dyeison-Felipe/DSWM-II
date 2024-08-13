import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";


export default function Footer() {

  const data = new Date()
  const year = data.getFullYear();

  return (
    /*DOCUMENTAÇÃO */
    /*Utilizei a tag do rodapé (footer) para englobar minha logo, o copyright e as redes sociais que estão utilizando a biblioteca react-icons, todas com estilização em tailwind */
    <footer className="bg-black text-white h-full min-h-32 border-t flex justify-around items-center max-[600px]:flex-col">
      <div className="flex justify-center items-center">
        <MdLocalMovies className=" text-6xl" />
        <p className="text-yellow-300 font-bold text-4xl">TechFilm</p>
      </div>
      <div>
        <p className="text-xl font-bold uppercase">₢copyright {year}</p>
        
      </div>
      <div className="flex justify-center items-center gap-4 text-3xl">
        <FaSquareInstagram/>
        <FaFacebookSquare/>
        <IoLogoWhatsapp/>
      </div>
    </footer>
  )
}
