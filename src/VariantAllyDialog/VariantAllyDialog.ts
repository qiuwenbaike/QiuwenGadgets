import App from './App.vue';
import {createApp} from 'vue';

const root = document.createElement('div');
document.body.append(root);
createApp(App).mount(root);
