/*
 * @Author: your
 * @Date: 2020-01-16 10:10:55
 * @LastEditTime : 2020-01-16 10:22:11
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /rc-hyh/src/utils/tools.ts
 */

export const setKeys = function(prefix: string, index: string | number): string {
  return `${prefix}-${index}`;
};
