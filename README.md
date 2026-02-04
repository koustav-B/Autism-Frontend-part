# Autism Support Platform — Frontend

This repository contains a static front-end for the Autism Support Platform: a single-page HTML/CSS/JS app with sections for screening, speech therapy, sign language practice, emotion detection, therapeutic games, doctor appointment booking (client-side), social services and resources.

## Deploying

Below are simple options to deploy this static site.

1) GitHub Pages (recommended for static sites)

 - Create a GitHub repository and push this project to it.
 - This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that will automatically deploy the repository root to GitHub Pages when you push to the `main` (or `master`) branch.
 - Make sure Pages is enabled in the repository Settings -> Pages (the Actions workflow will create the deployment automatically).

Commands to push (from local repo root):

```bash
git add .
git commit -m "Add site and GitHub Pages workflow"
git push origin main
```

2) Netlify or Vercel (zero-config)

 - Drag & drop the project folder in Netlify's dashboard or connect the repo for continuous deploys.
 - For Vercel, import the GitHub repository and deploy — it's a static site so no build step is required.

3) Docker (self-host)

Build and run locally or on any Docker-enabled host:

```bash
# build image
docker build -t autism-support-frontend:latest .

# run container
docker run -p 8080:80 autism-support-frontend:latest
# open http://localhost:8080
```

4) Quick local server for testing

```bash
# Python 3
python -m http.server 8000
# open http://localhost:8000
```

## Notes

- This is a purely client-side frontend. Appointments and chat are stored in-memory in the browser; add a backend for persistence.
- The repo contains a GitHub Actions workflow and a `Dockerfile` so you can choose CI-based hosting (Pages) or container-based hosting.
