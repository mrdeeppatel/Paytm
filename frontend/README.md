
# React Money Transfer App

This project is a React app where users can:

- Create an account and receive an initial balance.
- Search for other users using **input debouncing** for optimized performance.
- Send money to other users securely.

## Features

- **Account Creation**: Users can register and get an initial balance.
- **User Search**: Input debouncing ensures smooth and efficient search functionality.
- **Money Transfer**: Users can transfer money to others in just a few clicks.
- **Secure Authentication**: JWT is used for user authentication and secure operations.
- **Backend Development**: Built with Express.js for API creation.
- **Database**: Data is stored in MongoDB, and Mongoose is used for efficient data handling.

## Technologies Used

### Frontend
- React

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Other Tools
- JWT for authentication

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd paytm
   ```

3. Install dependencies for the frontend and backend:
   ```bash
   cd backend
   npm install
   ```

4. Start the backend server:
   ```bash
   cd backend
   node index.js
   ```

5. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Key Learnings

- **Input Debouncing**: Optimized search requests to improve performance.
- **JWT Authentication**: Ensured secure user authentication and data protection.
- **Full-Stack Development**: Combined React, Express.js, and MongoDB for a seamless experience.

## Future Enhancements

- Add a transaction history feature.
- Enhance the UI for better user experience.
- Implement additional security measures like rate limiting and encryption.

## Contributing

Feel free to fork the project and submit pull requests. Suggestions and improvements are always welcome!

## License

This project is licensed under the MIT License.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
