# Learn Lingo

**Learn Lingo** is an online platform designed for language learners. It connects users with
language teachers through an intuitive interface, enabling users to find, filter, and book lessons
with language professionals. This project utilizes React, Firebase, and modern web technologies to
deliver a seamless user experience.

## Features

- **Home Page**: Introduction to the platform with a list of key advantages and a CTA
  (call-to-action) button to get started.
- **Teachers Page**: Browse and filter a list of language teachers based on:
  - Teaching languages
  - Student levels
  - Hourly rate
- **Favorites Page**: Manage a personalized list of favorite teachers.
- **Firebase Authentication**: Includes sign-up, login, and logout functionality for registered
  users.
- **Teacher Details**: View more information about individual teachers, including reviews and past
  lesson details.
- **Booking**: Book trial lessons directly from the teacher's card with validation forms.

## Design

The UI/UX design for Learn Lingo is available on Figma. You can view the layout and design
specifications here:

[Learn Lingo Figma Layout](https://www.figma.com/design/dewf5jVviSTuWMMyU3d8Mc/Learn-Lingo?node-id=0-1&node-type=canvas&t=lKYDEQzW2WtgGwWJ-0)

Please refer to this design while developing to ensure consistency in the user interface.

## Technologies Used

- **Frontend**: React, React Router, Redux Toolkit, Vite
- **Backend**: Firebase Realtime Database
- **Authentication**: Firebase Authentication
- **Styling**: SCSS, modern-normalize
- **Form Validation**: React Hook Form & Yup
- **State Management**: React-Redux with redux-persist
- **Other Libraries**: react-select, react-hot-toast, react-loader-spinner, react-helmet-async

## Installation and Setup

To get started with this project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YevhenKharchenko/learn-lingo.git
   cd learn-lingo
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Firebase Setup:**

   - Go to Firebase Console, create a new project, and add a Firebase Realtime Database.
   - Create a collection for teachers with fields like name, surname, languages, levels, rating,
     etc. as outlined in the technical requirements.
   - Enable Firebase Authentication (Email/Password).
   - Create a `.env` file at the root of your project and add your Firebase configuration like so:

     ```
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   The app will be available at http://localhost:5173.

## Usage

- On the Home Page, click "Get Started" to navigate to the Teachers Page.
- On the Teachers Page, you can filter teachers by language, student level, and price per hour.
- Sign up or log in to add teachers to your Favorites.
- You can view detailed teacher profiles and book trial lessons.
- Manage your favorite teachers on the Favorites Page.

## Key Functionality

- **Authentication**: Users must log in to add teachers to their favorites or book lessons.
- **Favorites Management**: Teachers can be added to or removed from the favorites list. The app
  ensures that favorite selections persist across sessions.
- **Teacher Cards**: The "Read more" button expands the teacher card to display additional
  information and reviews. Clicking on "Book trial lesson" opens a modal for booking.

## Additional Features

- **Responsive Design**: The app is fully responsive and optimized for desktop and mobile devices.
- **Load More Functionality**: The Teachers Page initially shows 4 teacher cards, with an option to
  load more via a "Load more" button.
- **Modals**: React Hook Form and Yup are used for form handling, including booking forms and
  authentication modals.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please fork this repository and create a pull request for any proposed
changes or improvements.
