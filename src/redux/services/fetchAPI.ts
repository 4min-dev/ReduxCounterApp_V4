import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../ts/interfaces/users/IUser";

export const fetchAPI = createApi({
    reducerPath:'fetchAPI',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),
    endpoints:(builder) => ({
        getUsers:builder.query<IUser[],string>({
            query: () => 'users'
        })
    })
})