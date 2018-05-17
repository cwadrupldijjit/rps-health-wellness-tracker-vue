import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

let id = 1;

const store = new Vuex.Store({
    state: {
        user: {
            name: 'Samuel',
        },
        categories: [
            {
                color: '#e4ff00',
                name: 'Sugar',
                route: 'sugar',
                url: require('../assets/sugar-balance.jpeg'),
                items: Array(10).fill('').map(_ => ({
                    id: id++,
                    description: 'A day with less than 20 grams of added sugar',
                    completed: null,
                })),
            },
            {
                color: '#6bc4ec',
                name: 'Water',
                route: 'water',
                url: require('../assets/water-goal.jpeg'),
                items: Array(10).fill('').map(_ => ({
                    id: id++,
                    description: 'Drink 10 ml of water per pound of weight',
                    completed: null,
                })),
            },
            {
                color: '#941f94',
                name: 'Portion Control',
                route: 'portion-control',
                url: require('../assets/salad-plate.jpeg'),
                items: Array(10).fill('').map(_ => ({
                    id: id++,
                    description: 'Eat dinner on a saucer/salad plate',
                    completed: null,
                })),
            },
            {
                color: '#07bb07',
                name: 'Fruits & Veggies',
                route: 'fruits-and-veggies',
                url: require('../assets/fruits.jpeg'),
                items: Array(10).fill('').map(_ => ({
                    id: id++,
                    description: 'Eat 5 full servings (fist size) of fresh fruits or vegetables',
                    completed: null,
                })),
            },
            {
                color: '#ffa22e',
                name: 'Exercise',
                route: 'exercise',
                url: require('../assets/exercise-1.jpeg'),
                items: Array(10).fill('').map(_ => ({
                    id: id++,
                    description: 'Exercise for 30 minutes',
                    completed: null,
                })),
            },
            {
                color: '#ed143d',
                name: 'Weight',
                route: 'weight',
                url: require('../assets/weight-scale.jpeg'),
                items: Array(10).fill('').map(_ => ({
                    id: id++,
                    description: 'Weigh yourself and record it where you see it everyday',
                    completed: null,
                })),
            },
            {
                color: '#d3d3d3',
                name: 'Other',
                route: 'other',
                url: require('../assets/goals.jpeg'),
                items: [
                    ...Array(5).fill('').map(_ => ({
                        id: id++,
                        description: 'Watch a documentary or read an article/chapter on health, food, or exercise',
                        completed: null,
                    })),
                    ...Array(5).fill('').map(_ => ({
                        id: id++,
                        description: 'Create your own goal and write it below',
                        customDescription: '',
                        completed: null,
                    })),
                ],
            },
        ],
    },
    mutations: {
        updateUsername: (state, name) => state.user.name = name,
        
    },
    // actions: {
        
    // },
    // modules: {
    //     myModule: {
    //         namespaced: true,
            
    //     }
    // },
});

export {
    store,
    Vuex,
};