# CLAUDE.md - Development Guide

## Project Overview

This is a micro-frontend demo application using React 17, Express.js, Webpack 5 Module Federation, and Nginx reverse proxy.

## Structure

```
├── container/     # Main shell application (port 3000)
├── app1/          # Micro frontend 1 (port 3001)
├── app2/          # Micro frontend 2 (port 3002)
├── nginx.conf     # Reverse proxy configuration
└── docker-compose.yml
```

## Running the Application

### Option 1: Docker Compose (Recommended)

```bash
docker compose up --build
```

This starts all services:
- Container: http://localhost:3000
- App1: http://localhost:3001
- App2: http://localhost:3002
- Nginx proxy: http://localhost:80

### Option 2: Run Directly with Node.js

Install dependencies and start each app in separate terminals:

```bash
# Terminal 1 - Container
cd container && npm install && npm start

# Terminal 2 - App1
cd app1 && npm install && npm start

# Terminal 3 - App2
cd app2 && npm install && npm start
```

### Option 3: Development Mode (with hot reload)

```bash
# In each app directory
npm run start-dev
```

## Hosts File Configuration

For the Nginx proxy to work properly, add to `/etc/hosts`:

```
127.0.0.1 app1.demo.symbol8.com
127.0.0.1 app2.demo.symbol8.com
127.0.0.1 container.demo.symbol8.com
```

## Useful Commands

```bash
# Build a specific app
docker compose build app1

# Restart a specific service
docker compose up -d app1

# Clean up everything
docker compose down --rmi all --volumes --remove-orphans

# Build webpack bundle (in any app directory)
npm run build
```

## Key Files

- `*/bin/www` - Express server entry point
- `*/webpack.config.js` - Module Federation configuration
- `*/src/App.jsx` - Main React component
