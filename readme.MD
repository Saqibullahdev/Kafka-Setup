# This repository contain configuration of kafka with node js

# Steps to run the project
1. make ensure you have kafka installed in your system or you can use docker to run kafka
- make sure
    - create a topic with name `mail` in kafka 
    use the following command to create a topic
    ```bash ./kafka-topics.sh --create --topic mail --partitions 3 --bootstrap-server localhost:9092```
    - modify the producer and consumer file with your topic name

2. clone the repository
3. run `npm install`
4. run `npm run build` to run producer file
5. open multiple terminal and run `npm run dev` to see the message in the consumer terminal

# Note
- make sure you have kafka installed in your system or you can use docker to run kafka
- make sure you have created a topic with name `mail` in kafka
- modify the producer and consumer file with your topic name
- you can run multiple consumer to see the message in multiple terminal
