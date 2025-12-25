# Nour Dental - Modern Dental Clinic Website

This is a modern, responsive, and performant website for a dental clinic called "Nour Dental". It's built with Next.js and Tailwind CSS, and it includes features like online appointment booking and an AI-powered FAQ chatbot.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1.  Install NPM packages
    ```sh
    npm install
    ```
2.  Set up environment variables. Create a `.env` file in the root of the project and add your Google AI API key:
    ```
    GEMINI_API_KEY=YOUR_API_KEY
    ```
3.  Run the development server:
    ```sh
    npm run dev
    ```
4.  Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Key Features

- **Responsive Design**: Fully responsive layout that looks great on all devices, from mobile phones to desktop computers.
- **Appointment Booking**: An easy-to-use form for patients to book their appointments.
- **AI FAQ Chatbot**: An intelligent chatbot powered by Google's Gemini model to answer frequently asked questions about the clinic and its services.
- **Dynamic Components**: Components are loaded dynamically to improve initial page load speed.
- **Optimized Performance**: Built with performance in mind using Next.js features like optimized images and font loading.

## Deployment

This application is configured for easy deployment with [Firebase App Hosting](https://firebase.google.com/docs/app-hosting). You can deploy it by connecting your repository to a Firebase App Hosting backend. The `apphosting.yaml` file contains the basic configuration for deployment.