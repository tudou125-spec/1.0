const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Mouse,
		C3.Plugins.SVGPicture,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Sprite.Acts.StartAnim
	];
};
self.C3_JsPropNameTable = [
	{精灵2: 0},
	{Player1: 0},
	{Mouse: 0},
	{矢量图: 0},
	{精灵: 0}
];

self.InstanceType = {
	精灵2: class extends self.ISpriteInstance {},
	Player1: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	矢量图: class extends self.ISVGPictureInstance {},
	精灵: class extends self.ISpriteInstance {}
}