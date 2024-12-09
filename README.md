
# Express-TS Decorators

A lightweight and modern decorator library for **Express.js** written in **TypeScript**. This library simplifies route definitions, middleware application, and error handling by leveraging the latest ECMAScript decorators (TypeScript 5+).

---

## Features

- 🚀 **Route Handlers**: Define routes declaratively using `@Route` decorators.
- 🛡️ **Middleware Support**: Attach middleware to specific routes with `@Middleware`.
- ❌ **Error Handlers**: Handle errors elegantly with `@ErrorHandler`.
- 🗂️ **Controller Organization**: Group related routes with `@Controller`.
- 🌐 **Extensibility**: Easily extendable for custom use cases.

---

## Getting Started

### Installation

Install the library using npm or yarn:

```bash
npm install libexpress
```

or

```bash
yarn add libexpress
```

---

### Usage

#### 1. Create a Controller

```typescript
import { Route, Middleware, Controller } from "libexpress";

@Controller("/api/users")
class UserController {
  @Get("/")
  getAllUsers(req, res) {
    res.send("List of users");
  }

  @Middleware(authMiddleware)
  @Post("/create")
  createUser(req, res) {
    res.send("User created");
  }
}
```

---

#### 2. Register Controllers

```typescript
import express from "express";
import { registerControllers } from "libexpress";
import { UserController } from "./controllers/UserController";

const app = express();
app.use(express.json());

registerControllers(app, [UserController]);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

---

### API Reference

#### `@Get(path: string)`
Defines a GET route for the controller method.

- `path`: URL path.

#### `@Post(path: string)`
Defines a POST route for the controller method.

- `path`: URL path.

#### `@Put(path: string)`

Defines a PUT route for the controller method.

- `path`: URL path.

#### `@Patch(path: string)`

Defines a PATCH route for the controller method.

- `path`: URL path.

#### `@Delete(path: string)`

Defines a DELETE route for the controller method.

- `path`: URL path.

---

### Contributing

Contributions are welcome! To get started:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

### License

This project is licensed under the [MIT License](LICENSE).

---

### Feedback

If you find this library useful or have suggestions, feel free to open an issue or submit a pull request!

Happy coding! 🚀
