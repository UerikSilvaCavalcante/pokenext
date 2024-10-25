import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="flex w-full p-4 justify-between items-center bg-zinc-900">
			<div className="flex items-center gap-4">
				<Image
					src="/images/pokeball.png"
					alt="Pokeball"
					width={30}
					height={30}
				/>
				<h1 className="text-2xl text-zinc-50 font-bold">
					<span>PokeNext</span>
				</h1>
			</div>
			<ul className="flex  items-center justify-evenly gap-6 text-md text-zinc-300 font-bold ">
				<li className="">
					<Link
						href="/"
						className="before:bg-zinc-300 link-navbar "
					>
						Home
					</Link>
				</li>
				<li className="before:bg-zinc-300 link-navbar ">
					<Link href="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
}
