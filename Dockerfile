FROM node

COPY package.json .
COPY . .
RUN npm install
RUN npm install -g typescript
RUN tsc -p tsconfig.json

EXPOSE 8090

CMD node dist/server.js
