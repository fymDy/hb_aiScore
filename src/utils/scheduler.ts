/*
 * @Author: Mark
 * @Date: 2025-04-23 19:24:41
 * @LastEditTime: 2025-04-23 19:42:18
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/utils/scheduler.ts
 */
// src/utils/scheduler.ts

// src/utils/scheduler.ts

// --- 基础调度 ---

/**
 * 推迟到下一帧执行（setState 后、DOM 渲染后执行）
 */
export function nextTick(cb?: () => void): Promise<void> {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        cb?.();
        resolve();
      });
    });
  }
  
  /**
   * 再下一帧执行（适用于动画或样式刷新的 UI）
   */
  export function nextFrame(cb?: () => void): Promise<void> {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          cb?.();
          resolve();
        });
      });
    });
  }
  
  /**
   * 加入微任务队列（在当前宏任务之后立即执行）
   */
  export function microTask(cb?: () => void): Promise<void> {
    return Promise.resolve().then(() => {
      cb?.();
    });
  }
  
  /**
   * 浏览器空闲时执行（用于日志、缓存等后台任务）
   */
  export function idle(cb?: () => void): Promise<void> {
    return new Promise((resolve) => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          cb?.();
          resolve();
        });
      } else {
        nextFrame(() => {
          cb?.();
          resolve();
        });
      }
    });
  }
  
  // --- 等待工具 ---
  
  /**
   * 等待指定毫秒数
   */
  export function wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  /**
   * 轮询直到条件为真（默认 16ms 间隔）
   */
  export function waitUntil(
    condition: () => boolean,
    interval: number = 16
  ): Promise<void> {
    return new Promise((resolve) => {
      const check = () => {
        if (condition()) {
          resolve();
        } else {
          setTimeout(check, interval);
        }
      };
      check();
    });
  }
  
  /**
   * 高级轮询版本：支持最大尝试次数、超时、取消
   */
  export interface WaitUntilAdvancedOptions {
    condition: () => boolean;
    intervalMs?: number;
    timeoutMs?: number;
    maxAttempts?: number;
  }
  
  export function waitUntilAdvanced({
    condition,
    intervalMs = 16,
    timeoutMs,
    maxAttempts,
  }: WaitUntilAdvancedOptions): {
    promise: Promise<void>;
    cancel: () => void;
  } {
    let attempts = 0;
    let canceled = false;
    let rejectRef: (reason?: any) => void = () => {};
    let resolveRef: () => void = () => {};
  
    const cancel = () => {
      canceled = true;
      rejectRef(new Error('❌ waitUntil canceled'));
    };
  
    const promise = new Promise<void>((resolve, reject) => {
      resolveRef = resolve;
      rejectRef = reject;
  
      const start = Date.now();
  
      const check = () => {
        if (canceled) return;
        if (condition()) {
          resolve();
        } else {
          attempts++;
          if (maxAttempts && attempts >= maxAttempts) {
            reject(new Error('❌ waitUntil maxAttempts reached'));
            return;
          }
          if (timeoutMs && Date.now() - start >= timeoutMs) {
            reject(new Error('❌ waitUntil timeout'));
            return;
          }
          setTimeout(check, intervalMs);
        }
      };
  
      check();
    });
  
    return { promise, cancel };
  }
  
  // --- 批量调度 ---
  
  /**
   * 批量顺序执行任务（每个任务之间可设置 delay）
   */
  export async function batchScheduler(
    tasks: (() => void | Promise<void>)[],
    delay: number = 0
  ): Promise<void> {
    for (const task of tasks) {
      await Promise.resolve(task());
      if (delay > 0) {
        await wait(delay);
      }
    }
  }
  
  // --- 汇总导出 ---
  export const scheduler = {
    nextTick,
    nextFrame,
    microTask,
    idle,
    wait,
    waitUntil,
    waitUntilAdvanced,
    batchScheduler,
  };
  

  /**页面使用示例
   * import { scheduler } from '@/utils/scheduler';
   * 示例一
   * await scheduler.nextTick(); 
   * await scheduler.nextFrame();
   * await scheduler.microTask();
   * await scheduler.idle();
   * await scheduler.wait(200);
   * await scheduler.waitUntil(() => document.readyState === 'complete');
   * 高级轮询：
   * const { promise, cancel } = scheduler.waitUntilAdvanced({
        condition: () => isReady,
        timeoutMs: 5000,
        maxAttempts: 100,
        });
        await promise;
   *批量任务：     
   * await scheduler.batchScheduler([
        () => console.log('step 1'),
        () => scheduler.wait(100),
        () => console.log('step 2'),
     ]);
   * 示例二
   * scheduler.nextTick(() => {
        console.log('下一帧执行');
     });
   */
