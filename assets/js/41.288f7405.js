(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{351:function(a,t,s){"use strict";s.r(t);var n=s(6),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"如何用python的pandas库函数筛选出体重大于100kg的动物并降序排列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何用python的pandas库函数筛选出体重大于100kg的动物并降序排列"}},[a._v("#")]),a._v(" 如何用Python的pandas库函数筛选出体重大于100kg的动物并降序排列")]),a._v(" "),t("h2",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[a._v("#")]),a._v(" 题目")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("DataFrame animals\n+-------------+--------+\n| Column Name | Type   |\n+-------------+--------+\n| name        | object |\n| species     | object |\n| age         | int    |\n| weight      | int    |\n+-------------+--------+\n")])])]),t("p",[a._v("编写一个解决方案来列出体重 "),t("strong",[a._v("严格超过")]),a._v(" "),t("code",[a._v("100")]),a._v(" 千克的动物的名称。")]),a._v(" "),t("p",[a._v("按体重 "),t("strong",[a._v("降序")]),a._v(" 返回动物。")]),a._v(" "),t("p",[a._v("返回结果格式如下示例所示。")]),a._v(" "),t("p",[t("strong",[a._v("示例 1:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("输入：\nDataFrame animals:\n+----------+---------+-----+--------+\n| name     | species | age | weight |\n+----------+---------+-----+--------+\n| Tatiana  | Snake   | 98  | 464    |\n| Khaled   | Giraffe | 50  | 41     |\n| Alex     | Leopard | 6   | 328    |\n| Jonathan | Monkey  | 45  | 463    |\n| Stefan   | Bear    | 100 | 50     |\n| Tommy    | Panda   | 26  | 349    |\n+----------+---------+-----+--------+\n输出：\n+----------+\n| name     |\n+----------+\n| Tatiana  |\n| Jonathan |\n| Tommy    |\n| Alex     |\n+----------+\n解释：\n所有体重超过 100 的动物都应包含在结果表中。\nTatiana 的体重为 464，Jonathan 的体重为 463，Tommy 的体重为 349，Alex 的体重为 328。\n结果应按体重降序排序。\n")])])]),t("p",[a._v("在 Pandas 中，"),t("strong",[a._v("方法链")]),a._v(" 允许我们在 DataFrame 上执行操作，而无需将每个操作拆分成单独的行或创建多个临时变量。")]),a._v(" "),t("p",[a._v("你能用 "),t("strong",[a._v("一行")]),a._v(" 代码的方法链完成这个任务吗？")]),a._v(" "),t("h2",{attrs:{id:"解题方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解题方案"}},[a._v("#")]),a._v(" 解题方案")]),a._v(" "),t("h3",{attrs:{id:"_1、审题-理解题意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、审题-理解题意"}},[a._v("#")]),a._v(" 1、审题，理解题意")]),a._v(" "),t("p",[a._v("题目的意思是列出体重严格超过 100 公斤的动物的名字，并按体重降序排列。我们可以看到Tatiana 的体重为 464，Jonathan 的体重为 463，Tommy 的体重为 349，Alex 的体重为 328。这四个动物的体重超过了100公斤，对它们进行排序为Tatiana    Jonathan     Tommy     Alex")]),a._v(" "),t("p",[a._v("我们可以用如下的步骤来实现：")]),a._v(" "),t("ul",[t("li",[a._v("布尔索引：使用布尔条件筛选 DataFrame 中的行。在这个问题中，我们使用这种技术来选择体重超过 100 公斤的动物。\n数据排序：")]),a._v(" "),t("li",[a._v("sort_values() 方法： 用于基于一个或多个列对数据进行排序的 Pandas DataFrame 方法。在这个问题中，我们按重量降序对动物进行排序。\n列选择：")]),a._v(" "),t("li",[a._v("子集选择：在过滤和排序之后，我们从 DataFrame 中选择列的子集。在本例中，我们只选择 'name' 列来生成动物名称的最终列表。\n方法链：")]),a._v(" "),t("li",[a._v("链操作：通过用点连接方法，在一行中对 DataFrame 执行多个操作。这是 pandas 的一个强大功能，它可以使代码简洁，但对于新手来说可能很难读懂。")]),a._v(" "),t("li",[a._v("Python 函数：我们定义了一个函数 findHeavyAnimals 来封装我们的解决方案并使其可重复使用。此函数将一个 DataFrame 作为参数，并返回另一个 DataFrame 作为结果。")])]),a._v(" "),t("h3",{attrs:{id:"_2、解题思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、解题思路"}},[a._v("#")]),a._v(" 2、解题思路")]),a._v(" "),t("h5",{attrs:{id:"筛选操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#筛选操作"}},[a._v("#")]),a._v(" 筛选操作:")]),a._v(" "),t("p",[a._v("我们从筛选体重超过100公斤的动物开始。")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[a._v("filtered_animals "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" animals"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("animals"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'weight'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("ul",[t("li",[a._v("animals['weight'] > 100：这是一个布尔索引操作。对于 DataFrame 中的每一行，它检查 weight 列中的值是否大于 100。这会产生一个布尔型(True 或 False)序列。")]),a._v(" "),t("li",[a._v("animals[...]：通过将我们的布尔序列放入 DataFrame 的索引括号中，我们筛选出条件为 True 的行。")]),a._v(" "),t("li",[a._v("在此操作之后，我们的 DataFrame 中只剩下重量超过 100 公斤的动物的行。")])]),a._v(" "),t("h5",{attrs:{id:"排序操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排序操作"}},[a._v("#")]),a._v(" 排序操作:")]),a._v(" "),t("p",[a._v("接下来，我们根据这些动物的体重按降序对它们进行排序。")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[a._v("sorted_animals "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" filtered_animals"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sort_values"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("by"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'weight'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" ascending"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("False")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("ul",[t("li",[a._v("sort_values()：这是一种应用于 DataFrame 的方法，允许基于列值进行排序。")]),a._v(" "),t("li",[a._v("by='weight'：我们指定要基于 weight 列进行排序。")]),a._v(" "),t("li",[a._v("ascending=False：通过将此参数设置为 False，我们表示希望排序按降序进行(从最重到最轻)。")])]),a._v(" "),t("h5",{attrs:{id:"选择-name-列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择-name-列"}},[a._v("#")]),a._v(" 选择 name 列:")]),a._v(" "),t("p",[a._v("最后，从排序的 DataFrame 中，我们只选择名称。")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[a._v("names "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" sorted_animals"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("ul",[t("li",[t("p",[a._v("根据重量对行进行排序后，我们只对最终结果的 name 列感兴趣。通过使用双方括号 [['name']]，我们只选择此列。双括号确保结果是 DataFrame 而不是 Series。")]),a._v(" "),t("p",[a._v("如下图显示筛选和排序过程，最终得到结果。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yishukan/yishukan/raw/master/img/1696838950-OWFjOJ-image.png",alt:"image.png"}})])])]),a._v(" "),t("h3",{attrs:{id:"_3、代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、代码实现"}},[a._v("#")]),a._v(" 3、代码实现")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("def")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("findHeavyAnimals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("animals"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" pd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DataFrame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" pd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("DataFrame"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    filtered_animals "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" animals"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("animals"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'weight'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    sorted_animals "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" filtered_animals"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sort_values"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("by"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'weight'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" ascending"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("False")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    names "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" sorted_animals"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" names\n")])])]),t("h3",{attrs:{id:"_4、执行结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、执行结果"}},[a._v("#")]),a._v(" 4、执行结果")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/yishukan/yishukan/raw/master/img/image-20231025122158410.png",alt:"image-20231025122158410"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);