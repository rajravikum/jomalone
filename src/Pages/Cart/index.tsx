import React from 'react'

type Props = {}

const Cart = (props: Props) => {
    return (
        <div className="container p-12 mx-auto">
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div className="flex flex-col md:w-full">
                    <h2 className="mb-4 font-bold md:text-xl text-heading ">Order Summary
                    </h2>
                    <div className="pt-12 md:pt-0 2xl:ps-4">
                        <div className="mt-8">
                            <div className="flex flex-col space-y-4">
                                <div className="flex space-x-4 w-full item-center align-center">
                                    <div>
                                        <img src="https://source.unsplash.com/user/erondu/1600x900" alt="image"
                                            className="w-60" />
                                    </div>
                                    <div className="w-full">
                                        <h2 className="text-xl font-bold">Title</h2>
                                        <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                        <span className="text-red-600">Price</span> $20
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex space-x-4 w-full item-center align-center">
                                    <div>
                                        <img src="https://source.unsplash.com/collection/190727/1600x900" alt="image"
                                            className="w-60" />
                                    </div>
                                    <div className="w-full">
                                        <h2 className="text-xl font-bold">Title</h2>
                                        <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                        <span className="text-red-600">Price</span> $20
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex space-x-4 w-full item-center align-center">
                                    <div>
                                        <img src="https://source.unsplash.com/collection/172372/1600x900" alt="image"
                                            className="w-60" />
                                    </div>
                                    <div className="w-full">
                                        <h2 className="text-xl font-bold">Title</h2>
                                        <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                        <span className="text-red-600">Price</span> $20
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex space-x-4 w-full item-center align-center">
                                    <div>
                                        <img src="https://source.unsplash.com/collection/bird/1600x900" alt="image"
                                            className="w-60" />
                                    </div>
                                    <div className="w-full">
                                        <h2 className="text-xl font-bold">Title</h2>
                                        <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                        <span className="text-red-600">Price</span> $20
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inline-flex rounded-md shadow my-8 float-right w-1/2">
                            <a href="/order" className="uppercase w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Place Order </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-3/5 mx-auto sm:w-[23.4375rem]">
                    <div className="relative z-10 rounded-lg shadow-xl text-slate-900 dark:text-slate-300 p-4">
                        <div className="flex p-4 mt-4">
                            <h2 className="text-xl font-bold">ITEMS 4</h2>
                        </div>
                        <div
                            className="w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Subtotal<span className="ml-2 float-right">$40.00</span></div>
                        <div
                            className="w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Shipping Tax<span className="ml-2 float-right">$10</span></div>
                        <div
                            className="w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Total<span className="ml-2 float-right">$50.00</span></div>
                    </div>
                    <div className="relative z-10 rounded-lg shadow-xl text-slate-900 dark:text-slate-300 p-4">
                        <div className="flex p-4 mt-4">
                            <h2 className="text-xl font-bold">OFFER CODE</h2>
                        </div>
                        <div className="flex w-full py-4 text-sm font-semibold lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            <input
                                className="appearance-none rounded relative block w-2/3 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Offer code"
                            />
                            <button className="uppercase w-1/3 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;