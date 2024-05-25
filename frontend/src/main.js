import {createApp} from 'vue'
import '@/styles/style.scss'
import App from './App.vue'
import {OhVueIcon, addIcons} from "oh-vue-icons";
import {MdArrowforwardios, MdPhoneOutlined} from "oh-vue-icons/icons";
import { HiSearch } from "oh-vue-icons/icons";
import { RiArrowDropRightLine } from "oh-vue-icons/icons";
addIcons(MdPhoneOutlined,HiSearch,MdArrowforwardios)


const app = createApp(App);
app.component('v-icon', OhVueIcon)


app.mount('#app')
