# # frontend/Dockerfile

# FROM node:20-alpine

# WORKDIR /app

# # Install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy source code and build
# COPY . .
# RUN npm run build

# # Install and use a static server
# RUN npm install -g serve
# CMD ["serve", "-s", "dist", "-l", "3000"]

FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .                    
RUN npm run build           # Builds dist/ folder

RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "3000"]
