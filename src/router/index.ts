import { createRouter, createWebHistory } from 'vue-router';
import ChooseTemplate from '@/components/ChooseTemplate.vue';  // Path to ChooseTemplate component
import ModernResume from '@/components/modern/resume.vue';  // Path to Modern Resume component
import StandardResume from '@/components/standard/resume.vue';  // Path to Standard Resume component

const routes = [
  {
    path: '/',
    component: ChooseTemplate,  // This will show the ChooseTemplate component at the root path
  },
  {
    path: '/modern/resume',
    component: ModernResume,  // This shows the Modern Resume page
  },
  {
    path: '/standard/resume',
    component: StandardResume,  // This shows the Standard Resume page
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
