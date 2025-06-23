# Chronos-API

**Chronos-API** is a backend service for a changelog application that allows product managers to publish product updates, feature announcements, and bug fixes to users. Built with Node.js, Express, TypeScript, Prisma, and Jest, this RESTful API supports full CRUD operations and role-based access control.

## 🚀 Features

- 📦 Create, read, update, and delete product updates
- 👥 Role-based permissions for managers and users
- 🧪 Unit and integration tests using Jest
- 🛡️ Type-safe and scalable backend using TypeScript
- 🗃️ Prisma ORM for clean and efficient database interaction

---

## 🛠️ Tech Stack

- **Node.js** – Runtime environment
- **Express.js** – Web framework
- **TypeScript** – Strong typing and scalability
- **Prisma** – ORM for database modeling and querying
- **Jest** – Testing framework
- **PostgreSQL** – (or any other database supported by Prisma)

---

## 📁 Project Structure
<pre>
chronos-api/  
  ├── prisma/  
     │ └── migrations/  
     │ └── schema.prisma 
  ├── src/ 
     │ ├── tests/ 
     │ ├── config/ 
     │ ├── handlers/ 
     │ ├── modules/ 
     │ ├── db.ts 
     │ └── index.ts 
     │ └── router.ts 
     │ └── server.ts 
  ├── README.md 
  ├── jest.config.js 
  ├── package-lock.json 
  ├── package.json 
  └── tsconfig.json 
</pre>



---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/chronos-api.git
cd chronos-api
2. Install dependencies
  npm install
3. Set up the database
  npx prisma generate
  npx prisma migrate dev --name init
4. Start the server
  npm run dev
Running Tests
  npm run test
Jest is used for unit and integration testing to ensure all endpoints behave as expected and edge cases are handled.

📖 API Endpoints Overview
Method	Endpoint	Description	Access
GET	/update	Get all product updates	Public
GET	/update/:id	Get a specific product update	Public
POST	/update	Create a new product update	Manager only
PUT	/update/:id	Update a product update	Manager only
DELETE	/update/:id	Delete a product update	Manager only
