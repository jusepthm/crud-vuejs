import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users/Users'
import Add from '@/components/Users/Add'
import Edit from '@/components/Users/Edit'
import Job from '@/components/Job/Job'
import AddJob from '@/components/Job/AddJob'
import EditJob from '@/components/Job/EditJob'
import Registration from '@/components/Registration/Registration'
import AddReg from '@/components/Registration/AddReg'
import EditReg from '@/components/Registration/EditReg'
import Client from '@/components/Client/Client'
import AddClient from '@/components/Client/AddClient'
import EditClient from '@/components/Client/EditClient'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/job',
      name: 'Job',
      component: Job
    },
    {
      path: '/addjob',
      name: 'AddJob',
      component: AddJob
    },
    {
      path: '/editjob/:id',
      name: 'EditJob',
      component: EditJob
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/addreg',
      name: 'AddReg',
      component: AddReg
    },
    {
      path: '/editreg/:id',
      name: 'EditReg',
      component: EditReg
    },
    {
      path: '/client',
      name: 'Client',
      component: Client
    },
    {
      path: '/addclient',
      name: 'AddClient',
      component: AddClient
    },
    {
      path: '/editclient/:id',
      name: 'EditClient',
      component: EditClient
    },
  ]
})
