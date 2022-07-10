import amqp, { Channel, Connection, Message } from 'amqplib';
import UserService from './user.service';

export default class RabbitService {
    private static _instance: RabbitService;
    private connection: Connection;
    private channel: Channel;
    private userService: UserService;

    private constructor() { 
        this.userService = new UserService();
    }

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

    async subscribe(queue: string) {
        if (!this.connection) {
            await this.init();
        }

        this.channel.assertQueue(queue, { durable: true });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        this.channel.consume(queue, (msg) => this.updateUserAttendances(this.channel, msg));
    }

    async updateUserAttendances(channel: Channel, message: Message | null) {
            const userId = message?.content.toString().split('"')[1];
            console.log(" [x] Received %s", userId);
            const updatedUser = await this.userService.updateAttendance(userId!);
            if (updatedUser) {
                channel.ack(message!);
            }
    }

}