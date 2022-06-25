interface PerfilProps {
    name: string,
    lastname?: string,
    age: number
}

export default function Perfil({name, lastname, age} : PerfilProps) {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{lastname}</h1>
            <h1>{age}</h1>
        </div>
    )
}