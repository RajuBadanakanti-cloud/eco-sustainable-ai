import { useState } from "react"
import {Sparkles, Leaf, BarChart3} from "lucide-react"
import axios from "axios"

/*
const defultData = {
    
    "success": true,
    "product": {
        "product_name": "Reusable Cotton Shopping Bag",
        "description": "Durable eco-friendly cloth bag used instead of plastic bags",
        "category": "Accessories",
        "sub_category": "Reusable Shopping Bags",
        "seo_tags": [
            "reusable bag",
            "cotton shopping bag",
            "eco-friendly bag",
            "cloth tote",
            "zero waste",
            "plastic free",
            "grocery bag",
            "sustainable accessories"
        ],
        "sustainability_filters": [
            "Eco-friendly",
            "Reusable",
            "Organic Cotton",
            "Biodegradable"
        ],
        "_id": "69ad2eea72d6b77529e501d0",
        "createdAt": "2026-03-08T08:10:18.464Z",
        "updatedAt": "2026-03-08T08:10:18.464Z",
        "__v": 0,
        "id": "69ad2eea72d6b77529e501d0"
    }
}
*/

const Home = () => {
    const [productName, setProductName] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [productData, setProductData] = useState(null)
    const [isError, setIsError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const [productImpactData, setProductImpactData] = useState(null)
    const [productsQuantity, setProductsQuantity] = useState(1)
    const [isImpactError, setIsImpactError] = useState(false)
    const [isLoadingImpact, setIsLoadingImpact] = useState(false)
    const [errorMsgImpact, setErrorMsgImpact] = useState("")



        const handleFormSubmitGenerateCategory = async (e) => {
            e.preventDefault()
            try{
                setIsLoading(true)
                const URL = "http://localhost:5000/api/category"
                const userInput = {
                    product_name:productName.trim(),
                    description:productDescription.trim()
                } 

                const response = await axios.post(URL,userInput)
                const data = response.data.product 
                setProductData(data) 
                setIsError(false)
                setProductName("")
                setProductDescription("")
                setProductImpactData(null)
                
            }catch(err){
                setIsError(true)
                const error  = err.response?.data?.message || "Server Error" 
                setErrorMsg(error)  
                setIsLoading(false)
            }finally{
                setIsLoading(false)

            }
        } 


        const generateProductImpactReport = async (productId) => {
            try{
                setIsLoadingImpact(true)
                const URL = "http://localhost:5000/api/impact"
                const userInput = {
                    productId: productId,
                    quantity: Number(productsQuantity) < 1 ? 1 : Number(productsQuantity)
                }
                console.log("userInput",userInput)

                const response = await axios.post(URL,userInput)
                const data = response.data.impact 
               setProductImpactData(data)
                setIsImpactError(false)
            } catch(err){
                setIsImpactError(true)
                const error  = err.response?.data?.message || "Server Error" 
                setErrorMsgImpact(error)  
                setIsLoadingImpact(false)

            }finally{
                setIsLoadingImpact(false)
            } 
        }


// Products details card (fetched from server) UI       
const renderProductCardsData = () => {
        return (

        (productData && (
            <div className="w-[95%] md:w-[65%] mt-8 grid gap-6">
                {/* Product Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <h2 className="text-lg md:text-xl font-semibold text-slate-800 mb-3">
                    {productData.product_name}</h2>

                    <p className="text-xs md:text-sm text-slate-500 mb-4">
                    AI Generated Product Information</p>
                {/* Category Card */}
                <div className="flex flex-col gap-2">
                    <p> <span className="font-medium text-slate-700">Category:</span>
                        <span className="ml-2 text-green-600 font-medium">{productData.category}</span>
                    </p>

                    <p><span className="text-sm md:text-base font-medium text-slate-700">Sub Category:</span>
                        <span className="text-sm md:text-base  ml-2 text-slate-600">{productData.sub_category}</span>
                    </p>

                </div>

                </div>

                {/* SEO TAGS CARD */}
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <h3 className="font-semibold text-slate-800 mb-3">SEO Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {productData?.seo_tags?.map((tag,index)=>(
                        <span key={index} className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                            {tag}
                        </span>
                        ))}

                    </div>

                </div>

                {/* Sustainability Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="font-semibold text-slate-800 mb-3">Sustainability Filters</h3>
                        <div className="flex flex-wrap gap-2">
                            {productData?.sustainability_filters?.map((item,index)=>(
                            <span key={index} className="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-700">
                                {item}
                            </span>
                            ))}
                    </div>

                </div>

            { /* Product Impacts Content >>>>  */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-base md:text-lg font-semibold text-green-800 rounded-md mt-1">Get insights on how your product contributes to sustainability
                    <BarChart3 className="h-4 md:h-5 w-4 md:w-5 text-green-600 inline-block ml-2" />
                </h2>
                <p className="text-xs md:text-sm text-slate-400 mt-1">Enter the product quantity below to generate its environmental impact insights.</p>
                <div className="w-full flex flex-col md:flex-row justify-start items-start md:items-center mt-6 flex-wrap gap-2">
                    <input id="quantity" type="number" value={Number(productsQuantity)} required min={1} max={1000000} onChange={(e) => setProductsQuantity(Number(e.target.value))} placeholder="Enter quantity ex:10"
                    className="w-full md:w-56 h-10 md:h-12 px-4 py-2 text-sm md:text-base text-slate-600 font-medium bg-slate-100 rounded-md outline-none mr-5 md:mr-10"/>

                    <button type="button" onClick = {() => generateProductImpactReport(productData._id)}
                    className="h-10 w-full md:h-12 px-4 py-2 text-white text-sm md:text-base text-shadow-gray-900 font-semibold bg-linear-to-r from-green-500/90 via-green-300 via-40% to-green-500/90
                    transition-all duration-400 rounded-md cursor-pointer hover:bg-green-400/80 hover:via-green-400 hover:shadow-lg hover:shadow-green-200">Generate Impact</button>
                </div>
                {/* Impact error */}
                {isImpactError && (
                    <p className="text-red-500 text-sm mt-2">{errorMsgImpact}</p>
                )}
            </div>

            </div>

        ))
    )
}


// Product impact data UI
const renderProductImpactData = () => {
    
    return  (
    productImpactData && (
                <div className="w-[95%] md:w-[65%] mt-6">
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-green-800 mb-4">Environmental Impact 
                            <Leaf className="h-4 md:h-5 w-4 md:w-5 text-green-500 inline-block ml-2" />
                        </h3>
                        <p className="text-sm text-slate-700"><b>Plastic Saved:</b> {productImpactData.plastic_saved}</p>
                        <p className="text-sm text-slate-700 mt-1"><b>Carbon Avoided:</b> {productImpactData.carbon_avoided}</p>
                        <p className="text-sm text-green-600 mt-3"> {productImpactData.impact_statement}</p>
                    </div>

                </div>
            )) 
 }


// ---------------------------------------------------------------------
    return (
        <div className="min-h-screen w-screen flex flex-col justify-center items-center bg-slate-50 backdrop-blur-xl">
            {/* Content */}
            <div className="min-h-screen py-20 w-[95%] md:w-[80%] flex flex-col justify-center items-center">
                <h1 className="font-noraml text-center tracking-wide text-black text-2xl md:text-3xl mb-3 md:mb-4">AI Sustainable Product Assistant</h1>
                <p className="w-[95%] text-xs md:text-sm text-slate-500 mb-6 text-center max-w-xl">
                    This AI tool helps categorize sustainable products and estimate their environmental impact. 
                    Try entering eco-friendly products such as bamboo toothbrush, reusable bottle, or cotton shopping bag.
                </p>

            {/* Quick Searches */}
            <div className="flex justify-center items-center gap-3 mt-5 flex-wrap">

                    <button
                        onClick={()=>setProductName("Bamboo Toothbrush")}
                        className="px-3 py-1 text-xs bg-green-200 rounded-md">
                    Bamboo Toothbrush
                    </button>

                    <button
                        onClick={()=>setProductName("Reusable Water Bottle")}
                        className="px-3 py-1 text-xs bg-green-200 rounded-md">
                    Reusable Bottle
                    </button>

                    <button
                        onClick={()=>setProductName("Cotton Shopping Bag")}
                        className="px-3 py-1 text-xs bg-green-200 rounded-md">
                    Cotton Bag
                    </button>

            </div>



                <form onSubmit={handleFormSubmitGenerateCategory} id="category-form" className="w-full md:w-[65%] p-5  rounded-md mt-1">
                    {/* Product Name */}
                        <div tabIndex={0} className="mb-6 group h-12 md:h-14 px-4 md:px-6 py-2 flex justify-center items-center rounded-full shadow-sm border-slate-200 border 
                        focus-within:ring-1 focus-within:ring-green-300 focus-within:shadow-md focus-within:shadow-green-100/50 focus-within:border-none">
                            <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-slate-600 group-focus-within:text-green-700"/>
                        <input id="product-name" required value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Ex: Bamboo Toothbrush, Reusable Bottle, Cotton Shopping Bag"
                         className="w-full bg-slate-50 text-sm md:text-base outline-0 ml-2 md:ml-4"/>
                        </div> 

                    {/* Description */}
                        <textarea id="product-description" required rows={5} value={productDescription} onChange={(e) => setProductDescription(e.target.value)} placeholder="Describe an eco-friendly product. Example: A reusable cotton shopping bag used instead of plastic bags for grocery shopping."
                         className="w-full resize-none bg-slate-50 text-sm md:text-base outline-0 px-4 md:px-6 py-2 flex justify-center items-center rounded-xl shadow-sm border-slate-200 border
                         focus-within:ring-1 focus-within:ring-green-300 focus-within:shadow-md focus-within:shadow-green-100/50 focus-within:border-none"></textarea>
                    
                    {/* Generate Button */}
                    {isError && <p className="text-red-500 text-sm mt-2">{errorMsg}</p>}
                    <button type="submit" className="h-10 md:h-12 px-4 py-2 text-white text-sm md:text-base text-shadow-gray-800 font-semibold bg-linear-to-r from-green-500/90 via-green-300 via-60% to-green-500/90  mt-4 
                    transition-all duration-400 rounded-md cursor-pointer hover:bg-green-500/80 hover:via-green-400 hover:shadow-lg hover:shadow-green-200">Generate Category</button>
                </form> 

                {/* Products category cards >> */}
                {isLoading ? <p className="text-sm md:text-base text-slate-600 mt-4 animate-pulse">Generating category...</p> :
                renderProductCardsData()
                }  

                {/* Environmental Impact cards >> */}
                {isLoadingImpact ? <p className="text-sm md:text-base text-slate-600 mt-4 animate-pulse">Generating environmental impact...</p> :
                renderProductImpactData()
                }       


            {/* -------------- */}
            </div>
        </div>
    )
}

export default Home