#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment complete! Your site should be available at http://dnuzhny.github.io"
echo "Note: It may take a few minutes for changes to propagate." 