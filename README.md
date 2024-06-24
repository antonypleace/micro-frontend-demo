# Micro Frontend Demo

This is a demo project showcasing a micro frontend architecture using Docker and Docker Compose.

## Author
**Author**: Antony Pleace  
**Email**: antony.pleace@symbol8.com

## Prerequisites

- Docker
- Docker Compose
- Node.js

## Getting Started

To get the project up and running, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Update your hosts file with the following entry:

### Windows
Open the hosts file located at `C:\Windows\System32\drivers\etc\hosts`.

### Linux
Open the hosts file located at `/etc/hosts`.

### Mac
Open the hosts file located at `/private/etc/hosts`.


### Host File Entry
Add the following entry to your hosts file:
```bash
192.168.1.7 app1.demo.symbol8.com
192.168.1.7 app2.demo.symbol8.com
192.168.1.7 container.demo.symbol8.com
```
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

## Technologies Used

Docker (26.1.2)  
Docker Compose (2.20.3)  
React  
Webpack  
node.js (20.14.0)  


## Project Structure
* **app1/**: Contains the source code for App1.  
* **app2/**: Contains the source code for App2.  
* **container**/: Contains the source code for the container application.  


## Contributing
Contributions are welcome. Please open a pull request with your changes.

## License
This project is licensed under the MIT License.
