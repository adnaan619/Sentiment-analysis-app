//Specifies the base image and this is the environment the application  will run in
FROM node:14
//sets the working directory inside the docker container
WORKDIR /app
//Copies the package.json and package-lock-json files into the working directory in the docker container
COPY package*.json ./
//Installs the node.js applications dependencies inside the docker container
RUN npm Install
//Copies the rest of the backend files into the docker container
COPY . .
//Tells Docker the port to listen to
EXPOSE 4000
//This command starts the nodejs application 
CMD ["node", "server.js"]

