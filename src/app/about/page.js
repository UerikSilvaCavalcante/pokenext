import Image from "next/image"

/**
 * About component
 * 
 * This component renders an "About" page for the project.
 * It includes a heading and a paragraph with some information about the project.
 * 
 * @component
 * @returns {JSX.Element} The rendered component
 */
export default function About() {
    return(
        <div className="flex flex-col justify-center items-center p-4">
            <h1 className="text-3xl text-zinc-900 font-bold">About</h1>
            <p className="text-lg text-zinc-800 font-bold">Some information about the project</p>
            <Image
                src="/images/charizard.png"
                alt="Pokeball"
                width={300}
                height={300}>

                </Image>
        </div>
    )
}