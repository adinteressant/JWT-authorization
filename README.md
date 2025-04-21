### Prerequisites

-Node.js

### Setup
1. Clone repository
git clone https://github.com/adinteressant/JWT-authorization.git

2. Install dependencies
cd frontend
npm install
cd ../backend 
npm install

3. create .env in backend and add the following variables
PORT = 
ACCESS_TOKEN_SECRET = 
REFRESH_TOKEN_SECRET = 

### Run the project
run frontend
npm run dev

run backend
npm run dev

-No Database:
This project does not use a database.

-Users and Posts:

    Existing users are hardcoded in backend/src/users.ts

    Posts are located in backend/src/posts.ts

-Registration:
There is no registration route — use existing accounts in the code to test login and authorization.
