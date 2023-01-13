import { TinyColor } from "@ctrl/tinycolor";

// 判断设置的颜色是否正确
function isStableColor(color: number): boolean {
  return color >= 0 && color <= 255;
}

// frontColor：例如 red
function getAlphaColor(frontColor: string, backgroundColor: string): string {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha,
  } = new TinyColor(frontColor).toRgb(); // 转成rgb对象形式  red -> { r: 255, g: 0, b: 0, a: 1 }
  if (originAlpha < 1) {
    return frontColor;
  }

  const { r: bR, g: bG, b: bB } = new TinyColor(backgroundColor).toRgb();

  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA);
    const g = Math.round((fG - bG * (1 - fA)) / fA);
    const b = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
      return new TinyColor({
        r,
        g,
        b,
        a: Math.round(fA * 100) / 100,
      }).toRgbString(); // 转成rgb字符串形式 red -> "rgb(255, 0, 0)"
    }
  }

  return new TinyColor({ r: fR, g: fG, b: fB, a: 1 }).toRgbString();
}

export default getAlphaColor;
