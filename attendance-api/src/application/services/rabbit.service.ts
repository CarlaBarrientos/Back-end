import amqp, { Channel, Connection } from 'amqplib';
import IRabbitService from '../service-interfaces/irabbit.service';

export default class RabbitService implements IRabbitService {
    private static _instance: RabbitService;
    private connection: Connection;
    private channel: Channel;

    private constructor() { }

    static getInstance(): RabbitService {
        if (!RabbitService._instance) {
            RabbitService._instance = new RabbitService();
        }
        return RabbitService._instance;
    }

    async init() {
        this.connection = await amqp.connect(process.env.RABBITMQ_URL || '');
        this.channel = await this.connection.createChannel();
    }

    async sendMessage(queue: string, message: any) {
        if (!this.connection) {
            await this.init();
        }
        await this.channel.assertQueue(queue, { durable: true });
        this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)))
    }
}