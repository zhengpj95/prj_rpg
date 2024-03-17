/**
 * 层级管理器
 */
export class LayerMgr {
	/**场景层*/
	public static gameMain = new Laya.Sprite();
	
	public static init(): void {
		this.gameMain.name = "gameMain";
		Laya.stage.addChild(this.gameMain);
	}
}