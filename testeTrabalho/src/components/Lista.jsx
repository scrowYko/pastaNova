export default function lista({nome, idade, escola}){
    return(
        <div className="lista">
            <p>{nome}</p>
            <p>{idade}</p>
            <p>{escola}</p>
        </div>
    )
}