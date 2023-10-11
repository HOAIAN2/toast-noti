type ToastOptions = {
    duration: number;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    pauseOnHover?: boolean;
    appendOnTopBody?: boolean;
};
export default class Toast {
    #private;
    config: ToastOptions;
    readonly container: HTMLDivElement;
    constructor(options?: ToastOptions);
    private createElement;
    private handleEvent;
    success(message: string): void;
    error(message: string): void;
    alert(message: string): void;
    private close;
}
export {};
