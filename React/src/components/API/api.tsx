import { api } from "./apiConfig";

export const getAllUsers = () => {

    return api.get(
        `/api/users`
    );
};