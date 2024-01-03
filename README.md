
# Berry On Mars

**Berry On Mars** is a sample project I've implemented for a company in Germany. The project has been implemented by using Next.js 14 and its API endpoints, TanStack Table for grid section, React Query for HTTP/HTTPS requests, Jest and React Testing Library for unit tests, TailwindCSS and Material-UI for UI, etc.

## Demo
You can check it out: [Demo](https://berry-on-mars.vercel.app)

## Features
- Admin Log In
- Products Grid

## Running
After cloning the project, install dependencies by using `npm i` command or related ones in other package managers such as `yarn`, etc.
Then, run `npm run dev` to run the project in development mode.
You can use `npm run build` and `npm run start` to run in production mode.
After running the project, you face a login page. The correct credentials are **Admin** for username and **1234** for password. After logging in, you would be redirected to grid page. You can handle CRUD operations in the page, you can add product, delete or even edit it. Also, there is filtering dropdown in order to filter the products based on their category title.

## Running Tests
Some unit tests have been written for the components of the project. You can check them out in **__tests__** folder. To run and verify the tests, you can use `npm run test` or `npm run test:watch` for watching changes in the test files and re-run them again automatically.



