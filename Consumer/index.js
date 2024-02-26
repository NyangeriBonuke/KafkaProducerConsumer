const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-consumer',
    brokers: ['localhost:9092']
})

const consumer = kafka.consumer({groupId: 'my-group'})

const consumeMessages = async() => {
    try{
        await consumer.connect()
        await consumer.subscribe({topic: 'my-topic'})
        await consumer.run({
            eachMessage: async({ topic, partition, message }) => {
                console.log(`Recieved message: ${message.value.toString()}`)
            }
        })
    }
    catch(error){
        console.log(error)
    }
}

consumeMessages()