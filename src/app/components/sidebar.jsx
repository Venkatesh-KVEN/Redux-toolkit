'use client';
import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {
      const [showAddress, setShowAddress] = React.useState(false)
      const newUsers = useSelector((state) => state.newsubscriber.user);
      const addComment = useSelector((state) => state.newComments.comments)

    const products = [
        { name: "Running Shoes", description: ["Lightweight and comfortable", "Breathable mesh upper", "Ideal for jogging and casual wear"], offerPrice: 250, price: 200, quantity: 1, size: 42, image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png", category: "Footwear", },
        { name: "Running Shoes", description: ["Lightweight and comfortable", "Breathable mesh upper", "Ideal for jogging and casual wear"], offerPrice: 250, price: 200, quantity: 1, size: 42, image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png", category: "Footwear", },
        { name: "Running Shoes", description: ["Lightweight and comfortable", "Breathable mesh upper", "Ideal for jogging and casual wear"], offerPrice: 250, price: 200, quantity: 1, size: 42, image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png", category: "Footwear", },
    ]
    return (

            <div className="max-w-90 w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
                <h2 className="text-xl md:text-xl font-medium">Post Summary</h2>
                <hr className="border-gray-300 my-5" />

                <div className="mb-6">
                    <p className="text-sm font-medium uppercase">Subscribes</p>
                    <div className="text-gray-500 mt-4 space-y-2">
                        {newUsers.length > 0 ? (
                            newUsers.map((user, index) => (
                                <ul key={index} className="flex justify-between"><li>{user}</li></ul> 
                            ))
                        ) : (
                            <p className="text-gray-500">No subscribers found</p>
                        )}
                    </div>  
                </div>

                <hr className="border-gray-300" />
                <p className="text-sm font-medium uppercase mt-5">Comments</p>
                <div className="text-gray-500 mt-4 space-y-2">
                        {addComment.length > 0 ? (
                            addComment.map((comment, index) => (
                                <ul key={index} className="flex justify-between"><li>{comment}</li></ul>
                            ))
                        ) : (
                            <p className="text-gray-500">No comments found</p>
                        )}
                </div>
            </div>
    
    )
}

export default Sidebar