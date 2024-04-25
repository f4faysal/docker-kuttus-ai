FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN ["chmod" , "+x" , "./entrypoint.sh"]
ENTRYPOINT [ "sh" , "./entrypoint.sh" ]