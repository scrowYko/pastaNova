import TituloGaleria from "./Titulo2"
import Imagem from "./Imagem"

export default function(){
    return(
        <div className="galeria2">
            <TituloGaleria titulo={"Titulo 2"}/>
            <div className="itemgaleria">
                <Imagem url={"ThePancakeView.jpg"} />
                <Imagem url={"cato2.jpg"} />
                <Imagem url={"Catloafposition.jpg"} />
                <Imagem url={"catloaf.jpg"} />
                <Imagem url={"Mylittleloafofbread.jpg"} />
                <Imagem url={"catloaf.jpg"} />
                </div>
        </div>
    )
}