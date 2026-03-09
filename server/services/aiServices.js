import axios  from "axios"

 
const generateCategory = async (prompt) => {
  try{
        const response = await axios.post(
                "https://api.groq.com/openai/v1/chat/completions",
                {
                  model: "openai/gpt-oss-120b",
                  messages: [
                    { role: "user", content: prompt }
                  ]
                },
                {
                  headers: {
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                    "Content-Type": "application/json"
                  },
                  timeout:10000
                },

        )

        const content = response.data?.choices[0]?.message?.content
        if(!content){
          throw new Error("Invalid API Response!")
        } 

      return content

  }catch(err){
    throw new Error(`Ai Service failed: ${err.message}`)
  }

}



export default generateCategory