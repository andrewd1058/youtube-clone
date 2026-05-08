# Stage 1: Build the application
FROM node:22 AS builder

WORKDIR /app

# Copy package*.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy other source code files
COPY . .

# Build the app
RUN npm run build

# Stage 2: Production stage, reduces the size of the image
FROM node:22

WORKDIR /app

COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy built files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

# Expose the listening port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]