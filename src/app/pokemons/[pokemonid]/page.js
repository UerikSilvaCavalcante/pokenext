import Image from "next/image";
export const dynamicParams = false;


export async function generateStaticParams() {
    const max = 251;
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${max}`);
	const data = await res.json();
    const params = await data.results.map((pokemon, index) => {
        return {
            pokemonid: (index+1).toString(),
        }
    })
    // console.log(paths[0].params.pokemonid);

    return params;
  }

export default async function pokemonId({params}) {
    const {pokemonid} = await params;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`);
    const pokemon = await res.json();
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className=" flex flex-col justify-center items-center gap-4">
                <h1 className="text-5xl font-bold bg-zinc-800 text-zinc-100 text-center p-3 w-fit rounded capitalize">{pokemon.name}</h1>
                <Image src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
                width={200}
                height={200}
                alt={pokemon.name}
                />
            </div>
            <div className="text-center">
                <h2 className="text-lg font-bold">
                    Numero:
                </h2>
                <p className="font-bold">
                    #{pokemon.id}
                </p>
            </div>
            <div className="text-center">
                <h2 className="text-lg font-bold">
                    Tipo:
                </h2>
                <div className="flex gap-4">
                    {pokemon.types.map((type) => {
                        return <p key={type.type.name} className={`text-cente px-3 py-1 bg-zinc-800 text-zinc-100 type_${type.type.name} rounded-md`}>{type.type.name}</p>
                    })}
                </div>
            </div>
            <div className="flex p-2 gap-3">
                <div className="text-center ">
                    <h2 className="text-lg font-bold">
                        Altura:
                    </h2>
                    <p className="font-bold">
                        {pokemon.height * 10} cm
                    </p>
                </div>
                <div className="w-[2px] h-full bg-zinc-600">

                </div>
                <div className="text-center ">
                    <h2 className="text-lg font-bold">
                        Peso:
                    </h2>
                    <p className="font-bold">
                        {pokemon.weight / 10} kg
                    </p>
                </div>
            </div>
        </div>
    )
}