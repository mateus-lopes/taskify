export interface IUseAppStore {
    state: { [key: string]: any };
    selectPage: (page: string) => void;
}

export interface IAppState {
    const: boolean;
    page: string;
}