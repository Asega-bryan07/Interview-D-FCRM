## A simple Desktop Application
The Application has a simple front-end client; ReactJS app, able to switch two different pages<br>
using its links that can receive and send data to the backend. 
The implementation saves and retrieves user data.

## Structure
This project is structured as follows:<br>
project-root/
│
├── backend/            // Backend scripts - NestJS
│   ├── src/
│   │   ├── user/       // User module
│   │   │   ├── user.controller.ts
│   │   │   ├── user.service.ts
│   │   │   ├── user.entity.ts
│   │   │   └── user.module.ts
│   │   ├── main.ts     // Entry point for NestJS application
│   │   └── ...         // Other backend files
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/           // Frontend - ReactJS
    ├── public/
    │   ├── index.html
    │   └── ...
    │
    ├── src/
    │   ├── components/
    │   │   ├── HomePage.tsx
    │   │   ├── UserPage.tsx
    │   │   └── ...
    │   ├── services/
    │   │   └── ApiService.ts
    │   ├── App.tsx
    │   └── index.tsx
    │
    ├── package.json
    ├── tsconfig.json
    └── ...

```By: Eng. Bryan Asega```