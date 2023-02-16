
import React from "react"


const Contact = () => {
    	
	return (
		<>
			<div className="h-full pt-20 pb-5 overflow-hidden">
				<div class="max-w-screen-md mx-auto p-5">
					<div class="text-center mb-8 sm:mb-16">
						<p
							data-aos="slide-up"
							data-aos-delay="50"
							class="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase"
						>
							Contact
						</p>
						<h3
							data-aos="zoom-out"
							data-aos-delay="50"
							class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight md:text-8xl text-[43px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 drop-shadow-lg"
						>
							Nous Contacter
						</h3>
					</div>

					<form class="w-full relative mt-0">
						<div class="flex flex-wrap -mx-3 mb-6 ">
							<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
								<label
									class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									for="grid-first-name"
								>
									Prénom
								</label>
								<input
									class="appearance-none block w-full bg-transparent text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-first-name"
									type="text"
									placeholder="Joanna"
								/>
								<p class="text-blue-500 text-xs italic">
									Veuillez remplir ce champ.
								</p>
							</div>
							<div class="w-full md:w-1/2 px-3">
								<label
									class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									for="grid-last-name"
								>
									Nom
								</label>
								<input
									class="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-last-name"
									type="text"
									placeholder="Courtoi"
								/>
							</div>
						</div>
						<div class="flex flex-wrap -mx-3 mb-6">
							<div class="w-full px-3">
								<label
									class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									for="grid-password"
								>
									Adresse e-mail
								</label>
								<input
									class="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-email"
									type="email"
									placeholder="********@*****.**"
								/>
							</div>
						</div>

						<div class="flex flex-wrap -mx-3 mb-6">
							<div class="w-full px-3">
								<label
									class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									for="grid-password"
								>
									Votre Message
								</label>
								<textarea
									rows="10"
									class="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								></textarea>
							</div>
							<div class="flex justify-between w-full px-3 py-4">
								<div class="md:flex md:items-center">
									<label class="block text-gray-500 font-bold">
										<input class="mr-2 leading-tight" type="checkbox" />
										<span class="text-sm">Envoyez-moi votre newsletter !</span>
									</label>
								</div>
								<button
									data-aos="fade-left"
									data-aos-delay="50"
									class="shadow bg-blue-300 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
									type="submit"
								>
									Envoyer le message
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Contact
