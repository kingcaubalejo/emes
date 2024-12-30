# Event Management Engine System for Church

## Overview
The Event Management Engine System is a web-based application designed to streamline event planning, scheduling, and management for church organizations. Built using Angular 19, the system provides an intuitive interface for creating and managing events, tracking attendance, and coordinating volunteers.

## Features
- **Dashboard**: Centralized view of all activities and statistics.
- **People Management**:
  - Manage **Pastors**, **Leaders**, and **Campers**.
- **Group Management**:
  - Organize **Churches** and **Teams**.
- **Schedules & Plans**: Create and manage event schedules and plans.
- **Reports**:
  - Generate detailed reports, including **Camper IDs**.
  - Newly added feature to manage Camper IDs.
- **User Management**: Role-based access control for administrators, event organizers, and volunteers.

## Prerequisites
Before running the application, ensure the following tools are installed:

- **Node.js**: v16 or later
- **Angular CLI**: v19
- **npm**: v7 or later
- A modern web browser (e.g., Chrome, Firefox)
- Docker: v20 or later (for running with Docker)

## Installation (Local Development)

1. Clone the repository:
   ```bash
   git clone https://github.com/kingcaubalejo/emes
   cd emes
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create an `environment.ts` file in the `src/environments` directory.
   - Add your application-specific configuration (e.g., API URLs, third-party service keys).

4. Run the development server:
   ```bash
   ng serve
   ```
   Open your browser and navigate to `http://localhost:4200`.

## Running the App with Docker

1. Build the Docker image:
   ```bash
   docker build -t emes .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 80:80 emes
   ```

## Project Structure
```plaintext
src/
├── app/
│   ├── icons/         
│   ├── layout/          
│   ├── views/             
│   ├── pages/              
│   └── app.module.ts       
├── assets/                 
├── environments/           
├── index.html              
└── styles.css          
```

## Scripts
- **Start Development Server**:
  ```bash
  npm start
  ```
- **Build for Production**:
  ```bash
  ng build --prod
  ```
- **Run Tests**:
  ```bash
  ng test
  ```
- **Lint Code**:
  ```bash
  ng lint
  ```

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit changes and push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
4. Submit a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For any questions or feedback, please reach out to [lokokram22@gmail.com](mailto:lokokram22@gmail.com).

