export function useLockFn(fn: (...args: any[]) => Promise<any>) {
    const isLock = ref<boolean>(false);
    const lockFn = async (...args: any[]) => {
        if (isLock.value) return;
        isLock.value = true;
        try {
            const res = await fn(...args);
            isLock.value = false;
            return res;
        } catch (e) {
            isLock.value = false;
            throw e;
        }
    };
    return {
        isLock,
        lockFn,
    };
}
