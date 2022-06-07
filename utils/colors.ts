import { RgbaColor } from 'react-colorful';

export function rgbaToCSS(color: RgbaColor): string {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
}
