import {Kafka} from 'kafkajs'

const kafka=new Kafka({
    clientId:'my-app',
    brokers:['localhost:9092']
})


const producer=kafka.producer()
const consumer=kafka.consumer({groupId:'test-group'})

async function main(message: string) {
    await producer.connect();
    await producer.send({
      topic: "test",
      messages: [{
        value: message
      }]
    })
  
    await consumer.connect();
    await consumer.subscribe({
      topic: "test", fromBeginning: true
    })
  
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          offset: message.offset,
          value: message?.value?.toString(),
          topic: topic,
            partition: partition
        })
      },
    })
  }
  
  
for (let i = 0; i < 10; i++) {
    main("hello testing kafka on local ").catch(console.error)
}