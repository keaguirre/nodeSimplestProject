# Use the official Node.js image as the base image
FROM node:lts-bullseye-slim

RUN apt-get update && apt-get install -y git
RUN apt update 

# Set the working directory inside the container
WORKDIR /app

RUN git clone https://github.com/keaguirre/nodeSimplestProject /app

# Install the dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "--watch", "src/index.js"]