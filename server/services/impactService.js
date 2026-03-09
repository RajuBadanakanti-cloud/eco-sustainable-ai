

const generateImpactReport = (product, quantity) => {
    let plasticPerProduct;  // assuming values in kgs
    let carbonPerProduct;// assuming values in kgs
//       enum: ["Kitchen", "Personal Care", "Home Essentials", "Accessories"],

    switch(product.category){
        case "Kitchen":
            plasticPerProduct = 0.63
            carbonPerProduct = 0.54
        break  

        case "Personal Care":
            plasticPerProduct = 0.52
            carbonPerProduct = 0.5
        break  

        case "Home Essentials":
            plasticPerProduct = 0.68
            carbonPerProduct = 0.42  
        break  

        case "Accessories":
            plasticPerProduct = 0.44
            carbonPerProduct = 0.36 
        break
        
        default:
            plasticPerProduct = 0.4 
            carbonPerProduct = 0.2

    }

    const plastic_saved = plasticPerProduct * quantity
    const carbon_avoided = carbonPerProduct * quantity

    return (
        {
            plastic_saved : `${plastic_saved.toFixed(2)} kg`,
            carbon_avoided : `${carbon_avoided.toFixed(2)} kg`,
            localImpact : "supports eco-friendly supply chains",
            impact_statement: `This order prevented ${plastic_saved.toFixed(2)} kg of plastic waste and reduced ${carbon_avoided.toFixed(2)} kg of carbon emissions.`

        }
    )
}


export default generateImpactReport