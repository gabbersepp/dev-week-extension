export function sleep(ms: number): Promise<void> {
    return new Promise((res: any, rej: any): void => {
        setTimeout(res, ms);
    });
}