declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare namespace JSX {
    type Element = any;
    interface IntrinsicElements { [key: string]: any }
}