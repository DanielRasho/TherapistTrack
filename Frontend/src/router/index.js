import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import CreateUser from '../components/CreateUser.vue';
import EditUser from '../components/EditUser.vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login 
    },
    {
      path: '/create-user',
      name: 'createUser',
      component: CreateUser
    },
    {
      path: '/edit-user',
      name: 'editUser',
      component: EditUser
    }
  ]
});

export default router;
