# RabbitMQ with Nodejs + Typescript

- Typescript
- Node
- PostgreSQL

## How to run

Make sure the latest version of
[Docker](https://docs.docker.com/engine/install/)
and
[Docker Compose](https://docs.docker.com/compose/install/)
are present.

- Create an .env file and add following variables to this file

```
RABBIT_MQ_PROTOCOL=amqp
RABBIT_MQ_HOSTNAME=localhost
RABBIT_MQ_PORT=5672
RABBIT_MQ_USERNAME=admin
RABBIT_MQ_PASSWORD=admin1
RABBIT_MQ_VHOST=/
```

Run `docker-compose up` to start rabbitMQ.

# See more details

In order to see more details about RabbitMQ and AMQP Protocol, take a look at these file in order:

- [AMQP Protocol](https://github.com/kkhanhluu/nodejs-rabbitmq/blob/main/notes/AMQ%20Protocol.md)
- [Message properties](https://github.com/kkhanhluu/nodejs-rabbitmq/blob/main/notes/message%20properties.md)
- [Publishing message](https://github.com/kkhanhluu/nodejs-rabbitmq/blob/main/notes/Publishing%20message.md)
- [Consuming message](https://github.com/kkhanhluu/nodejs-rabbitmq/blob/main/notes/Consume%20message.md)
- [Exchange routing](https://github.com/kkhanhluu/nodejs-rabbitmq/blob/main/notes/Exchange%20Routing.md)
