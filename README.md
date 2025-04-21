### Prerequisites

-Node.js

### Clone repository
    git clone https://github.com/adinteressant/JWT-authorization.git

### Install dependencies
    cd frontend
    npm install
    cd ../backend 
    npm install

### Create .env in backend and add
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
