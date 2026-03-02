# -------- Step 1: Build Stage --------
FROM node:18 as build

WORKDIR /testApp
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# -------- Step 2: Production Stage --------
FROM nginx:alpine

COPY --from=build /testApp/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

    

