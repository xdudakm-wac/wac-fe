/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface XdudakmAmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface XdudakmAmbulanceWlEditor {
        "ambulanceId": string;
        "apiBase": string;
        "entryId": string;
    }
    interface XdudakmAmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
}
export interface XdudakmAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLXdudakmAmbulanceWlEditorElement;
}
export interface XdudakmAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLXdudakmAmbulanceWlListElement;
}
declare global {
    interface HTMLXdudakmAmbulanceWlAppElement extends Components.XdudakmAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLXdudakmAmbulanceWlAppElement: {
        prototype: HTMLXdudakmAmbulanceWlAppElement;
        new (): HTMLXdudakmAmbulanceWlAppElement;
    };
    interface HTMLXdudakmAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLXdudakmAmbulanceWlEditorElement extends Components.XdudakmAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLXdudakmAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLXdudakmAmbulanceWlEditorElement, ev: XdudakmAmbulanceWlEditorCustomEvent<HTMLXdudakmAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLXdudakmAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLXdudakmAmbulanceWlEditorElement, ev: XdudakmAmbulanceWlEditorCustomEvent<HTMLXdudakmAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLXdudakmAmbulanceWlEditorElement: {
        prototype: HTMLXdudakmAmbulanceWlEditorElement;
        new (): HTMLXdudakmAmbulanceWlEditorElement;
    };
    interface HTMLXdudakmAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLXdudakmAmbulanceWlListElement extends Components.XdudakmAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLXdudakmAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLXdudakmAmbulanceWlListElement, ev: XdudakmAmbulanceWlListCustomEvent<HTMLXdudakmAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLXdudakmAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLXdudakmAmbulanceWlListElement, ev: XdudakmAmbulanceWlListCustomEvent<HTMLXdudakmAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLXdudakmAmbulanceWlListElement: {
        prototype: HTMLXdudakmAmbulanceWlListElement;
        new (): HTMLXdudakmAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "xdudakm-ambulance-wl-app": HTMLXdudakmAmbulanceWlAppElement;
        "xdudakm-ambulance-wl-editor": HTMLXdudakmAmbulanceWlEditorElement;
        "xdudakm-ambulance-wl-list": HTMLXdudakmAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface XdudakmAmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface XdudakmAmbulanceWlEditor {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "entryId"?: string;
        "onEditor-closed"?: (event: XdudakmAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface XdudakmAmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: XdudakmAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "xdudakm-ambulance-wl-app": XdudakmAmbulanceWlApp;
        "xdudakm-ambulance-wl-editor": XdudakmAmbulanceWlEditor;
        "xdudakm-ambulance-wl-list": XdudakmAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "xdudakm-ambulance-wl-app": LocalJSX.XdudakmAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLXdudakmAmbulanceWlAppElement>;
            "xdudakm-ambulance-wl-editor": LocalJSX.XdudakmAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLXdudakmAmbulanceWlEditorElement>;
            "xdudakm-ambulance-wl-list": LocalJSX.XdudakmAmbulanceWlList & JSXBase.HTMLAttributes<HTMLXdudakmAmbulanceWlListElement>;
        }
    }
}
