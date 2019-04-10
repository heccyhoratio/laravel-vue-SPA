/**
 * All the routes used on this app are defined here
 */
import VueRouter from 'vue-router';
import Home from './components/Home';
import Posts from './components/Posts';
import Comments from './components/Comments';
import Comment from './components/Comment';
import Store from './store';

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
        beforeEnter: (to, from, next) => {
            Store.commit('misc/setActiveMenu', 'home');
            next();
        },
        beforeUpdate (to, from, next) {
            next();
        }
    },
    {
        name: 'posts',
        path: '/posts',
        component: Posts,
        beforeEnter: (to, from, next) => {
            Store.dispatch('posts/fetchAll');
            Store.commit('misc/setActiveMenu', 'posts');
            next();
        },
        beforeUpdate (to, from, next) {
            next();
        }
    },
    {
        name: 'commentsForPost',
        path: '/post/:id/comments',
        component: Comments,
        beforeEnter: (to, from, next) => {
            Store.dispatch('comments/fetchForPost', to.params.id);
            Store.commit('misc/setActiveMenu', 'comments');
            next();
        },
        beforeUpdate (to, from, next) {
            next();
        }
    },
    {
        name: 'commentForPost',
        path: '/post/:postid/comment/:commentid',
        component: Comment,
        beforeEnter: (to, from, next) => {
            Store.dispatch('comments/fetchSingle', to.params.commentid);
            Store.commit('misc/setActiveMenu', 'comments');
            next();
        },
        beforeUpdate (to, from, next) {
            next();
        }
    },
    {
        name: 'comments',
        path: '/comments',
        component: Comments,
        beforeEnter: (to, from, next) => {
            Store.dispatch('comments/fetchAll');
            Store.commit('misc/setActiveMenu', 'comments');
            next();
        },
        beforeUpdate (to, from, next) {
            next();
        }
    },
    {
        name: 'comment',
        path: '/comment/:id',
        component: Comment,
        beforeEnter: (to, from, next) => {
            Store.dispatch('comments/fetchSingle', to.params.id);
            Store.commit('misc/setActiveMenu', 'comments');
            next();
        },
        beforeUpdate (to, from, next) {
            next();
        }
    }
];

const router = new VueRouter({
    mode: 'hash',
    hashbang: false,
    routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        };
    }
});

export default router;
