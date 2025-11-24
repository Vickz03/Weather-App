# Deployment Guide for Advanced Weather App

The easiest way to deploy your React/Vite application for free is using **Vercel** or **Netlify**.

## Option 1: Deploy with Vercel (Recommended)

Vercel is optimized for Vite and React applications.

### Prerequisites
1. Create a [GitHub account](https://github.com/) if you don't have one.
2. Create a [Vercel account](https://vercel.com/signup) using your GitHub account.

### Steps

1. **Push your code to GitHub**
   - Initialize git in your project folder if not done:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     ```
   - Create a new repository on GitHub.
   - Link and push your code:
     ```bash
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
     git branch -M main
     git push -u origin main
     ```

2. **Import Project to Vercel**
   - Go to your [Vercel Dashboard](https://vercel.com/dashboard).
   - Click **"Add New..."** -> **"Project"**.
   - Import your `Weather-App` repository.

3. **Configure Project**
   - **Framework Preset**: Vite (should be auto-detected).
   - **Root Directory**: Click "Edit" and select `client` (since your React app is in the client folder).
   - **Environment Variables**:
     - Expand the "Environment Variables" section.
     - Key: `VITE_WEATHER_API_KEY`
     - Value: `your_actual_api_key_here` (Copy from your local .env file).
   - Click **"Deploy"**.

4. **Done!**
   - Vercel will build your site and give you a live URL (e.g., `https://your-weather-app.vercel.app`).

---

## Option 2: Drag & Drop (Netlify) - No GitHub required

If you don't want to use git/GitHub right now:

1. **Build the project locally**
   - Open your terminal in `e:\Weather app\client`.
   - Run:
     ```bash
     npm run build
     ```
   - This creates a `dist` folder in your `client` directory.

2. **Deploy to Netlify**
   - Go to [Netlify Drop](https://app.netlify.com/drop).
   - Drag and drop the `dist` folder onto the page.
   - Your site will be live instantly!

3. **Add API Key (Important)**
   - Go to "Site settings" -> "Build & deploy" -> "Environment".
   - Add variable: `VITE_WEATHER_API_KEY` with your key.
   - You might need to trigger a re-deploy (or just use the manual build method which bakes it in, but environment variables are safer).
   *Note: For manual drag-and-drop builds, the API key from your local `.env` is usually baked into the build during `npm run build`, so you might not need to set it on Netlify if you built it locally with the key present.*

## Troubleshooting

- **API Key Issues**: Ensure the variable name is exactly `VITE_WEATHER_API_KEY`.

### 🛑 Fixing "404: NOT_FOUND" on Vercel
If you see a 404 error after deploying, it's because Vercel is looking in the wrong folder.

**Fix it in 30 seconds:**
1. Go to your **Vercel Dashboard** -> Select your project.
2. Click **Settings** (top tab) -> **General** (left menu).
3. Find **"Root Directory"**.
4. Click **Edit** and type: `client`
5. Click **Save**.
6. Go to **Deployments** tab and click **Redeploy** (3 dots menu).
