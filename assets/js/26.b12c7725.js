(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{336:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"python批量修改指定目录下图片的大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python批量修改指定目录下图片的大小"}},[t._v("#")]),t._v(" Python批量修改指定目录下图片的大小")]),t._v(" "),s("h3",{attrs:{id:"应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景：")]),t._v(" "),s("p",[t._v("批量修改指定目录下图片大小通常是在需要对大量图片进行统一处理的情况下使用的。例如，如果需要将一批图片的大小调整为相同的尺寸，以便在网站、博客或其他地方进行统一展示，那么就可以使用批量修改指定目录下图片大小的方法。此外，批量修改指定目录下图片大小也可以用于将图片转换为不同的格式，以便在不同的设备或应用程序中进行使用。")]),t._v(" "),s("ol",[s("li",[t._v("图片处理和编辑：在摄影、图形设计、广告等行业中，经常需要对大量的图片进行大小修改和编辑。批量修改指定目录下的图片大小可以大大提高工作效率。")]),t._v(" "),s("li",[t._v("网络和电子商务：许多网站和电子商务平台需要展示大量的图片，但为了加快网页加载速度和提高用户体验，通常需要对图片大小进行优化。批量修改指定目录下的图片大小可以帮助网站管理员和电子商务运营者快速优化图片大小，提高网页加载速度。")]),t._v(" "),s("li",[t._v("文档和报告：在某些情况下，需要将图片插入到文档或报告中。为了使文档内容更加清晰易读，可能需要将图片大小进行调整。批量修改指定目录下的图片大小可以方便地将图片大小调整到合适的尺寸，并插入到文档或报告中。")]),t._v(" "),s("li",[t._v("社交媒体和内容营销：社交媒体平台和内容营销网站通常需要上传大量的图片。为了保持一致的视觉效果和提高用户体验，需要将图片大小进行统一调整。批量修改指定目录下的图片大小可以帮助社交媒体和内容营销人员快速统一图片大小，提高网站的美观度和用户体验。")]),t._v(" "),s("li",[t._v("印刷品制作：在印刷品制作过程中，需要使用特定大小的图片以确保印刷效果。通过批量修改图片大小，可以方便地为不同的印刷品准备合适的图片。")]),t._v(" "),s("li",[t._v("移动应用开发：在移动应用开发过程中，需要为不同分辨率的设备提供不同大小的图片。通过批量修改图片大小，可以确保应用在不同设备上的显示效果良好。")])]),t._v(" "),s("p",[t._v("总之，批量修改指定目录下图片大小的应用场景非常广泛，包括但不限于上述情况。通过使用相应的软件或工具，可以快速高效地完成批量修改图片大小的任务，提高工作效率和质量。")]),t._v(" "),s("h3",{attrs:{id:"代码实现思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码实现思路"}},[t._v("#")]),t._v(" 代码实现思路")]),t._v(" "),s("p",[t._v("请确保已安装Pillow库，如果没有，请使用pip install Pillow进行安装。先使用Pillow库批量修改指定目录下所有图片的大小，首先定义了一个函数"),s("code",[t._v("resize_image")]),t._v("，它将一个图片调整为给定的大小并保存。然后，定义了一个函数"),s("code",[t._v("batch_resize_images")]),t._v("，该函数遍历指定目录下的所有图片，并对每个.jpg或.png文件调用"),s("code",[t._v("resize_image")]),t._v("函数。你可以通过修改"),s("code",[t._v("image_dir")]),t._v("、"),s("code",[t._v("output_dir")]),t._v("和"),s("code",[t._v("size")]),t._v("变量来适应你的需求。")]),t._v(" "),s("h3",{attrs:{id:"python代码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python代码实现"}},[t._v("#")]),t._v(" python代码实现")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" PIL "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Image  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os  \n  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resize_image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input_image_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" output_image_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n    original_image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input_image_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" original_image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"The original image size is ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" wide x ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(' tall"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n  \n    resized_image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" original_image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resized_image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"The resized image size is ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" wide x ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(' tall"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    resized_image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    resized_image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output_image_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("batch_resize_images")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image_dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" output_dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exists"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output_dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n        os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("makedirs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output_dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" foldername"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" subfolders"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filenames "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("walk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image_dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" filename "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" filenames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endswith"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("endswith"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加其他图片格式支持，如.jpeg, .bmp等  ")]),t._v("\n                input_path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foldername"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n                output_path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output_dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n                resize_image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" output_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n  \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用示例：将指定目录下的所有图片大小修改为宽600，高400  ")]),t._v("\nimage_dir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/your/images"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改为你的图片目录路径  ")]),t._v("\noutput_dir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/your/output"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改为你的输出目录路径  ")]),t._v("\nsize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改为你想要的大小，如(800, 600)，注意这是按照原图比例进行缩放的  ")]),t._v("\nbatch_resize_images"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image_dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" output_dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);