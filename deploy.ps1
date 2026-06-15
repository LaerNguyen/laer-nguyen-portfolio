# Deployment helper for GitHub Pages
# Run this from the project root after installing Git.

param(
  [string]$GitHubUsername = "your-github-username",
  [string]$RepoName = "laer-nguyen-portfolio"
)

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Host "Error: Git is not installed or not available in PATH." -ForegroundColor Red
  Write-Host "Please install Git, then reopen PowerShell and run this script again." -ForegroundColor Yellow
  exit 1
}

Write-Host "Initializing Git repository..."

git init

git add .

git commit -m "Initial portfolio deploy"

git branch -M main

git remote add origin https://github.com/$GitHubUsername/$RepoName.git

git push -u origin main

Write-Host "Done. Now go to GitHub and enable Pages for the main branch root folder."
