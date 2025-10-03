import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
const routes = [
  {
    path: "/",
    name: "contactbook", //khai báo tên của route
    component: ContactBook,
  },
  {
    path: "/:pathMatch(.*)*", // Bắt tất cả route không khớp
    name: "notfound", //khai báo tên của route
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/contacts/:id",
    name: "contact.edit", //khai báo tên của route
    component: () => import("@/views/ContactEdit.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
  {
    path: "/contacts/add",
    name: "contact.add", //khai báo tên của route
    component: () => import("@/views/ContactAdd.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
