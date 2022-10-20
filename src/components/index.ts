import { App } from 'vue'
import Pagination from './Pagination/index.vue'
import Card from './Card/index.vue'
import PageContainer from './PageContainer/index.vue'
import DialogForm from './DialogForm/index.vue'
import Draggable from './Draggable/index.vue'
export default {
  install (app: App) {
    app.component('AppPagination', Pagination)
    app.component('AppCard', Card)
    app.component('AppPageContainer', PageContainer)
    app.component('AppDialogForm', DialogForm)
    app.component('AppDraggable', Draggable)
  }
}
