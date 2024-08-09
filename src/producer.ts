import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"]
})

const producer = kafka.producer();

async function main() {
  await producer.connect();
  await producer.send({
    topic: "payment-done",
    messages: [{
      value: "testing kafka payment service"
    }]
  });
  console.log("Message sent successfully");
  await producer.disconnect();
}


for (let i = 0; i < 10000; i++) {
  main().catch(console.error)
}