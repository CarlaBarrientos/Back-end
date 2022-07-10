require('dotenv').config();
import RabbitService from './rabbit.service';

const rabbitService = RabbitService.getInstance()
rabbitService.subscribe('stats');