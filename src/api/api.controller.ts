import { Controller, Get } from '@nestjs/common';
import { ApiService } from "./api.service";
@Controller('api')
export class ApiController {
	constructor(private apiService:ApiService){}
	@Get("/ping")
	async getPing() {
		return this.apiService.pingpong()
	}

	// 登録されているBot 情報を取得できるようにする
	@Get("/bots")
	async getBotInfo() {
		return this.apiService.pingpong()
	}
	
}
