


const categoryPrompt = (name, description) => {

            return `
            You are an AI product categorization system.

            Product Name: ${name}
            Description: ${description}

            Choose category only from:
            Kitchen
            Personal Care
            Home Essentials
            Accessories

            Return JSON format only:

            {
            "category":"",
            "sub_category":"",
            "seo_tags":[],
            "sustainability_filters":[]
            }
            `
}

export default categoryPrompt