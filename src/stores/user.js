import { defineStore } from 'pinia';

export const globalUser = defineStore({
    id: 'myUser',
    state: () => ({
        userId: '',
        userName: ''
    }),
    getters: {},
    actions: {
        setUser(obj) {
            const { userId, userName } = obj;
            this.userId = userId;
            this.userName = userName;
        }
    }
});