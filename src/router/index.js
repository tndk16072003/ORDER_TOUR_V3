import { createRouter, createWebHistory } from "vue-router";

const admin = [
    {
        path : "/admin",
        component : () => import("../layouts/master/admin.vue"),
        children : [
            {
                path : "test",
                name: "admin-test",
                component : () => import("../components/test/index.vue")
            },
            {
                path : "tinh-thanh",
                name: "admin-tinh-thanh",
                component : () => import("../components/tinh_thanh/index.vue")
            },
        ]
    }
];

const routes = [
    ...admin,
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;