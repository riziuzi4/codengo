import React from 'react'
import { Helmet } from 'react-helmet'

export default function ProductCard({ data }) {
    return (
        <>
            <Helmet>
                <title>{`${data.title} - CodaNGO`}</title>

                <meta name="description" content={`Explore details about ${data.title}. ${data.description}`} />
                <meta name="keywords" content={`${data.title}, ${data.description}, in stock, price, discount, CodaNGO`} />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content={`${data.title} - CodaNGO`} />
                <meta property="og:description" content={`Explore details about ${data.title}. ${data.description}`} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://www.codango.com/datas/`} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${data.title} - CodaNGO`} />
                <meta name="twitter:description" content={`Explore details about ${data.title}. ${data.description}`} />
            </Helmet>

            <div className="Product flex my-3  rounded-full">
                <img src="./img/product.png" alt="img" className=" w-3/5 object-cover rounded-l-3xl -mr-5 shadow-lg shadow-green-700"  />
                <div className="discription flex flex-col bg-skin-bg300 w-2/5 shadow-md  px-5 rounded-3xl shadow-lg shadow-green-700">
                    <div className="title font-bold font-sans text-lg my-3 text-left">{data.title}</div>
                    <div className="about font-sans mb-3 text-sm">{data.description}</div>
                    <div className="availability text-sm w-1/2 text-skin-text100 mt-16">Available</div>
                    <div className="dummy flex text-sm my-2 items-center mt-3 ">
                        <div className="Left text-center text-sm bg-skin-primary200 py-1 px-1 rounded-3xl w-1/2 text-skin-text100">
                            Only {data.inStock} seats left
                        </div>
                        <div className="discount text text-center w-1/2 text-green-500">
                            {data.discount}% off
                        </div>
                    </div>
                    <div className="interactions  flex justify-between mt-2 mb-5">
                        <div className="price  flextext-skin-text100 font-bold font-sans">
                            ${data.price}
                        </div>
                        <div className="otherinteractions flex ">
                            <div className="shop  ">
                                C
                            </div>
                            <div className="heart">
                                L
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
