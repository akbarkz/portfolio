# Client Dockerfile
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package.json yarn.lock* ./
RUN yarn install

# Copy source code
COPY . .

# Build the application with environment variables
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
RUN yarn build

# Production stage - serve with nginx
FROM nginx:alpine

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
