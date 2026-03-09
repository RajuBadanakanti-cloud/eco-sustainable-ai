# Rayeva – AI Product Categorization System >>>>>>>>>>>>>>>>>>

## Project Overview

This project implements an **AI-powered product categorization system** for sustainable commerce.

The system automatically analyzes a product’s **name and description** and uses an AI model to generate:

* Product Category
* Sub Category
* SEO Tags
* Sustainability Filters

The generated data is stored in a **MongoDB database**, and every AI interaction (prompt and response) is logged for monitoring and debugging.

This project demonstrates **AI integration with real backend logic**.

---

# Key Features

## 1. AI Auto Category Generator

The system automatically generates structured product data using AI.

Input:

* product_name
* description

AI generates:

* category
* sub_category
* seo_tags (5–10)
* sustainability_filters

Example AI Output:

```json
{
 "category": "Accessories",
 "sub_category": "Reusable Shopping Bags",
 "seo_tags": ["eco-friendly bag", "reusable bag"],
 "sustainability_filters": ["Reusable", "Organic Cotton"]
}
```

---

## 2. AI Prompt Logging

Every AI request is logged to track:

* Prompt sent to the AI
* AI response
* Product reference

This helps with:

* debugging
* monitoring AI behavior
* improving prompt design

Database design:

Product
⬆
AiLog (linked using productId)

---

# System Architecture

User Request
↓
API Endpoint
↓
Controller
↓
AI Service (Groq API)
↓
Parse AI Response
↓
Save Product
↓
Save AI Log
↓
Return Response

---

# Tech Stack

Backend:

* Node.js
* Express.js

Database:

* MongoDB
* Mongoose

AI Integration:

* Groq API (LLM)

Other Tools:

* Axios
* dotenv

---

# Project Structure

```
src
│
├── controllers
│   ├── categoryController.js
│   ├── productsController.js
│   └── aiLogsController.js
│
├── models
│   ├── Product.js
│   └── AiLog.js
│
├── routes
│   ├── categoryRoutes.js
│   ├── productRoutes.js
│   └── aiLogRoutes.js
│
├── services
│   └── aiServices.js
│
├── utils
│   ├── categoryPrompt.js
│   └── AppError.js
│
└── config
    └── connectDB.js
```

---

# API Endpoints

### Create Product (AI Categorization)

POST /api/products

Example Request

```json
{
 "product_name": "Reusable Cotton Shopping Bag",
 "description": "Durable eco-friendly cloth bag used instead of plastic bags"
}
```

Example Response

```json
{
 "success": true,
 "product": {
  "category": "Accessories",
  "sub_category": "Reusable Shopping Bags"
 }
}
```

---

### Get All Products

GET /api/products

Returns all stored products along with AI logs.

---

### Delete Product

DELETE /api/products/:id

Removes a product from the database.

---

### Get All AI Logs

GET /api/ailogs

Returns all AI prompt and response logs.

---

### Get AI Log by ID

GET /api/ailogs/:id

Returns a specific AI interaction.

---

### Delete AI Log

DELETE /api/ailogs/:id

Deletes a specific AI log.

---

# AI Prompt Design

The AI is guided using a structured prompt:

* Product name and description are provided
* AI must select category from predefined options
* AI returns structured JSON only

Example Prompt:

```
You are an AI product categorization system.

Product Name: Reusable Cotton Shopping Bag
Description: Durable eco-friendly cloth bag used instead of plastic bags

Choose category only from:
Kitchen
Personal Care
Home Essentials
Accessories
```

---

# Error Handling

The system includes:

* Input validation
* AI response validation
* ObjectId validation
* Custom error handling using AppError

---

# Database Models

## Product Model

Stores final product information:

* product_name
* description
* category
* sub_category
* seo_tags
* sustainability_filters

---

## AiLog Model

Stores AI interaction logs:

* productId
* prompt
* response
* timestamps

---

# Why AI Logging is Important

AI systems can sometimes produce unexpected outputs.

Logging helps developers:

* analyze prompts
* debug AI behavior
* improve prompt quality

---

# Future Improvements

Possible enhancements:

* Impact Reporting Module
* AI B2B Proposal Generator
* WhatsApp Support Bot
* AI response validation layer
* Product duplicate detection

---

# Conclusion

This project demonstrates how AI can be integrated into a backend system to automate product categorization and reduce manual catalog work.

It combines:

* AI processing
* backend architecture
* database design
* logging and monitoring

to build a production-style AI service.
