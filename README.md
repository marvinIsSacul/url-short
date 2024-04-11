
# URL Short

## Getting Started

To get started with this application, follow these steps:

1. Run the `docker-compose.yml` file to start the MongoDB service:

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the DEV server:

   ```bash
   npm run dev
   ```

   The server will start running on port 5000 by default.

## Endpoints

This URL shortening service exposes the following endpoints:

1. `POST /l`

   - This endpoint accepts a JSON object containing a long URL and returns a shortened URL.
   - Example request body:

     ```json
     {
       "url": "https://google.com"
     }
     ```

   - Example response:

     ```json
     {
        "originalUrl": "https://google.com",
        "hash": "82LyLmmAH",
        "_id": "66179684a3df33b652d43897",
        "createdAt": "2024-04-11T07:51:32.236Z",
        "updatedAt": "2024-04-11T07:51:32.236Z",
        "__v": 0
     }
     ```

2. `GET /l/redirect/:hash`

   - This endpoint accepts a short URL identifier and redirects to the corresponding original URL.

3. `GET /l/:hash`

   - This endpoint accepts a short URL identifier and returns information about the URL.
   - Example response:

     ```json
     {
       "originalUrl": "https://google.com",
        "hash": "82LyLmmAH",
        "_id": "66179684a3df33b652d43897",
        "createdAt": "2024-04-11T07:51:32.236Z",
        "updatedAt": "2024-04-11T07:51:32.236Z",
        "__v": 0
     }
     ```

4. `GET /`

   - This endpoint serves a way to test the availalbility of the service.

   - Example response:

     ```It works! ```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Docker
