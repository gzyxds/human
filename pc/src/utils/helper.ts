import type { AxiosProgressEvent } from 'axios';
import NP from 'number-precision';
import { title } from 'radash';

import { apiGetDownloadFile } from '~/api/common';
import { mimeTypeMap } from '~/assets/fileTypeMap';
import { sidebarMenus, tabbarMenus } from '~/config/navigation';
import { ResponsiveEnum } from '~/enums/variableEnum';

/**
 * 从服务器重新获取所有数据并且刷新页面
 * @returns Promise<boolean>
 */
export const refreshData = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        refreshNuxtData()
            .then(() => {
                resolve(true);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

/**
 * 判断路径是否包含或完全匹配
 */
export const isActive = (path: string) => {
    const route = useRoute();
    const currentPath = route.path;

    if (path === '/' && currentPath === path) return true;
    if (path === '/' && currentPath != path) return false;

    if (currentPath === path) return true;

    const normalizedPath = path.endsWith('/') ? path : path + '/';
    return currentPath.startsWith(normalizedPath);
};

/**
 * 判断当前路径是否在tabbar中
 */
export const inTabbar = (path: string) => {
    return tabbarMenus.find((item) => item.path === path) !== undefined;
};

/**
 * 判断当前路径是否在tabbar中
 */
export const inSidbar = (path: string) => {
    return sidebarMenus.find((item) => item.path === path) !== undefined;
};

/**
 * 获取组件暴露的属性类型
 */
export const getComponentExpose = <T extends abstract new (...args: any) => any>(_component: T) => {
    return ref<InstanceType<T>>();
};

/**
 * 将秒数转换为“分秒”格式
 * @param seconds - 传入的秒数
 * @returns 格式化的时间字符串，例如：`2分01秒`
 */
export const formatSecondsToMinutes = (seconds: number): string => {
    if (seconds < 0) {
        throw new Error('秒数不能为负数');
    }

    const minutes = Math.floor(seconds / 60); // 计算分钟
    const remainingSeconds = seconds % 60; // 计算剩余秒数

    const minutePart = minutes > 0 ? `${minutes}分钟` : ''; // 如果分钟为 0，则不显示
    const secondPart =
        remainingSeconds > 0 ? `${remainingSeconds.toString().padStart(2, '0')}秒钟` : ''; // 如果秒数为 0，则不显示

    return `${minutePart}${secondPart}` || '0秒钟'; // 如果没有分钟和秒数，显示 `0秒`
};

/**
 * 文件大小格式化
 * @param bytes 字节
 * @param options 其他配置
 */
export const formatFileSize = (
    bytes: number | string,
    options: FormatFileSizeOptions = {}
): string => {
    if (typeof bytes === 'string') bytes = Number(bytes);
    if (isNaN(bytes)) throw new Error('Invalid bytes');

    if (bytes < 0) throw new Error('文件大小不能为负数');

    const {
        decimals = 2,
        base = 1024,
        units = ['b', 'kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'],
    } = options;

    if (bytes === 0) return `0 ${units[0]}`;

    const index = Math.floor(Math.log(bytes) / Math.log(base));
    const unit = units[index] || units[units.length - 1];
    const size = bytes / Math.pow(base, index);

    return `${size.toFixed(decimals)} ${unit}`;
};

/**
 * 秒数格式化
 * @param seconds 秒数
 * @param options 配置项
 */
export const formatSecond = (seconds: number | string, options: FormatTimeOptions = {}): string => {
    if (seconds === '') seconds = 0;
    if (typeof seconds === 'string') seconds = Number(seconds);
    if (isNaN(seconds)) throw new Error('Invalid seconds');
    if (seconds < 0) seconds = 0; // 处理负数情况
    if (seconds < 1 && seconds > 0) seconds = 1;

    const { showHours = false, padZeros = true } = options;

    // 向下取整并计算小时、分钟和秒
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    // 根据选项决定是否显示小时
    const hoursPart = hrs > 0 || showHours ? `${hrs.toString().padStart(2, '0')}:` : '';
    const minutesPart = padZeros ? mins.toString().padStart(2, '0') : mins.toString();
    const secondsPart = padZeros ? secs.toString().padStart(2, '0') : secs.toString();

    return `${hoursPart}${minutesPart}:${secondsPart}`;
};

/**
 * 检查当前设备是否支持录音
 */
export function isRecordingSupported(): boolean {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

/**
 * 数据脱敏
 * @param str - 需要打星号的字符串
 * @param starCount - 星号的数量
 */
export const dataMasking = (str: string | undefined | number, starCount: number): string => {
    if (!str) return '';
    if (typeof str === 'number') {
        str = String(str);
    }
    if (starCount <= 0 || str.length <= 1) return str;

    // 确保星号数量不超过字符串长度
    const maskCount = Math.min(starCount, str.length);
    // const halfMask = Math.floor(maskCount / 2);

    // 计算左右两边保留字符的数量
    const leftPartLength = Math.ceil((str.length - maskCount) / 2);
    const rightPartLength = str.length - leftPartLength - maskCount;

    // 构建打星号的字符串
    const maskedString =
        str.slice(0, leftPartLength) +
        '*'.repeat(maskCount) +
        str.slice(str.length - rightPartLength);

    return maskedString;
};

/**
 * useCopy 工具函数
 * @param {string} text - 要复制的文本
 * @returns {Promise<boolean>} - 返回一个Promise，表示是否复制成功
 */
export const useCopy = (text: string | number, msg?: string | boolean): void => {
    try {
        if (typeof text === 'number') {
            text = String(text);
        }
        // 先尝试使用 Clipboard API
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
        } else {
            // 使用 document.execCommand('copy') 作为降级方案
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed'; // 避免页面滚动
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            if (!document.execCommand('copy')) {
                throw new Error('execCommand 复制失败');
            }
            document.body.removeChild(textarea);
        }

        if (msg) {
            useMessage().success(msg === true ? '已复制到剪切板' : msg);
        } else {
            if (msg !== false) {
                useMessage().success('已复制到剪切板');
            }
        }
    } catch (error) {
        useMessage().error('复制失败');
        console.error('复制失败:', error);
    }
};

/**
 * 判断是否为移动端
 */
export const isMobile = (): boolean => {
    let result = false;
    isClient(() => {
        const { isMobile } = useDevice();
        const { width } = useWindowSize();

        if (!isMobile) {
            result = width.value < ResponsiveEnum.MD;
        } else {
            result = isMobile;
        }
    });

    // 简单的移动端检测
    return result;
};

/**
 * 将 Blob 对象转换为指定类型的 File 对象
 * @param blob 要转换的 Blob 对象
 * @param fileSuffix 文件后缀名，如 'jpg', 'png', 'pdf' 等，必须是 mimeTypeMap 中的键
 * @returns 转换后的 File 对象
 */
export const blobToFile = (blob: Blob, fileSuffix: keyof typeof mimeTypeMap): File => {
    // 定义文件后缀与 MIME 类型的映射

    // 校验文件后缀是否合法
    if (!(fileSuffix in mimeTypeMap)) {
        throw new Error(`文件类型 ".${fileSuffix}" 不被支持。`);
    }

    // 获取文件的 MIME 类型
    const mimeType = mimeTypeMap[fileSuffix];

    // 创建文件名
    const fileName = `${createFileName()}.${fileSuffix}`;

    // 将 Blob 转换为 File 对象
    const file = new File([blob], fileName, {
        type: mimeType,
        lastModified: Date.now(),
    });

    return file;
};

/**
 * 生成一个文件名
 */
export const createFileName = (suffix?: string) => {
    return `${Date.now()}-${generateRandomStr()}${suffix}`;
};

export const generateRandomStr = (length: number = 6): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
};

/**
 * 暂停器
 * @param condition 需要满足的条件，返回值为 boolean
 * @param delay 每次等待的时间间隔，单位毫秒
 * @param timeout 超时时间，单位毫秒，默认 1 分钟
 * @param onSuccess 成功时执行的回调函数
 * @param onFailure 失败时执行的回调函数
 */
export const waitPoller = (
    condition: () => boolean,
    delay: number = 100,
    timeout: number = 60 * 1000,
    onSuccess?: () => void,
    onError?: (error: Error) => void
): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        const startTime = Date.now(); // 记录开始时间
        const interval = setInterval(() => {
            if (condition()) {
                clearInterval(interval); // 条件满足，停止轮询
                if (onSuccess) onSuccess(); // 调用成功回调
                resolve(); // 条件满足后继续执行后面的代码
            }
            if (Date.now() - startTime > timeout) {
                clearInterval(interval); // 超时停止轮询
                const error = new Error('条件未在规定时间内满足，操作超时。');
                if (onError) onError(error); // 调用失败回调
                reject(error); // 抛出超时错误
            }
        }, delay); // 每隔一定时间判断一次条件
    });
};

export const getVideoDuration = (src: Blob | string): Promise<number> => {
    return new Promise((resolve, reject) => {
        if (typeof src !== 'string') {
            src = URL.createObjectURL(src);
        }
        const video = document.createElement('video');
        video.src = src;
        video.id = '__video_duration__temp__';

        // 设置video元素不可见
        video.style.display = 'none'; // 或者设置其他样式使其不可见
        video.style.width = '0'; // 可选，确保没有显示
        video.style.height = '0'; // 可选，确保没有显示
        video.style.position = 'absolute'; // 可选，确保不影响布局

        document.body.appendChild(video); // 将video添加到DOM中

        // 当视频元数据加载完成后触发
        video.onloadedmetadata = () => {
            const duration = video.duration; // 获取视频时长
            resolve(Number(duration.toFixed(2)));
            document.body.removeChild(video); // 获取时长后移除video元素
        };

        // 如果发生错误
        video.onerror = (error) => {
            reject(new Error('无法获取视频时长'));
            document.body.removeChild(video); // 错误时也移除video元素
        };

        if (isIOSWeChatBrowser()) {
            resolve(0);
        }
    });
};

/**
 * 获取音频时长
 * @param src 音频资源
 */
export const getAudioDuration = (src: Blob | string): Promise<number> => {
    return new Promise((resolve, reject) => {
        if (typeof src !== 'string') {
            src = URL.createObjectURL(src);
        }
        const audio = document.createElement('audio');

        audio.src = src;

        // 设置audio元素不可见
        audio.style.display = 'none'; // 隐藏音频元素
        audio.style.width = '0'; // 可选，确保没有显示
        audio.style.height = '0'; // 可选，确保没有显示
        audio.style.position = 'absolute'; // 可选，确保不影响布局

        document.body.appendChild(audio); // 将audio添加到DOM中

        // 当音频元数据加载完成后触发
        audio.onloadedmetadata = () => {
            const duration = audio.duration; // 获取音频时长
            resolve(Number(duration.toFixed(2)));
            document.body.removeChild(audio); // 获取时长后移除audio元素
        };

        // 如果发生错误
        audio.onerror = (error) => {
            reject(new Error('无法获取音频时长'));
            document.body.removeChild(audio); // 错误时也移除audio元素
        };

        if (isIOSWeChatBrowser()) {
            resolve(0);
        }
    });
};

/**
 * 充值表单
 * @param form 当前表单数据
 * @param defaultValues 初始表单数据
 */
export const resetForm = <T extends Record<string, any>>(form: T, defaultValues: T) => {
    Object.keys(form).forEach((key) => {
        // 使用类型断言让对象的属性可写
        if (typeof form[key] === 'object' && form[key] !== null && !Array.isArray(form[key])) {
            resetForm(form[key] as T[keyof T], defaultValues[key] as T[keyof T]);
        } else {
            (form[key] as T[keyof T]) = defaultValues[key];
        }
    });
};

/**
 * 获取视频第一帧封面并返回为 File 对象
 * @param blobUrl 视频的 Blob URL
 * @param fileName 生成的封面文件名，默认为 "thumbnail.png"
 * @returns Promise<File> 包含第一帧图像的 File 对象
 */
export async function getVideoThumbnail(
    blobUrl: string,
    fileName = 'thumbnail.png'
): Promise<File> {
    return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.src = blobUrl;
        video.crossOrigin = 'anonymous'; // 允许跨域处理

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        if (!context) {
            reject(new Error('Canvas context is not available'));
            return;
        }

        video.addEventListener('loadeddata', () => {
            // 等待视频加载完成
            video.currentTime = 0; // 跳到视频的第一帧
        });

        video.addEventListener('seeked', () => {
            // 视频跳转完成后绘制帧
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            canvas.toBlob(
                (blob) => {
                    if (blob) {
                        // 将 Blob 转为 File 对象
                        const file = new File([blob], fileName, { type: 'image/png' });
                        resolve(file);
                    } else {
                        reject(new Error('Failed to create blob from canvas'));
                    }
                },
                'image/png',
                1 // 图片质量
            );
        });

        video.addEventListener('error', (e) => {
            reject(new Error(`Video loading error: ${e.message}`));
        });
    });
}

export const downloadFile = async (opts: {
    src: string | undefined;
    fileName?: string;
    suffix?: string;
    onProgress?: (progressEvent: AxiosProgressEvent) => void;
}) => {
    // if (isIOSWeChatBrowser()) {
    //     return useToast().add({
    //         title: '微信内置浏览器不支持下载',
    //         description: '请复制下载链接到外部浏览器下载',
    //         actions: [
    //             {
    //                 label: '复制下载链接',
    //                 click: () => {
    //                     useCopy(opts.src || '');
    //                 },
    //             },
    //         ],
    //     });
    // }
    if (opts.src === undefined) throw new Error('src is undefined');
    const _fileName = opts.fileName || createFileName();
    const _suffix = opts.suffix || opts.src.split('.').pop();
    const toastId = generateRandomStr();

    const progressText = ref<string>('准备下载...');
    const progressValue = ref<number>(0);
    const progressTotal = ref<number>(0);
    useToast().add({
        id: toastId,
        title: `(${Math.round(progressValue.value)}%准备下载：${_fileName}.${_suffix}`,
        color: 'primary',
        timeout: 0,
        icon: 'tabler:cloud-download',
        description: progressText.value,
    });
    const progressHandle = (progressEvent: AxiosProgressEvent) => {
        progressText.value = formatFileSize(progressEvent.loaded || 0);
        if (progressEvent.total) {
            progressTotal.value = progressEvent.total;
            progressValue.value = (progressEvent.loaded / progressEvent.total) * 100;
            useToast().update(toastId, {
                title: `正在下载(${Math.round(progressValue.value)}%)：${_fileName}.${_suffix}`,
                description: `已下载：${formatFileSize(progressEvent.loaded || 0)}/${formatFileSize(progressEvent.total || 0)}`,
            });
        }
    };
    if (_suffix) {
        apiGetDownloadFile({
            format: _suffix,
            name: _fileName,
            url: opts.src,
            onProgress: progressHandle,
        })
            .then((res) => {
                useToast().update(toastId, {
                    title: '下载完成(100%)',
                    description: `(${formatFileSize(progressTotal.value || 0)})${_fileName}.${_suffix}`,
                    color: 'green',
                });
            })
            .catch((err) => {
                useToast().update(toastId, {
                    title: '下载失败',
                    description: err,
                    color: 'red',
                });
            });
    }
};

export const isIOSWeChatBrowser = () => {
    const ua = navigator.userAgent.toLowerCase();
    console.log(ua);
    return (
        ua.includes('micromessenger') &&
        (ua.includes('iphone') || ua.includes('iphone') || ua.includes('ipad'))
    );
};
