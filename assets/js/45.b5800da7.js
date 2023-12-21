(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{355:function(a,t,s){"use strict";s.r(t);var n=s(6),r=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"如何用python的pandas库函数透视数据表让数据的显示更清晰"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何用python的pandas库函数透视数据表让数据的显示更清晰"}},[a._v("#")]),a._v(" 如何用Python的pandas库函数透视数据表让数据的显示更清晰")]),a._v(" "),t("h2",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[a._v("#")]),a._v(" 题目")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("DataFrame weather\n+-------------+--------+\n| Column Name | Type   |\n+-------------+--------+\n| city        | object |\n| month       | object |\n| temperature | int    |\n+-------------+--------+\n")])])]),t("p",[a._v("编写一个解决方案，以便将数据 "),t("strong",[a._v("旋转")]),a._v("，使得每一行代表特定月份的温度，而每个城市都是一个单独的列。")]),a._v(" "),t("p",[a._v("输出结果格式如下示例所示。")]),a._v(" "),t("p",[t("strong",[a._v("示例 1:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("输入：\n+--------------+----------+-------------+\n| city         | month    | temperature |\n+--------------+----------+-------------+\n| Jacksonville | January  | 13          |\n| Jacksonville | February | 23          |\n| Jacksonville | March    | 38          |\n| Jacksonville | April    | 5           |\n| Jacksonville | May      | 34          |\n| ElPaso       | January  | 20          |\n| ElPaso       | February | 6           |\n| ElPaso       | March    | 26          |\n| ElPaso       | April    | 2           |\n| ElPaso       | May      | 43          |\n+--------------+----------+-------------+\n输出：\n+----------+--------+--------------+\n| month    | ElPaso | Jacksonville |\n+----------+--------+--------------+\n| April    | 2      | 5            |\n| February | 6      | 23           |\n| January  | 20     | 13           |\n| March    | 26     | 38           |\n| May      | 43     | 34           |\n+----------+--------+--------------+\n解释：\n表格被旋转，每一列代表一个城市，每一行代表特定的月份。\n")])])]),t("h2",{attrs:{id:"解题方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解题方案"}},[a._v("#")]),a._v(" 解题方案")]),a._v(" "),t("h3",{attrs:{id:"_1、审题-理解题意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、审题-理解题意"}},[a._v("#")]),a._v(" 1、审题，理解题意")]),a._v(" "),t("p",[a._v("题目的意思是有DataFrame表行显示城市的的月份和温度，希望将表旋转使得每一行代表特定月份的温度，而每个城市都是一个单独的列。此时可以用pandas 中 pivot 函数对列的值重塑数据并且在外部得到一个新的 DataFrame")]),a._v(" "),t("h5",{attrs:{id:"pivot-函数的参数介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pivot-函数的参数介绍"}},[a._v("#")]),a._v(" pivot 函数的参数介绍：")]),a._v(" "),t("ul",[t("li",[a._v("index： 确定新 DataFrame 中的行。")]),a._v(" "),t("li",[a._v("columns： 确定新 DataFrame 中的列。")]),a._v(" "),t("li",[a._v("values： 指定重塑表格时要使用的值。")])]),a._v(" "),t("h3",{attrs:{id:"_2、解题思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、解题思路"}},[a._v("#")]),a._v(" 2、解题思路")]),a._v(" "),t("p",[a._v("我们一步步通过代码来实现该需求：")]),a._v(" "),t("p",[a._v("1、导入 pandas：")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" pandas "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" pd\n")])])]),t("p",[a._v("2、pivot 函数")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[a._v("ans "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" weather"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("pivot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("index"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'month'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" columns"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'city'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" values"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'temperature'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("下面是 pivot 函数中的每个参数执行的操作：")]),a._v(" "),t("ul",[t("li",[a._v("index：它确定新 DataFrame 中的行。在本例中，我们使用原始 DataFrame 中的 month 列作为索引，这意味着我们的透视表将为 month 列中的每个唯一值都建立行。")]),a._v(" "),t("li",[a._v("columns：它确定新 DataFrame 中的列。在这里，我们使用的是 city 列，这意味着我们的透视表将有一列对应于 city 列中的每个唯一值。")]),a._v(" "),t("li",[a._v("values：此参数指定重塑表格时要使用的值。在本例中，我们使用原始 DataFrame 中的 temperature 列。")])]),a._v(" "),t("p",[a._v("3、返回修改后的 DataFrame：")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" ans            "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#这行代码返回透视后的 DataFrame。")]),a._v("\n")])])]),t("p",[t("img",{attrs:{src:"https://gitee.com/yishukan/yishukan/raw/master/img/1696838743-irSxQu-image.png",alt:"image.png"}})]),a._v(" "),t("p",[a._v("如上图可以展示表格的变化过程")]),a._v(" "),t("h4",{attrs:{id:"注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[a._v("#")]),a._v(" 注意：")]),a._v(" "),t("ul",[t("li",[a._v("丢失的数据： pivot 函数不处理相同索引/列组合的重复条目。如果有重复的条目，可以考虑使用 pivot_table，它可以聚合重复的条目。")]),a._v(" "),t("li",[a._v("数据类型： 对于每个给定的表，city 和 month 列是 object 数据类型，相当于 pandas 中的字符串型，而 temperature 是整型。")]),a._v(" "),t("li",[a._v("顺序： 输出不一定与示例中的顺序相同(即从 1 月到 5 月)。如果您想要按特定顺序排列，则必须在透视后对其进行排序。")])]),a._v(" "),t("h3",{attrs:{id:"_3、代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、代码实现"}},[a._v("#")]),a._v(" 3、代码实现")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" pandas "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" pd\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pivotTable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("weather"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" pd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DataFrame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" pd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DataFrame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    ans "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" weather"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("pivot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("index"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'month'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" columns"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'city'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" values"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'temperature'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" ans\n")])])]),t("h3",{attrs:{id:"_4、执行结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、执行结果"}},[a._v("#")]),a._v(" 4、执行结果")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yishukan/yishukan/raw/master/img/image-20231025113634195.png",alt:"image-20231025113634195"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);