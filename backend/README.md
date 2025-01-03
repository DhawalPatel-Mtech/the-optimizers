# Expense Tracker

This project is a comprehensive expense tracker application designed to manage and monitor personal or organizational expenses efficiently. The backend is powered by NestJS, with Prisma as the ORM and PostgreSQL as the database.

## Features

### 1. Database Management

- **Prisma ORM**: Streamlined database interaction with type-safe queries and schema management.
- **PostgreSQL**: Reliable and scalable database for storing expense data.

### 2. Expense Tracking

- CRUD operations for managing expenses.
- Categorization of expenses for better organization.
- CRUD Transactions of expenses for better visualization.
- Support for filtering and sorting expense records.

### 3. User Management

- Secure user authentication and authorization.
- Support for multiple users, allowing shared expense tracking.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- [NestJS CLI](https://docs.nestjs.com/cli/overview)
- [Prisma CLI](https://www.prisma.io/docs/concepts/components/prisma-cli)
- [PostgreSQL](https://www.postgresql.org/) installed and running.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DhawalPatel-Mtech/the-optimizers.git
   cd the-optimizers/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:

   - Create a `.env` file in the root directory.
   - Define the necessary variables (refer to `.env.example` for guidance).
   - Example configuration:
     ```env
     DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
     ```

4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

### Running the Application

- Development mode:
  ```bash
  npm run start:dev
  ```

## API Documentation

- Comprehensive API documentation is available via Swagger.
- Visit `http://localhost:<port>` to explore and test the API.

## Database Schema

The database schema is managed using Prisma and includes the following core tables:

- **Users**: Stores user information.
- **Expenses**: Tracks expense details, including amount, date, and category.
- **Categories**: Predefined and user-defined categories for expense classification.
