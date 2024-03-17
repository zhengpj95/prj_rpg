/**
 * 统一处理接口
 */
export class App {
	/**打开界面*/
	public static showView<T extends Laya.Scene>(cls: new () => T): void {
		// const clazz = new cls();
		if (cls['_url']) {
			// 通过对应的场景地址打开界面
			Laya.Scene.open(cls['_url'])
		}
	}
}