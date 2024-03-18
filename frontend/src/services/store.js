import { createStore } from "vuex";
import Api from "@/services/api";

const store = createStore({
    state: {
        // user: null,
        // userLoggedIn: false,
        // isStoreUpdated: false,
        // userLog: false,
        packageList: [],
    },
    mutations: {
        // setUser(state, payload) {
        //     state.user = payload;
        // },
        // setUserIsLoggedIn(state, payload) {
        //     state.userLoggedIn = payload;
        // },
        // setIsStoreUpdated(state, payload) {
        //     state.isStoreUpdated = payload;
        // },
        // setUserLog(state, payload) {
        //     state.userLog = payload;
        // },
        setPackageList(state, payload) {
            state.packageList = payload;
        }
    },
    actions: {
        async packagaeData(context) {
            try {
                const res = await Api.get("/package");
                context.commit("setPackageList", res.data.data);
            } catch (error) {
                console.error('Error fetching kursi data in action:', error);
                throw error;
            }
        },
        // async login(context, { email, password }) {
        //     const res = await Api.post("/users/login", { email, password })
        //         .catch((err) => {
        //             throw new Error(err);
        //         });
        //     if (res && res.data) {
        //         context.commit("setUser", res.data.data);
        //         context.commit("setUserIsLoggedIn", true);
        //     } else {
        //         context.commit("setUser", null);
        //         context.commit("setUserIsLoggedIn", false);
        //         throw new Error("unknown error");
        //     }
        // },
        // async userLog(context) {
        //     try {
        //         const res = await Api.get("/usersList");
        //         context.commit("setUserLog", res.data.data);
        //         context.commit("setUserIsLoggedIn", true);
        //     } catch (e) {
        //         context.commit("setUser", null);
        //         context.commit("setUserIsLoggedIn", false);
        //     } finally {
        //         context.commit("setIsStoreUpdated", true);
        //     }
        // },
        // async updateStore(context) {
        //     try {
        //         const res = await Api.get("/users");
        //         context.commit("setUser", res.data.data);
        //         context.commit("setUserIsLoggedIn", true);
        //     } catch (e) {
        //         context.commit("setUser", null);
        //         context.commit("setUserIsLoggedIn", false);
        //     } finally {
        //         context.commit("setIsStoreUpdated", true);
        //     }
        // },
        // async logout(context) {
        //     const res = await Api.post("/users/logout")
        //         .catch((err) => {
        //             throw new Error(err);
        //         });
        //     if (res) {
        //         context.commit("setUser", null);
        //         context.commit("setUserIsLoggedIn", false);
        //     }
        // }
    }
});

export default store;