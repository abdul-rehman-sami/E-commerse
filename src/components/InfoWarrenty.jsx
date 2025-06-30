import React from 'react'

const InfoWarrenty = () => {
  return (
    <div className="absolute top-2 right-1 z-20 w-[500px] bg-white  rounded-xs shadow-2xl p-4 text-gray-700 text-sm">
      <h2 className="font-semibold text-xl mb-2">Return & Warranty</h2>
      <p className="mb-2">✅ 14 days easy return</p>
      <p className="text-sm text-gray-600 mb-2">
       Change of mind is not applicable as a Return Reason for this product due to one or more of the following reasons:
      </p>
      <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
        <li>Not applicable for overseas seller</li>
        <li>Digital goods such as mobile top up cards</li>
        <li>Grocery categories</li>
        <li>Swimwear and underwear</li>
        <li>Shipped from overseas</li>
        <li>Signed delivery slip products</li>
        <li>Bikes and Cars</li>
      </ul>
      <p className="mt-3 text-sm text-red-500">❌ Warranty not available</p>

      <p className='mt-2 text-sm'>If your product does not come with any warranty, then you can still benefit from our return policy. Please read the return policy conditions</p>
    </div>
  )
}

export default InfoWarrenty
