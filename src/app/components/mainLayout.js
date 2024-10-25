import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export default function MainLayout({ children }) {
	return (
		<>
			
			<div className="w-full h-full flex flex-col justify-between">
			
				<Navbar />
				<main className="w-full flex items-center justify-center">{children}</main>
				<Footer />
			</div>
		</>
	);
}
