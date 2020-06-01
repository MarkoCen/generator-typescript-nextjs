FROM ubuntu:18.04

COPY build/ <%= app.name %>/

RUN apt-get update && apt-get install -y sudo; \
    sudo apt-get update && sudo apt-get -y install curl nano wget dialog net-tools git; \
    curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -; \
    sudo apt-get install -y nodejs; \
    cd <%= app.name %>; \
    chmod -R +rx public; \
    export NODE_ENV="production"; \
    npm i --no-cache;

WORKDIR <%= app.name %>/

EXPOSE 3000

CMD npm run start
