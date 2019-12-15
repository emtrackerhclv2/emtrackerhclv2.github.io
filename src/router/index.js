import Vue from 'vue'
import Router from 'vue-router'
import TimeSheet from '@/components/TimeSheet'
import Login from '@/components/Auth/Login'
import SweDashBoard from '@/components/SweDashBoard'
import RegisterUser from '@/components/RegisterUser'
import addEmployee from '@/components/addEmployee'
import firebase from 'firebase'


Vue.use(Router)

let router = new Router({
 
  routes: [
    {
      path: '/timesheet',
      name: 'TimeSheet',
      component: TimeSheet,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/',
      name: 'swe-dashboard',
      component: SweDashBoard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterUser,
      meta: {
        requiresGuest: true,
        //isManager: true
      }
    },
    /**
     * Disabled to avoid anonymous adding of any employee
     */
      {
        path: '/addemployee',
        name: 'add-employee',
        component: addEmployee,
        meta: {
          requiresGuest: true
        },
    },
    // {
    //   path: '/test',
    //   name: 'add-hours',
    //   component: addHours,
    //   meta: {
    //     requiresGuest: true
    //   },
  // },
 
  ]
})

router.beforeEach((to,from,next)=>{
  
  if(to.matched.some(record => record.meta.requiresAuth)){

    if(!firebase.auth().currentUser){
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)){

    if(firebase.auth().currentUser){
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else{
    next();
  }
})

export default router;
