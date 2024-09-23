# Calories Trackr

Welcome to **Calories Trackr**! This web app helps you monitor your daily calorie intake, considering both your food consumption and exercise activities. Built with cutting-edge technologies, this app is designed to make tracking your calorie balance easy and efficient.

## Features

- **Calorie Tracking:** Log your daily food intake and track the calories consumed.
- **Exercise Tracking:** Record your physical activities and see how many calories you've burned.
- **Real-time Updates:** Get instant updates on your calorie balance with efficient state management.
- **Responsive Design:** Enjoy a sleek, user-friendly interface optimized for all devices.

## Technologies Used

- **ReactJS:** For building interactive and dynamic user interfaces.
- **TypeScript:** For type safety and improved developer experience.
- **Vite:** For fast and optimized builds.
- **TailwindCSS:** For modern and customizable styling.
- **useMemo:** To optimize performance by memoizing expensive calculations.
- **useReducer & useContext:** For managing complex state logic and providing a scalable way to share state across components.

The application was refactored to improve state management by leveraging **reducers** and **hooks**. The refactor introduces the `useReducer` hook for managing complex state transitions, providing a more scalable and maintainable approach compared to traditional `useState`. The `useContext` hook was also employed to allow global state sharing across multiple components, improving code structure and modularity.


## 🚀 Live Demo

Check out the live version [here](https://66e29714198403085224f2f8--comfy-lebkuchen-fe63c1.netlify.app/).

## 🧑‍💻 Installation & Setup

**Clone the repository:**

```bash
git clone https://github.com/milagrosniro/calorieTrackr.git


## 🧑‍💻 Installation & Setup

**Install Dependencies:**

```bash
npm install
```
**Start the Project:**

```bash
npm run dev

The project will be available at https://66e29714198403085224f2f8--comfy-lebkuchen-fe63c1.netlify.app/
```

## 📋 Available Scripts
```bash
npm run dev: Starts the development server.
npm run build: Builds the project for production.
npm run lint: Runs ESLint to analyze the code.

 ```

## 📝 License
This project is licensed under the MIT License.
