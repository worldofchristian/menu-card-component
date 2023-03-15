import React from 'react'

const Pizza = () => {
  return (
    <>
    <div 
    className='flex items-center justify-center mb-44'>
      <div 
      className="max-w-sm p-6 rounded-md shadow-xl bg-gray-50 text-gray-900">

      <h1 
      className="text-3xl font-semibold tracking-wide mt-6 mb-6"
      >Pizza</h1>

      <div 
      className='flex-col'>
          <div 
          className="mt-4 mb-2">
            <h2 
            className="text-xl font-semibold tracking-wide"
            >Prosciutto</h2>
            <span 
            className="block text-md font-medium tracking-widest uppercase text-teal-600"
            >$16</span>
          </div>
          <p 
          className="text-gray-800 mb-6"
          >House made tomato sauce, mozza, goat cheese, arugula, grana padano</p>
        </div>
      
      <div 
      className='flex-col'>
          <div 
          className="mt-4 mb-2">
            <h2 
            className="text-xl font-semibold tracking-wide"
            >Margherita</h2>
            <span 
            className="block text-md font-medium tracking-widest uppercase text-teal-600"
            >$16</span>
          </div>
          <p 
          className="text-gray-800 mb-6"
          >House made tomato sauce, mozza, fresh basil</p>
        </div>

      <div 
      className='flex-col'>
          <div 
          className="mt-4 mb-2">
            <h2 
            className="text-xl font-semibold tracking-wide"
            >Pepperoni</h2>
            <span 
            className="block text-md font-medium tracking-widest uppercase text-teal-600"
            >$14</span>
          </div>
          <p 
          className="text-gray-800 mb-6"
          >House made tomato sauce, pepperoni, mozza</p>
        </div>
      
      <div 
      className='flex-col'>
          <div 
          className="mt-4 mb-2">
            <h2 
            className="text-xl font-semibold tracking-wide"
            >Italian Sausage</h2>
            <span 
            className="block text-md font-medium tracking-widest uppercase text-teal-600"
            >$14</span>
          </div>
          <p 
          className="text-gray-800 mb-6"
          >House made tomato sauce, red onion, fresh basil, mozza, italian sausage, chili flake</p>
        </div>

      <div 
      className='flex-col'>
          <div 
          className="mt-4 mb-2">
            <h2 
            className="text-xl font-semibold tracking-wide"
            >Kale</h2>
            <span 
            className="block text-md font-medium tracking-widest uppercase text-teal-600"
            >$16</span>
          </div>
          <p 
          className="text-gray-800 mb-6"
          >kale, red onion, mozza, white truffle oil, grana padano</p>
        </div>

        </div>
    </div>
    </>
  )
}

export default Pizza