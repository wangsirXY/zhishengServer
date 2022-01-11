# 2. Vue的MVVM模式

::: tip 目标
了解MVVM模式以及Vue框架在MVVM中的定位
:::

## 2.1 为什么要了解MVVM模式

我们在`介绍Vue`这一节说过，Vue是双向绑定的，它所采用的模式就是MVVM，为了深入的了解Vue，我们需要学习MVVM模式

## 2.2 MVVM模式是什么

MVVM 是一个软件架构设计模式，源自于经典的 Model–View–Controller（MVC）模式。

MVVM 其实表示的是 View-ViewModel-Model，就是视图层-视图模型层-模型层。

MVVM 的出现促进了前端页面与数据业务逻辑的分离，极大地提高了前端开发效率。

**MVVM 的核心是 ViewModel 层，它就像是一个中转站，负责转换 Model 中的数据对象来让数据变得更容易管理和使用，该层向上与视图层进行双向数据绑定**，向下与 Model 层通过接口请求进行数据交互，起呈上启下作用。

以上是整个Web开发中，所揭示的MVVM模式。

![mvvm模式](./images/882926-20171115175942921-775941263.png)

## 2.3 Vue中的MVVM模式

在Vue中，它的涵义与传统意义上的MVVM不同，传统意义上的MVVM指的是前后端都包括，而Vue中的MVVM直指前端:

* View 是作为视图层，简单来说可以把它理解为HTML页面；
* Model 是作为模型层，它是负责处理业务逻辑以及和服务器端进行交互的；
* ViewModel 是作为视图模型层，也就是 Vue 框架所起到的作用了，主要是作为 View 层和 Model 层之间的通信桥梁。

![vue中的mvvm](./images/mvvm.png)

## 2.4 使用Vue编写代码的好处

首先看这样的一个由jQuery完成的 `用户点击打印一句话`这样的需求

```js
if (showBtn) {
  var btn = $('<button>click me</button>');
  btn.on('click', function(){
      console.log('你终于点中了我...');
  });
  $('#app').append(btn);
}
```

缺点:

* 负责视图的 HTML 代码和负责业务逻辑的 JavaScript 代码耦合在一起。
* 随着功能的不断完善和增加，直接操作 DOM 会变得越来越麻烦。

然后使用Vue完成:

```js
<body>
  <div id="app">
    <button v-if="showBtn" v-on:click="handleClick">Click Me</button>
  </div>

  <script>
    const vm = Vue.createApp({
      // data 对象就是要渲染到页面上的数据
      data() {
        return {
          showBtn: 'true'
        }
      },
      methods: {
        handleClick(){
          console.log('你终于点中了我...');
        }
      }
    });
    // 通过vm(view model)把 username渲染到id为app的元素中
    vm.mount('#app');
  </script>
</body>
```

上面这段代码咱们会发现，负责视图的 HTML 代码和负责业务逻辑的 JavaScript 代码有效地分离开来。
之所以能做到这一点，主要是依靠 Vue 框架才得以实现的。

## 2.5 总结

::: danger 总结

* 为什么要学习MVVM模式?
* MVVM模式是什么? 有哪些部分组成?
* Vue中在MVVM模式中处于什么位置?
* Vue中哪些代码属于View 哪些代码属于model 哪些代码属于ViewModel
* 使用MVVM模式，能让前端的代码有什么样的改变?
:::
