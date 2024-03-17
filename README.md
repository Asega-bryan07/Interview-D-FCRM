## A simple Desktop Application
The Application has a simple front-end client; ReactJS app, able to switch two different pages<br>
using its links that can receive and send data to the backend. 
The implementation saves and retrieves user data.

## Structure
This project is structured as follows:<br>
project-root/<br>
│<br>
├── backend/            // Backend scripts - NestJS<br>
│   ├── src/<br>
│   │   ├── user/       // User module<br>
│   │   │   ├── user.controller.ts<br>
│   │   │   ├── user.service.ts<br>
│   │   │   ├── user.entity.ts<br>
│   │   │   └── user.module.ts<br>
│   │   ├── main.ts     // Entry point for NestJS application<br>
│   │   └── ...         // Other backend files<br>
│   ├── package.json<br>
│   └── tsconfig.json<br>
│<br>
└── frontend/           // Frontend - ReactJS<br>
    ├── public/<br>
    │   ├── index.html<br>
    │   └── ...<br>
    │<br>
    ├── src/<br>
    │   ├── components/<br>
    │   │   ├── HomePage.tsx<br>
    │   │   ├── UserPage.tsx<br>
    │   │   └── ...<br>
    │   ├── services/<br>
    │   │   └── ApiService.ts<br>
    │   ├── App.tsx<br>
    │   └── index.tsx<br>
    │<br>
    ├── package.json<br>
    ├── tsconfig.json<br>
    └── ...


```By: Eng. Bryan Asega```