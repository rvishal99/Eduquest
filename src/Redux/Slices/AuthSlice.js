import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const setData=()=>{

    let value = localStorage.getItem('data');
    if(!value)
    {
        return JSON.parse(localStorage.getItem('data'))
    }
    return {};
}
const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    isAdmin: localStorage.getItem('isAdmin') || " ",
    data: setData(),
    resetEmail:''
}


export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {

        // //console.log("data: ",data)
        let res = axiosInstance.post("user/register", data);

        toast.promise(res, {
            loading: "Wait! Creating your account",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create account",
        });


        res = await res
        // //console.log("res: ",res);
        return res.data
    }
    catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const updateProfile = createAsyncThunk("/user/update/profile", async (data) => {
    try {
        //console.log("data: ",data);
        const res = axiosInstance.put(`user/update/${data[0]}`, data[1]);
        toast.promise(res, {
            loading: "Wait! profile update in progress...",
            success: (data) => {

                return data?.data?.message;
            },
            error: "Failed to update profile"
        });
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
        //console.log("updateError ",error);
    }
})

export const getUserData = createAsyncThunk("/user/details", async (userId) => {
    try {
        const res = axiosInstance.get(`user/me/${userId}`);
        //console.log(res)
        return (await res).data;
    } catch (error) {
        toast.error(error.message);
    }
})


export const loginAccount = createAsyncThunk("/auth/login", async (data) => {
    try {
        let res = axiosInstance.post("user/login", data);

        toast.promise(res, {
            loading: "Wait! Authentication in progress..",
            success: (data) => {
                return data?.data?.message
            },
            error: "Failed to login"
        });


        res = await res
        return (await res).data
    }
    catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const logoutAccount = createAsyncThunk("/auth/logout", async () => {
    try {
        let res = axiosInstance.post("user/logout");

        toast.promise(res, {
            loading: 'Wait! logout in progress!',
            success: (data) => {
                return data?.data?.message
            },
            error: 'Failed to Log out'
        });

    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})


const authSlice = createSlice(
    {
        name: "auth",
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(loginAccount.fulfilled, (state, action) => {
                    localStorage.setItem("data", JSON.stringify(action?.payload?.user));
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("isAdmin", action?.payload?.user?.isAdmin);

                    state.data = action?.payload?.user
                    state.isLoggedIn = true
                    //console.log(action?.payload?.user?.isAdmin);
                    state.isAdmin = action?.payload?.user?.isAdmin;


                    //console.log(state.isAdmin)
                })
                .addCase(logoutAccount.fulfilled, (state, action) => {
                    localStorage.clear();


                    state.data = {}
                    state.isLoggedIn = false
                    state.isAdmin = "";
                })
                .addCase(getUserData.fulfilled, (state, action) => {
                    if (!action?.payload?.user) return;
                    localStorage.setItem("data", JSON.stringify(action?.payload?.user));
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("isAdmin", action?.payload?.user?.isAdmin);
                    state.isLoggedIn = true;
                    state.data = action?.payload?.user;
                    state.isAdmin = action?.payload?.user?.isAdmin
                });
        }
    }
)

// export const {} = authSlice.actions;

export default authSlice.reducer; // * reducer functions like createAccount,login account gets exported
