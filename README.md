# Maintenance Page Setup

This repository contains a simple maintenance page built with Next.js using TypeScript, Tailwind CSS, and the App Router. This page is designed to return a `503 Service Unavailable` status code and display a customizable maintenance message, including a generic company logo.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Deployment to Cloudflare Pages](#deployment-to-cloudflare-pages)
- [Customization](#customization)
- [AI Tools Disclosure](#ai-tools-disclosure)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/licrow/my-maintenance-page.git
   cd my-maintenance-page
   ```

2. **Install dependencies:**

   Ensure you have Node.js and npm installed. Then, install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Run the development server:**

   Start the development server to preview the maintenance page locally:

   ```bash
   npm run dev
   ```

   The page should be available at `http://localhost:3000`.

## Configuration

### Middleware

The `middleware.ts` file handles setting the `503` status code and rewriting requests to the maintenance page.

### Logo

To customize the logo:

1. Replace the `logo.png` file in the `public` directory with your company's logo.
2. The image will automatically be displayed on the maintenance page.

### Tailwind CSS

You can customize the styling of the page by modifying the Tailwind CSS classes in `app/page.tsx`. Tailwind CSS is already configured in the project, so any changes you make will be reflected immediately.

## Deployment to Cloudflare Pages

To deploy this maintenance page on Cloudflare Pages, follow these steps:

1. **Login to Cloudflare:**

   Log in to your Cloudflare account at [https://dash.cloudflare.com](https://dash.cloudflare.com).

2. **Create a new Cloudflare Pages project:**

   - Go to the "Pages" section in the Cloudflare dashboard.
   - Click on "Create a project".
   - Connect your GitHub repository containing the maintenance page code.

3. **Configure build settings:**

   - **Build command:** `npm run build`
   - **Output directory:** `.next`

   Make sure the output directory matches the default for Next.js when building for static export.

4. **Deploy the project:**

   Once configured, trigger a deployment. Cloudflare Pages will build and deploy the maintenance page.

5. **Custom Domain (Optional):**

   If you want to deploy this under a custom domain, configure your domain in the Cloudflare dashboard and link it to your Cloudflare Pages project.

## Customization

### Customizing Text and Layout

You can customize the text and layout of the maintenance page by editing the `app/page.tsx` file. The content is structured in a way that allows easy updates to the maintenance message, styling, and structure.

### Updating the Estimated Downtime

If you want to display an estimated time for how long the maintenance will last, simply update the text in the `page.tsx` component under the `<p>` tag with the class `"text-sm text-gray-500"`.

## AI Tools Disclosure

This project was developed with the assistance of AI tools, specifically OpenAI's ChatGPT, which was used to generate code, provide architectural guidance, and draft documentation. The generated content has been reviewed and modified to meet the specific requirements of this project.
