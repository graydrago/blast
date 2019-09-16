import {
  // filters,
  Point,
  Sprite,
  Texture,
} from 'pixi.js-legacy';
// import TWEEN from '@tweenjs/tween.js';

import {
  TILE_HEIGHT,
  TILE_OFFSET_X,
  TILE_OFFSET_Y,
  TILE_WIDTH,
} from './consts';
import { CellType } from './types';

export default class CellSprite extends Sprite {
  public static coordToCellPos(coord: Point) {
    return new Point(
      Math.floor((coord.x - TILE_OFFSET_X) / TILE_WIDTH),
      Math.floor((coord.y - TILE_OFFSET_Y) / TILE_HEIGHT),
    );
  }

  private _cellType: CellType;
  // private _tween: TWEEN.Tween | null = null;

  constructor(texture: Texture, cellType: CellType = CellType.blue) {
    super(texture);
    this.scale.set(0.233, 0.233);
    this._cellType = cellType;
  }

  public placeOnMap(x: number, y: number) {
    this.position.set(
      x * TILE_WIDTH + TILE_OFFSET_X,
      y * TILE_HEIGHT + TILE_OFFSET_Y,
    );
  }

  // public setType(cellType: CellType) {
    // if (cellType !== this._cellType) {
      // this._cellType = cellType;
      // if (this._cellType === CellType.bomb) {
        // const colorMatrix = new filters.ColorMatrixFilter();
        // colorMatrix.greyscale(0.2, true);
        // this.filters = [colorMatrix];
        // this._tween = new TWEEN.Tween({ alpha: 0.7 })
          // .to({ alpha: 1 }, 1000)
          // .easing(TWEEN.Easing.Linear.None)
          // .onUpdate(({ alpha }) => this.alpha = alpha)
          // .yoyo(true)
          // .repeat(Infinity)
          // .start();
      // } else {
        // this.alpha = 1;
        // this.filters = [];
        // if (this._tween) {
          // this._tween.stop();
          // this._tween = null;
        // }
      // }
    // }
  // }

  public getType() {
    return this._cellType;
  }

  public setTexture(texture: Texture) {
    this.texture = texture;
  }

  public tilePos() {
    return CellSprite.coordToCellPos(this.position);
  }
}
