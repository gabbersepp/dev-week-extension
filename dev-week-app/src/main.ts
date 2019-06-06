import Vue, { CreateElement } from 'vue';
import App from './App';
import "./style/main.scss";

Vue.config.productionTip = false;

if (!document.getElementById('dev-week-app')) {
    const body: HTMLElement = document.body;
    const newDiv: HTMLElement = document.createElement('div');
    newDiv.id = 'dev-week-app';
    body.appendChild(newDiv);
}

new Vue({
    render: (h: CreateElement): any => h(App)
}).$mount('#dev-week-app');
