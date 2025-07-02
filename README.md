<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">A scalable and production-ready <a href="http://nestjs.com" target="_blank">NestJS</a> boilerplate with built-in JWT authentication, Prisma ORM, Swagger API docs, and more.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank">
    <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank">
    <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" />
  </a>
  <a href="https://www.npmjs.com/package/@nestjs/common" target="_blank">
    <img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" />
  </a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank">
    <img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord" />
  </a>
</p>

---
something chnaged


## 🚀 Features

- ✅ Authentication with JWT & Passport
- ✅ Role-based authorization
- ✅ Prisma ORM (PostgreSQL ready)
- ✅ Swagger auto-generated API documentation
- ✅ Global validation with `class-validator`
- ✅ Request lifecycle logging
- ✅ Easy to extend and scale

---

## 📁 Project Structure

<pre>

prisma/                 # Prisma service
src/
│
├── auth/               # Auth module (login, register, JWT, guards)
├── database/           # Database connection
├── users/              # Users module (CRUD, roles)
├── common/             # Guards, decorators, interceptors, filters
├── app.module.ts       # Root module
└── main.ts             # Entry point

</pre>

---

## 🧰 Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/nestjs-boilerplate.git

cd nestjs-boilerplate

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

## ⚙️ Prisma Setup

```bash
# Push Prisma schema to DB
npx prisma db push

# Or generate SQL migration
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate
```

## 🏃 Run the App

```bash
# Dev mode with hot reload
npm run start:dev

# Production build
npm run build
npm run start:prod

```

## 🔐 Auth Flow

- **Register** → `POST /auth/register`
- **Login** → `POST /auth/login` → Returns JWT
- Use token in `Authorization: Bearer <token>` header

## 🧪 Test

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:cov
```

## 📖 API Docs (Swagger)

Once running, go to:  
➡️ [http://localhost:3000/api/docs](http://localhost:3000/api/docs)
