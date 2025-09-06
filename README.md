# Transaction Microservice

A robust, scalable transaction management microservice built with NestJS, TypeScript, Prisma, PostgreSQL, Docker and Swagger. This service provides comprehensive transaction lifecycle management with real-time status tracking, validation, and API documentation.

## 🚀 Technologies Used

### Core Framework
- **[NestJS](https://nestjs.com/)** - Progressive Node.js framework for building efficient and scalable server-side applications
- **[TypeScript](https://www.typescriptlang.org/)** - Strongly typed JavaScript for enhanced developer experience and code reliability

### Database & ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Robust, open-source relational database system
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM with type-safe database access and migrations
- **[pgAdmin](https://www.pgadmin.org/)** - Web-based PostgreSQL administration and development platform

### API & Documentation
- **[Swagger/OpenAPI](https://swagger.io/)** - Interactive API documentation and testing interface
- **[class-validator](https://github.com/typestack/class-validator)** - Decorator-based validation for DTOs

### Development & Testing
- **[Jest](https://jestjs.io/)** - Comprehensive testing framework with coverage reporting
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[Prettier](https://prettier.io/)** - Code formatting and style consistency
- **[Docker](https://www.docker.com/)** - Containerization for consistent development and deployment

## 📋 Features

- **Transaction Management**: Create, read, and manage transaction records
- **Status Tracking**: Real-time transaction status monitoring (PENDING, COMPLETED, FAILED)
- **Data Validation**: Comprehensive input validation using decorators
- **API Documentation**: Interactive Swagger UI for API exploration
- **Database Migrations**: Version-controlled database schema management
- **Type Safety**: Full TypeScript support with Prisma-generated types
- **Testing Suite**: Unit and E2E testing with Jest
- **Docker Support**: Containerized development and deployment

## 🏗️ Architecture

```
src/
├── main.ts                 # Application bootstrap and Swagger setup
├── prisma/
│   ├── prisma.module.ts   # Prisma module configuration
│   └── prisma.service.ts  # Database service wrapper
└── transaction/
    ├── dto/
    │   └── create-transaction.dto.ts  # Data transfer objects
    ├── entities/
    │   └── transaction.entity.ts      # Domain entities
    ├── transaction.controller.ts      # REST API endpoints
    ├── transaction.service.ts         # Business logic
    └── transaction.module.ts          # Module configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone `https://github.com/asabahebwa/transaction-microservice.git`
   cd transactionservice
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   # Database Configuration
   DATABASE_URL="postgresql://username:password@localhost:5432/transactiondb"
   POSTGRES_USER=username
   POSTGRES_PASSWORD=password
   POSTGRES_DB=transactiondb
   POSTGRES_PORT=5432

   # pgAdmin Configuration
   PGADMIN_DEFAULT_EMAIL=admin@example.com
   PGADMIN_DEFAULT_PASSWORD=admin
   PGADMIN_PORT=5050
   ```

4. **Start the database**
   ```bash
   docker-compose up -d
   ```

5. **Run database migrations**
   ```bash
   npx prisma migrate dev
   ```

6. **Generate Prisma client**
   ```bash
   npx prisma generate
   ```

### Development

```bash
# Start development server with hot reload
npm run start:dev

# Start in debug mode
npm run start:debug

# Build for production
npm run build

# Start production server
npm run start:prod
```

## 📚 API Documentation

Once the application is running, access the interactive API documentation at:

- **Swagger UI**: http://localhost:3000/api
- **pgAdmin**: http://localhost:5050 (Database administration)

### Available Endpoints

- `POST /transaction` - Create a new transaction
- `GET /transaction` - Retrieve all transactions
- `GET /transaction/:id` - Retrieve a specific transaction

## 🗄️ Database Schema

The service uses the following database schema:

```sql
model Transaction {
  id          Int      @id @default(autoincrement())
  status      Status
  accountId   String   @default(uuid())
  description String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

enum Status {
  PENDING
  COMPLETED
  FAILED
}
```

## 🐳 Docker Deployment

The service includes Docker Compose configuration for easy deployment:

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the [NestJS Documentation](https://docs.nestjs.com/)
- Visit the [Prisma Documentation](https://www.prisma.io/docs/)

---

**Built with ❤️ using NestJS, Prisma, and PostgreSQL**