import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"]
})

const producer = kafka.producer();

async function main() {
  await producer.connect();
  await producer.send({
    topic: "mail",
    messages: [{
      value: "hi there",
      key: Math.random().toString()
    }]
  });
}

for(let i=0;i<300;i++){
    main().catch(console.error)
}