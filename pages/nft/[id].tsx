/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ConnectWallet, useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";

function NFTDropPage() {

    //Auth
    const connectWithMetaMask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();
    // ---

    console.log(address)

  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
        {/* Left side */}
        <div className='lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500'>
            <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                <div className='bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl'>
                <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72' src="https://links.papareact.com/8sg" alt="papafam" />
                </div>
                <div className='text-center p-5 space-y-2'>
                    <h1 className='text-4xl font-bold text-white '>Papafam Apes</h1>
                    <h2 className='text-xl text-gray-300'>A collection of NFT who live and breathe React</h2>
                </div>
            </div>

        </div>
        {/* Right side */}
        <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
            {/* Header */}
                <div className='flex items-center justify-between'>
                    <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>The NFT Market Place</h1>
                    <button onClick={() => address ? disconnect() :  connectWithMetaMask()} className='rounded-full bg-rose-400 text-white px-4 py-2 text-xd font-bold lg:px-5 lg:py-3 lg:text-base'>{address ? 'Sign out' : 'Sig in'}</button>

                    
                </div>
                <hr className='my-2 border'/>
                    {address && (
                        <p className='text-center text-sm text-rose-400'>You're logged in with wallet {address.substring(0,5)}...{address.substring(address.length - 5)}</p>
                    )}
            {/* Content */}
                <div className='mt-10 flex flex-1 flex-col items-center text-center lg:space-y-0 lg:justify-center'>
                    <img className='w-80 object-cover pb-10 lg:h-40' src="https://links.papareact.com/bdy" alt="icon" />

                    <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The Coding Club | NFT</h1>

                    <p className='pt-5 text-xl text-green-500'>13 / 21 NFT's claimed</p>
                </div>
                
                    <button className='h-16 mt-10 bg-red-600 w-full text-white rounded-full'>Mint NFT(0.01 ETH)</button>
                
        </div>
        
    </div>
  )
}

export default NFTDropPage