import React from "react"


const Contact = () => {
	return (
		<>
			<div className="h-full py-11">
				<div class="max-w-screen-md mx-auto p-5">
					<div class="text-center mb-16">
						<p class="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
							Contact
						</p>
						<h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight md:text-8xl text-[43px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 drop-shadow-lg">
							Nous Contacter
						</h3>
					</div>

					<form class="w-full relative mt-20">
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
									class="shadow bg-blue-300 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
									type="submit"
								>
									Envoyer le message
								</button>
							</div>
						</div>
					</form>
					<div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
						<a class="text-gray-400">medicalbeautycenter@gmail.com</a>
						<p class="leading-normal my-5 text-gray-500">
							49 Smith St.
							<span>Saint Cloud, MN 56301</span>
						</p>
						<span class="inline-flex">
							<a class="text-blue-500">
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
								</svg>
							</a>
							<a class="ml-4 text-blue-500">
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
							<a class="ml-4 text-blue-500">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
								</svg>
							</a>
							<a class="ml-4 text-blue-500">
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
								</svg>
							</a>
						</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
