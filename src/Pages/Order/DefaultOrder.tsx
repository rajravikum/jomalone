import { ArrowSmRightIcon, AtSymbolIcon, CalendarIcon, CheckIcon, CurrencyDollarIcon, LockClosedIcon, PaperClipIcon } from '@heroicons/react/outline';
import React from 'react';

type Props = {}

const DefaultOrder = (props: Props) => {
    return (
        <div className="container p-12 mx-auto">
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div className="flex flex-col md:w-full">
                    <div className="pt-12 md:pt-0 2xl:ps-4">
                        <div className="mt-8">
                            <div className="w-full">
                                <div className="max-w-7xl mx-auto">
                                    {/* <div className="bg-indigo-600 my-2 flex flex-colum items-center justify-between flex-wrap p-2">
                                        <div className="w-0 flex-1 flex items-center">
                                            <span className="flex p-2 rounded-lg bg-indigo-800">
                                                <LockClosedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                            <h2 className='ml-3 font-bold text-white'>Login / Register</h2>
                                        </div>
                                    </div> */}
                                    <div className="max-w-7xl mx-auto">
                                        <div className="bg-gray-300 my-2 flex flex-colum items-center justify-between flex-wrap p-2">
                                            <div className="w-0 flex-1 flex items-center">
                                                <span className="flex p-2 rounded-lg bg-gray-500">
                                                    <LockClosedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                                </span>
                                                <h2 className="ml-3 font-bold text-gray-600">Login / Register</h2>
                                                <CheckIcon className="h-6 w-6 text-gray-600 mx-2" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 shadow overflow-hidden sm:rounded-lg sr-only">
                                            <div className="min-h-full flex items-center justify-center p-4 sm:px-6 lg:px-4">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 shadow overflow-hidden sm:rounded-lg sr-only">
                                        {/* <div className="bg-gray-100 shadow overflow-hidden sm:rounded-lg"> */}
                                        <div className="min-h-full flex items-center justify-center p-4 sm:px-6 lg:px-4">
                                            <form className="my-2 space-y-6 w-2/3" action="#" method="POST">
                                                <input type="hidden" name="remember" defaultValue="true" />
                                                <div className="rounded-md shadow-sm -space-y-px">
                                                    <div>
                                                        <label htmlFor="email-address" className="sr-only">
                                                            Email address
                                                        </label>
                                                        <input
                                                            id="email-address" name="email" type="email" autoComplete="email"
                                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                            placeholder="Email address"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="password" className="sr-only">
                                                            Password
                                                        </label>
                                                        <input
                                                            id="password" name="password" type="password" autoComplete="current-password"
                                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="remember-me"
                                                            name="remember-me"
                                                            type="checkbox"
                                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                                        />
                                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                            Remember me
                                                        </label>
                                                    </div>
                                                </div>

                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    >
                                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                                        </span>
                                                        Sign in
                                                    </button>
                                                </div>
                                                <div className="text-sm">
                                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                        Forgot your password?
                                                    </a>
                                                    <a href="#" className="float-right font-medium text-indigo-600 hover:text-indigo-500">
                                                        Register
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="max-w-7xl mx-auto">
                                    {/* <div className="bg-gray-300 my-2 flex flex-colum items-center justify-between flex-wrap p-2">
                                        <div className="w-0 flex-1 flex items-center">
                                            <span className="flex p-2 rounded-lg bg-gray-500">
                                                <AtSymbolIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                            <h2 className="ml-3 font-bold text-gray-600">Delivery Address</h2>
                                        </div>
                                    </div> */}
                                    <div className="bg-indigo-600 my-2 flex flex-colum items-center justify-between flex-wrap p-2">
                                        <div className="w-0 flex-1 flex items-center">
                                            <span className="flex p-2 rounded-lg bg-indigo-800">
                                                <AtSymbolIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                            <h2 className='ml-3 font-bold text-white'>Delivery Address</h2>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 shadow overflow-hidden sm:rounded-lg">
                                        <div className="min-h-full flex items-start justify-right p-4 sm:px-6 lg:px-4">
                                            <select className="mt-1 block w-1/2 py-2 px-3 border border-gray-300 bg-white disabled:bg-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option >Address 1</option>
                                                <option >Address 2</option>
                                                <option >Address 3</option>
                                            </select>
                                            <div className="mx-5">
                                                <p>Lorem ipsum dolor sit amet</p>
                                                <p>consectetur,adipiscing elit, Integer elit eros</p>
                                                <p>facilisis pharetra rutrum</p>
                                                <p> quis, accumsan ,et risus</p>
                                                <p>676305</p>
                                            </div>
                                        </div>
                                        <div className="w-1/4 flex-1 flex float-right m-5">
                                            <span className="flex p-2 rounded-lg bg-indigo-600 w-full item-center justify-center">
                                                <ArrowSmRightIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="max-w-7xl mx-auto">
                                    <div className="bg-gray-300 my-2 flex flex-colum items-center justify-between flex-wrap p-2">
                                        <div className="w-0 flex-1 flex items-center">
                                            <span className="flex p-2 rounded-lg bg-gray-500">
                                                <CalendarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                            <h2 className="ml-3 font-bold text-gray-600">Order Review</h2>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 shadow overflow-hidden sm:rounded-lg sr-only">
                                        <div className="min-h-full flex items-center justify-center p-4 sm:px-6 lg:px-4">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="max-w-7xl mx-auto">
                                    <div className="bg-gray-300 my-2 flex flex-colum items-center justify-between flex-wrap p-2">
                                        <div className="w-0 flex-1 flex items-center">
                                            <span className="flex p-2 rounded-lg bg-gray-500">
                                                <CurrencyDollarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                            <h2 className="ml-3 font-bold text-gray-600">Payment</h2>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 shadow overflow-hidden sm:rounded-lg sr-only">
                                        <div className="min-h-full flex items-center justify-center p-4 sm:px-6 lg:px-4">

                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default DefaultOrder;