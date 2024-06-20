# Micro Frontend Demo

This is a demo project showcasing a micro frontend architecture using Docker and Docker Compose.

## Author
Author: Antony Pleace
Email: antony.pleace@symbol8.com

## Prerequisites

- Docker
- Docker Compose

## Getting Started

To get the project up and running, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the following command to build and start the project:

```bash
docker-compose up --build
```

## Commands

Run the project: 
```bash
docker-compose up --build
```

Clean up: 
```bash
docker-compose down --rmi all --volumes --remove-orphans
```

Build a specific app: 
```bash
docker-compose build app1
```

Refresh a specific app (no complete restart required): 
```bash
docker-compose up -d app1
```

## Contributing
Contributions are welcome. Please open a pull request with your changes.

License
This project is licensed under the MIT License.