type ToastOptions = {
    duration: number;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    pauseOnHover?: boolean;
    appendOnTopBody?: boolean;
};
export default class Toast {
    private duration;
    private position;
    private pauseOnHover;
    readonly container: HTMLDivElement;
    private static template;
    constructor(options?: ToastOptions);
    private createElement;
    private handleEvent;
    success(message: string): void;
    error(message: string): void;
    alert(message: string): void;
    close(DOM_ELEMENT: HTMLDivElement): void;
}
export {};
