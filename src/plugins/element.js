import Vue from 'vue'
import { 
  Message, Button, Form, 
  FormItem, Input, Container, 
  Header, Aside, Main, Footer,
  RadioGroup, RadioButton, Menu,
  Submenu, MenuItemGroup, MenuItem,
  Breadcrumb, BreadcrumbItem, Card,
  Row, Col,Table, TableColumn,Switch,
  Pagination

} from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

// 布局容器
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)

// 
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Pagination)

Vue.prototype.$message = Message
