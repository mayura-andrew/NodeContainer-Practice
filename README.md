---

This is a Node.js application using Fastify, packaged in a Docker container.

## Prerequisites

- Docker installed on your machine

## Building the Docker Image

To build the Docker image, run the following command in the directory containing the Dockerfile:

```sh
sudo docker build -t more-complicated-app:alpine .
```

## Running the Docker Container

```sh
sudo docker run -it -p 8080:8080 --name my-app --rm --init more-complicated-app:alpine
```
This command will:

- Run the container interactively (-it)
- Map port 8080 on your host to port 8080 in the container (-p 8080:8080)
- Name the container my-app (--name my-app)
- Remove the container when it exits (--rm)
- Use the tini init system to handle reaping zombie processes (--init)

## Accessing the Application 

```
http://localhost:8080
```

---