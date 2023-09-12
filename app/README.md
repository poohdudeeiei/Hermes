# Frontend Document
Project name: HermesCS

Feature: Chat web application which has 2 types of chat

**Connector** : private chat for exactly 2 people. To create connector chat, two users must *CONNECT* together.

Connect: User must give other users a user's OPEN ID to chat with them. (Adding friend by giving ad ID)

**Group** : group chat for more than 2 people. To create group chat, user who is creating group can add ID of group member without needing connect each other. But must adding more than 1 person except of group creator.

This project supports text and image message. (Which image will encode to b64)

Requirements of user
- To use web app, user must be login.
- Naming a username when registering, name must be unique.
  

## Stack
- React
- Typescript
- Tailwind

## Layout Design
Three tiers of devices
- Large device (PC, Laptop) (>=1024px)
- Middle device (Tablet) (>= 768px);
- Small device (Smartphone) (<768px)

Main three display page
- Login page
- Register page
- Chat main page
## Component breakdown (Chat main page)
- Sidebar (hidden on small screen)
  - Brand display
  - Search bar
  - Filter list
  - Connector and group list
  - Settings
    - Change name
    - Logout

- Main chat
  - Chat header
  - Chat box
  - Text box
  - 
- Chat settings (hidden on small screen)
  - Wating for features