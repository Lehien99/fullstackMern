import { IAuthResponse, IInitLoginValues } from "types";
import CustomAxios from 'utility/customAxios';




const login = async (param: IInitLoginValues): Promise<IAuthResponse> => {

    const { data } = await CustomAxios.post('/login', param);

    return data as IAuthResponse;
}

export const authService = {

    login,

}