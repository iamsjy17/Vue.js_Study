// 실습 #1 todo-footer 컴포넌트 전역 등록
var cmp = {
  template: '<div>local Component 입니다.</div>'
}

// global component todo footer
Vue.component('todo-footer', {
  template: '<p>this is global child component</p>'
})

var test = new Vue({
  el: '#app',
  data: {
    message: 'this is a parent component'
  },
  //  local component todo list
  components: {
    'todo-list': cmp
  }
})
