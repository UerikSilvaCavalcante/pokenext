import Image from "next/image";
import Card from "./components/card";

async function getPokemons(limits = 251) {
	const max = limits;
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${max}`);
	const data = await res.json();
	data.results.forEach((pokemon, index) => {
		pokemon.id = index + 1;
	});

	return data.results;
}

export default async function Home() {
	const pokemons = await getPokemons();
	return (
		<div className="w-full p-2 flex flex-col justify-center items-center">
			<h1 className="text-5xl font-bold flex items-center justify-center p-4"><span className="text-red-500">Poke</span><span className="text-zinc-950">Next</span>
			<Image src="/images/pokeball.png" alt="pokeball" width={50} height={50}  className="ml-3"/>
			</h1>

			<ul className="flex flex-row gap-x-4 gap-y-8 w-4/5 flex-wrap items-center justify-center">
				{pokemons.map((pokemon) => (
					<li key={pokemon.id}>
						<Card pokemon={pokemon} /> 
					</li>
				))}
			</ul>
		</div>
	);
}
