# Portfolio

![Portfolio](https://github.com/ryanro97/portfolio/blob/master/portfolio.png)

A lightweight, minimalist, and responsive portfolio website template written in React, using Next.js and styled-components.

## Setup Development Server
Install [Docker Compose](https://docs.docker.com/compose/install/)

Run the following commands:
```
cp .env.example .env.local
```
Complete .env.local with GitHub username and [personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

```
docker-compose up -d --build
```
Development server runs on http://localhost:1997 by default.

## Deploy
Deploy for free using [Vercel](https://vercel.com) (supports custom domains).

Note: Set production [environment variables](https://vercel.com/docs/v2/build-step#environment-variables) before deployment for all features to work.
