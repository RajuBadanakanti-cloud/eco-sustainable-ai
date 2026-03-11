# 🌱 AI Sustainable Product Assistant

An AI-powered system that helps businesses categorize eco-friendly products and estimate their environmental impact.

This project implements **AI modules for sustainable commerce** by automatically generating product categories, SEO tags, sustainability filters, and environmental impact reports.

Live Demo: https://eco-sustainable-ai.vercel.app/

---

# 📌 Project Overview

The goal of this system is to reduce manual catalog management and support sustainable product insights using AI.

Users can:

• Generate product categories automatically using AI
• Get SEO tags and sustainability filters for eco-friendly products
• Estimate environmental impact based on product quantity
• View results through a simple interactive UI

The system demonstrates **AI integration with real business logic and structured outputs.**

---

# ⚙️ Implemented Modules

## ✅ Module 1 – AI Auto Category & Tag Generator

Automatically categorizes sustainable products and generates structured metadata.

Features:

• Detects product category
• Suggests sub-category
• Generates SEO tags
• Suggests sustainability filters
• Stores product in database
• Logs AI prompt and response

Example Input

```
{
 "product_name": "Reusable Cotton Shopping Bag",
 "description": "Durable eco-friendly cloth bag used instead of plastic bags"
}
```

Example Output

```
{
 "category": "Accessories",
 "sub_category": "Reusable Shopping Bags",
 "seo_tags": [
   "reusable bag",
   "cotton shopping bag",
   "eco-friendly bag"
 ],
 "sustainability_filters": [
   "Reusable",
   "Organic Cotton",
   "Plastic Free"
 ]
}
```

-------------------------------------------------------------------------------------------------------------------------------------------------

## ✅ Module 3 – Impact Reporting Generator

Calculates environmental impact of sustainable products.

Features:

• Estimates plastic saved
• Estimates carbon emissions avoided
• Generates impact statement
• Uses product category and quantity

Example Request

```
{
 "productId": "xxxxx",
 "quantity": 20
}
```

Example Response

```
{
 "plastic_saved": "8.80 kg",
 "carbon_avoided": "7.20 kg",
 "impact_statement":
 "This order prevented 8.80 kg of plastic waste and reduced 7.20 kg of carbon emissions."
}
```

---

# 🧠 System Architecture

User Interaction Flow

```
User
 ↓
React Frontend
 ↓
Express API
 ↓
AI Service (Groq / LLM)
 ↓
MongoDB Database
 ↓
Structured Response
```

Impact Calculation Flow

```
User enters quantity
 ↓
Impact API
 ↓
Impact Service
 ↓
Environmental Impact Report
```

---

# 🛠 Tech Stack

Frontend

• React
• TailwindCSS
• Axios

Backend

• Node.js
• Express.js

Database

• MongoDB
• Mongoose

AI Integration

• Groq API (OpenAI-compatible LLM)

Deployment

• Vercel (Frontend)
• Node backend server

---

# 📡 API Endpoints

Generate Category

```
POST /api/category
```

Generate Impact Report

```
POST /api/impact
```

Example Request

```
{
 "product_name": "Bamboo Toothbrush",
 "description": "Biodegradable bamboo toothbrush replacing plastic toothbrushes"
}
```

---

# 📊 Database Collections

Products

Stores generated product information.

Fields

```
product_name
description
category
sub_category
seo_tags
sustainability_filters
createdAt
```

AI Logs

Stores prompt and response from AI model.

Fields

```
prompt
response
createdAt
```

---

# 🎨 Frontend Features

• Responsive UI
• Product result cards
• SEO tag badges
• Sustainability filters display
• Environmental impact cards
• Loading and error states

---

# 🧪 Example Products to Try

You can test the system with these examples:

• Bamboo toothbrush
• Reusable cotton shopping bag
• Stainless steel water bottle
• Compostable food container
• Eco-friendly cleaning product

---

# 🔮 Future Improvements

The assignment also proposes additional modules which could be implemented in the future:

Module 2 – AI B2B Proposal Generator
Module 4 – AI WhatsApp Support Bot

Possible enhancements:

• AI product recommendations
• Sustainability analytics dashboard
• WhatsApp customer support automation
• Impact reporting per order

---

# 🎥 Demo Video

(Place your demo video link here)

Example

```
https://your-demo-video-link
```

---

# 👨‍💻 Author

Raju Badanakanti

AI Systems Assignment – Sustainable Commerce

---
