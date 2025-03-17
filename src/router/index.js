// src/routers/routes.js
import { lazy } from 'react';

// Use lazy loading for better performance
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Profile = lazy(() => import('../pages/Profile'));
const MembershipPlans = lazy(() => import('../pages/MembershipPlans'));
const Workouts = lazy(() => import('../pages/Workouts'));
const ClassSchedule = lazy(() => import('../pages/ClassSchedule'));
const AttendanceHistory = lazy(() => import('../pages/AttendanceHistory'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Define public routes (accessible without authentication)
export const publicRoutes = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
];

// Define private routes (require authentication)
export const privateRoutes = [
  {
    path: '/',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/profile',
    component: Profile,
    exact: true,
  },
  {
    path: '/membership-plans',
    component: MembershipPlans,
    exact: true,
  },
  {
    path: '/workouts',
    component: Workouts,
    exact: true,
  },
  {
    path: '/class-schedule',
    component: ClassSchedule,
    exact: true,
  },
  {
    path: '/attendance',
    component: AttendanceHistory,
    exact: true,
  },
  {
    path: '*',
    component: NotFound,
  },
];