import AuthStore from './authStore/authStore';
import LayoutStore from './layoutStore/LayoutStore';
import DashStore from './authStore/dashStore';
import TestimonialStore from './testimonialStore/testimonialStore';
import { configure } from 'mobx';
configure({ enforceActions: 'never' });

const store = {
  auth: new AuthStore(),
  layout: new LayoutStore(),
  DashStore: new DashStore(),
  TestimonialStore : new TestimonialStore(),
};
export default store;
