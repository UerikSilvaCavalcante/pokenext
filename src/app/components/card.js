import Image from "next/image"
import Link from "next/link"

export default function Card({pokemon}) {
    return  (
        <div className="bg-zinc-900 border-red-500 text-zinc-500 border-[2px] rounded-2xl p-7 flex flex-col items-center justify-center gap-5 px-16 shadow-card">
            <Image src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`} 
            width={120} 
            height={120} 
            alt={pokemon.name}
            />
            <p className="text-sm rounded-md bg-red-600 text-zinc-900 font-bold px-2">#{pokemon.id}</p>
            <h3 className="text-xl font-bold text-zinc-100 capitalize">{pokemon.name}</h3>
            <Link href={`/pokemons/${pokemon.id}`} className="text-lg font-bold bg-zinc-50 px-4 py-2 rounded-md text-zinc-900 hover:bg-red-600 transition duration-300 ease-out">
                Detalhes
            </Link>
        </div>
    )    
}