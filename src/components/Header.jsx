import React, { useState } from "react"
import { GrClose } from "react-icons/gr"
import { AiOutlineMenu } from "react-icons/ai"
import Link from "next/link"
import Image from "next/image"
import logo from "../images/logo-medicalProject.jpg"
import styles from "../styles/Home.module.css"

const Header = () => {

	const [isOpen, setIsOpen] = useState(false)

	


	return (
		<>
			<header className="absolute w-full bg-white shadow-lg shadow-indigo-500/40">
				<div className=" flex items-center justify-between px-8 py-2 max-w-6xl mx-auto ">
					<div className="flex items-center justify-start gap-4  ">
						<ul className="flex items-center justify-start gap-4 ">
							{!isOpen && (
								<li onClick={() => setIsOpen(true)} className="lg:hidden">
									<button className="cursor-pointer">
										<AiOutlineMenu />
									</button>
								</li>
							)}
							{isOpen && (
								<li
									onClick={() => setIsOpen(false)}
									className="lg:hidden close"
								>
									<button className="cursor-pointer w-6 text-4xl">
										<GrClose className="text-4xl h-4 w-5" />
									</button>
								</li>
							)}
							<Link href="/">
								<Image
									src={logo}
									className="w-20 imageGlobal"
									alt="Image Logo"
									priority="true"
								></Image>
							</Link>
						</ul>

						<nav className={isOpen && "open"}>
							<ul className={styles.liste}>
								<li>Nous</li>
								<li>Personnel</li>
								<li>En savoir+</li>
								<li>Témoignages</li>
							</ul>
						</nav>
					</div>
					<div>
						<ul className="flex items-center justify-start gap-4">
							<Link href="/cart">
								<button className=" text-slate-600">Se connecter</button>
							</Link>

							<li>
								<button className={`${styles.buttonConnect} ${styles.btn3}`}>
									<span className={styles.spanBtn}>Ouvrir un compte</span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
