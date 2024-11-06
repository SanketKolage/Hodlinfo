# Crypto Data Fetch and Store

This Node.js project is a simple web application that fetches cryptocurrency data from the WazirX API and stores it in a PostgreSQL database. The application provides an API endpoint to retrieve and display the top 10 cryptocurrencies.

## Features

- **Fetch Cryptocurrency Data**: The application uses Axios to fetch the top 10 cryptocurrencies from WazirX's public API.
- **Database Storage**: The fetched data is stored in a PostgreSQL database table named `crypto_data`.
- **Data Retrieval Endpoint**: A REST API endpoint is available to retrieve and serve the stored cryptocurrency data in JSON format.

## Technologies Used

- **Node.js & Express**: For server-side operations.
- **Axios**: To make HTTP requests to the WazirX API.
- **PostgreSQL**: To store cryptocurrency data.
- **HTML/CSS/JavaScript**: A basic frontend served as static files.

## Setup Instructions

### Prerequisites

- **Node.js** and **npm**: Ensure Node.js and npm are installed. [Download here](https://nodejs.org/).
- **PostgreSQL**: Install PostgreSQL and create a database for this project.

### Project Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/SanketKolage/Hodlinfo.git
   cd Hodlinfo
   
Install Dependencies
npm install


2 **Configure Database**

In the db.js file, configure the PostgreSQL connection with your database credentials.

Run the following SQL command in PostgreSQL to create the crypto_data table:

CREATE TABLE crypto_data (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  last DECIMAL,
  buy DECIMAL,
  sell DECIMAL,
  volume DECIMAL,
  base_unit VARCHAR(10)
);

Run the Application
node app.js


Open your browser and go to http://localhost:3000.

API Endpoints
GET /api/fetch-and-store: Fetches the top 10 cryptocurrency data from WazirX API, stores it in the database, and clears the old data.
GET /api/crypto-data: Retrieves the stored cryptocurrency data from the database.

Project Structure

├── client                   # Folder for static frontend files
├── db.js                    # Database connection file
├── app.js                   # Main server file
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation



To fetch the latest data and store it in the database, access the endpoint:
http://localhost:3000/api/fetch-and-store

To view the stored cryptocurrency data, access the endpoint:
http://localhost:3000/api/crypto-data
