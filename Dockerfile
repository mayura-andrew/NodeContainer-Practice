# Stage 1: Build the React application
FROM node:20 AS node-builder

# Create a directory for the build
RUN mkdir /build

# Set the working directory
WORKDIR /build

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Change to the React app directory
WORKDIR /build/my-app

# Build the React application for production
RUN npm run build

# Stage 2: Serve the built application
FROM node:20-alpine

# Install serve globally
RUN npm install -g serve

# Copy the built React application from the previous stage
COPY --from=node-builder /build/my-app/build /app

# Set the working directory
WORKDIR /app

# Serve the built application
CMD ["serve", "-s", "."]