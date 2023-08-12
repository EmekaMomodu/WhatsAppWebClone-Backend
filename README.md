# Whatsapp Web Clone Backend

This is a backend service that implements WebSocket protocol to communicate with the [Whatsapp Web Clone UI](https://github.com/EmekaMomodu/WhatsAppWebClone).

Built using Express and Socket.IO

## Steps to run
1. Open terminal in project's root directory i.e where the file named Dockerfile is located.
2. Run command `docker build . -t WhatsAppWebCloneBackend` to build the docker image.
3. Run command `docker run -p 5000:5000 -d WhatsAppWebCloneBackend` to spin up a container for the created image.
4. This application should start running on `http://localhost:5000/`. Run the [Whatsapp Web Clone UI](https://github.com/EmekaMomodu/WhatsAppWebClone#readme) together with this service to see it in action.