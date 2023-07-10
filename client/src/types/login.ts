
export interface IInitLoginValues {
    username: string
    password: string
    keep: 'keep' | 'unkeep'
}

export const initialLoginValues: IInitLoginValues = {
    username: '',
    password: '',
    keep:  'unkeep'
}