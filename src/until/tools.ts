/**
 * 判断当前环境
 * true是生产环境
 * false 是开发环境
 */
export function isProduction() {
  if (process.env.NODE_ENV === "production") {
    return true;
  } else {
    return false;
  }
}
