# ================================================================
# epsihome-main-site — Production Dockerfile
# ================================================================
# Multi-stage build:
#   Stage 1 (builder) — installs deps and runs `yarn build`
#   Stage 2 (production) — serves static output with Nginx
#
# This app has ZERO environment variables — it is fully static.
# No ARGs are needed. The same image works in every environment.
# ================================================================

# ----------------------------------------------------------------
# Stage 1: Builder
# ----------------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source and build
COPY . .
RUN yarn build

# ----------------------------------------------------------------
# Stage 2: Production (Nginx static server)
# ----------------------------------------------------------------
FROM nginx:1.27-alpine AS production

# Remove default welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy compiled static site
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy Nginx config (handles SPA routing via try_files)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
