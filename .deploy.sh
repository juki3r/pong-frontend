#!/bin/bash
cd ~/public_html || exit

# Install dependencies
npm install

# Build React app
npm run build

# Move build output to public_html
rm -rf ./*
cp -r build/* ./
