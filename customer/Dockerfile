FROM node:16-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json file to the container
COPY package*.json ./

# Install the application's dependencies
RUN npm install

# Copy the rest of the application's files to the container
COPY . .

# Expose port 3000 for the application
EXPOSE 4000


# Start the application
CMD [ "npm", "start" ]