const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-producer',
    brokers: ['localhost:9092']
})

const msg = "rada ni gani"

const producer = kafka.producer()

const sendMessage = async() => {
    try{
        await producer.connect()
        await producer.send({
            topic: 'my-topic',
            messages: [
                {value: msg}
            ]
        })
        console.log('Message sent succesfully')
    }
    catch(error){
        console.log(error)
    }
    finally{
        await producer.disconnect()
    }
}

sendMessage()