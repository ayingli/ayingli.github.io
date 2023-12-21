(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{356:function(a,t,s){"use strict";s.r(t);var n=s(6),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"如何用python的pandas库查询指定数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何用python的pandas库查询指定数据"}},[a._v("#")]),a._v(" 如何用Python的pandas库查询指定数据")]),a._v(" "),t("h2",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[a._v("#")]),a._v(" 题目")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("DataFrame students\n+-------------+--------+\n| Column Name | Type   |\n+-------------+--------+\n| student_id  | int    |\n| name        | object |\n| age         | int    |\n+-------------+--------+\n")])])]),t("p",[a._v("编写一个解决方案，选择 "),t("code",[a._v("student_id = 101")]),a._v(" 的学生的 name 和 age 并输出。")]),a._v(" "),t("p",[a._v("返回结果格式如下示例所示。")]),a._v(" "),t("p",[t("strong",[a._v("示例 1:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("输入：\n+------------+---------+-----+\n| student_id | name    | age |\n+------------+---------+-----+\n| 101        | Ulysses | 13  |\n| 53         | William | 10  |\n| 128        | Henry   | 6   |\n| 3          | Henry   | 11  |\n+------------+---------+-----+\n输出：\n+---------+-----+\n| name    | age | \n+---------+-----+\n| Ulysses | 13  |\n+---------+-----+\n解释：\n学生 Ulysses 的 student_id = 101，所以我们输出了他的 name 和 age。\n")])])]),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[a._v("#")]),a._v(" 解决方案")]),a._v(" "),t("h3",{attrs:{id:"_1、审题-理解题意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、审题-理解题意"}},[a._v("#")]),a._v(" 1、审题，理解题意")]),a._v(" "),t("p",[a._v("题目提供了一个 pandas DataFrame表，表中有若干条数据，每条数据有三个属性，分别为ID，name和age，要求返回 DataFrame表中id为101的name和age。")]),a._v(" "),t("p",[a._v("先来温习下DataFrame：类似于电子表格或 SQL 表格的二维表结构。每一行代表一个单独的记录，每一列代表一个不同的属性。它是可变大小的，旨在处理不同类型的数据的混合。")]),a._v(" "),t("h3",{attrs:{id:"_2、解题思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、解题思路"}},[a._v("#")]),a._v(" 2、解题思路")]),a._v(" "),t("p",[a._v("题目中我们接受一个 DataFrame 和一个 student_id 作为输入。然后，我们使用 loc 方法和一个布尔遮罩（在这种情况下，它是 "),t("code",[a._v("df['student_id'] == student_id")]),a._v("）来选择我们要的行和列。返回的结果是一个 DataFrame，它只包含指定 student_id 的学生的名字和年龄。")]),a._v(" "),t("p",[t("code",[a._v("DataFrame")]),a._v(" 的 "),t("code",[a._v("loc")]),a._v(" 属性是 pandas 库中的一个功能，它用于基于标签的数据选择。使用 "),t("code",[a._v("loc")]),a._v("，你可以通过行和列的标签来访问 DataFrame 中的数据。这是一个非常方便的方法，特别是当你知道你想要的特定行和列的标签时。对于题目我们将使用 loc 函数来选择 student_id 为 101 的行，并从 name 和 age 列返回值。为此我们必须为 loc 提供两个参数。students.loc[students['student_id'] == 101, ['name', 'age']]")]),a._v(" "),t("p",[a._v("boolean 遮罩: 一系列 True/False 值，用于根据特定条件从另一个数据结构(如列表、数组或 DataFrame)中筛选或选择元素。")]),a._v(" "),t("h3",{attrs:{id:"_3、代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、代码实现"}},[a._v("#")]),a._v(" 3、代码实现")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" pandas "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" pd\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("selectData")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("students"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" pd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DataFrame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" pd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DataFrame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" students"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("loc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("students"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"student_id"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("101")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"name"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"age"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("   \n")])])]),t("h3",{attrs:{id:"_4、执行结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、执行结果"}},[a._v("#")]),a._v(" 4、执行结果")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yishukan/yishukan/raw/master/img/image-20231025065952727.png",alt:"image-20231025065952727"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);