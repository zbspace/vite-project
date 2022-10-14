let _vue = null;
export default class VueRouter {
  static install(Vue) {
    // 1. 判断当前插件是否已安装
    if (VueRouter.install.installed) {
      return;
    }
    VueRouter.install.installed = true;
    // 2. 把vue构造函数记录到全局变脸
    _vue = Vue;
    // 3. 把创建vue实例时候传入的router对象注入到vue实例上（可用prototype）
    // 混入
    _Vue.mixin({
      beforeCreate() {
        // 只有vue实例的$options选项中才会有router属性
        if (this.$options.router) {
          _vue.prototype.$router = this.$options.router;
          this.$options.router.init();
        }
      },
    });
  }

  constructor(options) {
    this.options = options;
    this.routeMap = {}; // 路由地址：路由组件 存储路由规则
    this.data = _Vue.observable({
      current: "/",
    });
  }

  init() {
    this.createRouteMap();
    this.initComponents(_vue);
    this.initEvent();
  }

  /**
   * 遍历options传过来的路由规则routes，解析成键值对的形式存储到routerMap中
   */
  createRouteMap() {
    this.options.routes.forEach((route) => {
      this.routeMap[route.path] = route.component;
    });
  }

  /**
   * 创建router-link组件
   * @param {*} Vue vue构造函数
   */
  initComponents(Vue) {
    Vue.component("router-link", {
      props: {
        to: String,
      },
      //   template: "<a :href='to'><slot> </slot></a>", // 运行时 不支持
      render(h) {
        return h(
          "a",
          {
            attrs: {
              href: this.to,
            },
            on: {
              click: function () {
                this.clickHandler();
              },
            },
          },
          [this.$slots.default],
        );
      },
      methods: {
        clickHandler(e) {
          history.pushState({}, "", this.to);
          this.$router.data.current = this.to;
          e.preventDefault();
        },
      },
    });

    const self = this;

    Vue.component("router-view", {
      render(h) {
        const component = self.routeMap[self.data.current];
        return h(component);
      },
    });
  }

  /**
   * 注册popstate事件
   */
  initEvent() {
    window.addEventListener("popstate", () => {
      this.data.current = window.location.pathname;
    });
  }
}
