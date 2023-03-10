# Docker instructions are stored here
FROM ubi8/nodejs-18 AS builder

LABEL maintainer="Le Minh Pham <phaml15@mcmaster.ca>"
LABEL description="Demo for digital business card"

# We default to use port 8080 in our service
ENV PORT=8080

# Reduce npm spam when installing within Docker
# https://docs.npmjs.com/cli/v8/using-npm/config#loglevel
ENV NPM_CONFIG_LOGLEVEL=warn

# Disable colour when run inside Docker
# https://docs.npmjs.com/cli/v8/using-npm/config#color
ENV NPM_CONFIG_COLOR=false

# Optimize Node.js apps for production
ENV NODE_ENV production

USER root
RUN chmod -R g+rwx /opt/app-root/src/

RUN npm install -g yarn -s

# add `/app/node_modules/.bin` to $PATH
ENV PATH /opt/app-root/src/node_modules/.bin:$PATH

# install app dependencies
#copies package.json and package-lock.json to Docker environment
COPY package*.json yarn.lock /opt/app-root/src/

# Installs all node packages
WORKDIR /opt/app-root/src
RUN yarn install --network-timeout 100000 --frozen-lockfile

# Copies everything over to Docker environment
COPY . .

RUN yarn build

#Stage 2
#######################################
#pull the official nginx:latest base image
FROM registry.access.redhat.com/ubi9/nginx-120

COPY nginx/nginx.conf "${NGINX_DEFAULT_CONF_PATH}"

COPY --from=builder /opt/app-root/src/build .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

EXPOSE 8080
