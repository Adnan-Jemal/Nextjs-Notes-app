# Next.js Notes App

## Overview

This is a simple notes application built with Next.js and Firebase. It allows users to create, read, update, and delete notes. Firebase is used for user authentication and Firestore is used as the database to store the notes.

## Features

- User Authentication: Sign up, log in, and log out functionality using Firebase Authentication.
- CRUD Operations: Create, read, update, and delete notes.
- Firestore Database: Notes are stored in a Firestore database, allowing for instant updates across all clients.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your local machine.
- A Firebase account.

### Installation

1. Clone the repository to your local machine using `git clone`.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Create a `.env.local` file in the root of your project and insert your Firebase configuration like this:
    ```
    NEXT_PUBLIC_FIREBASE_API_KEY=...
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
    NEXT_PUBLIC_FIREBASE_APP_ID=...
    ```
5. Run the development server using `npm run dev`.

## Built With

- Next.js - The React framework used.
- Firebase - Used for authentication and Firestore database.
