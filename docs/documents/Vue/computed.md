# 4. 计算属性

## 4.1 为什么需要计算属性

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。
在模板中放入太多的逻辑会让模板过重且难以维护。
比如下面的场景:

页面中有三个 input 标签，前两个分别是 姓 和 名，
最后一个需要根据前两个 input 标签的输入计算产生，
显示效果如：Yeung WanLum（姓名之间用空格隔开）

```html
<div id="app">
  姓&nbsp;&nbsp;&nbsp;：<input type="text" v-model="firstName"><br>
  名&nbsp;&nbsp;&nbsp;：<input type="text" v-model="lastName"><br>
  <!-- 姓 + 名 = 姓名 -->
  全名：<input type="text" v-model="FullName">
</div>
```

## 4.2 什么是计算属性

计算属性，顾名思义，用来计算出一个值的**属性**。
调用这个值时，不需要加括号，可以直接当属性用。

* computed是计算属性，事实上和和data对象里的数据属性**在使用上是同一类的**
* 你在取用的时候，用this.fullName去取用，就和取data一样（不要当成函数调用！！）

```html
<body>
  <!-- 希望 Vue 能够控制下面的这个 div，帮我们在把数据填充到 div 内部 -->
  <div id="app">{{ username }}</div>
  
  <script>
    // 2. 创建 Vue 的实例对象
    const vm = Vue.createApp({
      // data 对象就是要渲染到页面上的数据
      data() {
       return {
        firstName: 'Yeung',
        lastName: 'WanLum'
       }
      },
      computed: {
        fullName() {
          return  this.username + lastName 
        }
      }
    });
    // 通过vm(view model)把 username渲染到id为app的元素中
    vm.mount('#app');
  </script>
</body>
```

以上 computed中声明的fullName就是一个回调函数， 它在初始化数据和其他 data 属性数据发生变化时自动调用，将返回值作为属性值。
这时，如果你改变姓和名的数据，最后全名数据也会随之改变。

::: warning
computed中的属性不能与data中的属性同名，否则会报错
:::

## 4.3 计算属性中的缓存

计算属性中的缓存是指，在页面中多次获取计算属性的属性值，如果相关的 data 属性数据没有发生改变，则会调取缓存中的数据，从而提高性能。
这也是计算属性和 methods 属性的不同也是优势之处

```html
<p>{{fullName}}</p>
<p>{{fullName}}</p>
<p>{{fullName}}</p>
```

上面的代码，fullName在p标签中多次获取值，fullName对应的方法只会在初始化数据时调用一次，之后只要依赖的firstName和LastName不变，那么每次都会
获取缓存中的fullName的值

## 4.4 计算属性中的 getter 和 setter

在computed计算属性中，我们是如何获取计算后的结果的呢？其实在computed计算属性的方法中，有两个方法，`set`方法和`get`方法，俗称Setter和Getter，
而我们在获取计算后的结果的时候，都调用的是getter方法。下面我们来介绍一下这两个方法

```js
 // 2. 创建 Vue 的实例对象
    const vm = Vue.createApp({
      // ...省略代码
      computed: {
        fullName() {
          return  this.username + lastName 
        }
      },
      // 上面的代码也可以写成如下形式,只不过，如果只是为了获取值，我们简化为上述代码:
      // computed: {
      //   fullName() {
      //     get(){
      //       return  this.username + lastName 
      //     }
      //   }
      // }
    });
    // 通过vm(view model)把 username渲染到id为app的元素中
    vm.mount('#app');
```

现在，我们知道了，通过firstName和LastName可以通过计算属性得到全名，但是如果我想通过 输入全名，得到 firstName和LastName怎么办呢？
这时候就需要computed计算属性的方法中的Setter方法了

```js
// ...省略代码
computed: {
  fullName() {
    get () {
      return  this.username + lastName 
    },
    set (value) {
      // 得到fullName的值，并把该值用空格分隔
      const names = value.split(' ');
      // 把分隔好的数组结果，通过索引 0 拿到 firstName
      this.firstName = names[0];
      // 把分隔好的数组结果，通过索引 1 拿到 lastName
      this.lastName = names[1];
    }
  }
}
```

所以，set方法的用处是什么呢？ 就是用于监视档期那属性值的变化，当属性值发生了改变时自动调用，同步更新相关的其他属性的值。

## 4.5 总结
