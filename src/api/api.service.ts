import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
	async pingpong() {
		return "Pong"
	}
}
