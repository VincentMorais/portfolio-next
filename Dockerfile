FROM node:16.18.0-alpine3.16
WORKDIR /app

# Install dependencies
COPY package.json ./
COPY next.config.js ./
COPY next-env.d.ts ./
COPY .next/ ./.next/
COPY public/ ./public/
RUN yarn install --prod
EXPOSE 3000
CMD ["yarn", "start"]