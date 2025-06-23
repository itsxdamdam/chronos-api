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

chronos-api/ 
  ├── prisma/ 
    │ └── migrations/ <br/>
    │ └── schema.prisma <br/>
  ├── src/ <br/>
    │ ├── tests/ <br/>
    │ ├── config/ <br/>
    │ ├── handlers/ <br/>
    │ ├── modules/ <br/>
    │ ├── db.ts <br/>
    │ └── index.ts <br/>
    │ └── router.ts <br/>
    │ └── server.ts <br/>
  ├── README.md <br/>
  ├── jest.config.js <br/>
  ├── package-lock.json <br/>
  ├── package.json <br/>
  └── tsconfig.json <br/>

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
GET	/updates	Get all product updates	Public
GET	/updates/:id	Get a specific product update	Public
POST	/updates	Create a new product update	Manager only
PUT	/updates/:id	Update a product update	Manager only
DELETE	/updates/:id	Delete a product update	Manager only

Authentication and authorization middleware required for protected routes.

