import Button = Laya.Button;
import Handler = Laya.Handler;
import {LayerMgr} from "../../core/layer/LayerMgr";

/**
 * 登录
 */
export class LoginWin extends Laya.Scene {
	public static _url = "login/Login.scene";

	constructor() {
		super();
	}

	// App.showView打开，未进入这个函数
	onEnable() {
		super.onEnable();
		const btn = <Button>this.getChildByName("btnEnter");
		btn.clickHandler = Handler.create(this, this.onStart, undefined, true);
	}

	private onStart() {
		console.log(`11111`);
		LayerMgr.init();
	}
}