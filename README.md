# MywebsiteUi

This repository is for the frontend of `https://bernhardschiffer.dev`. It can be deployed as an docker container.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Docker

Run `docker-compose up` to build and run the docker image.
The frontend is available over `http://localhost:80`

## What have I learned?

- dockerize an angular application
- write a Dockerfile with a multistage build
- configure nginx to host an angular application
- setup docker on a server
- deploy the docker container on a server
