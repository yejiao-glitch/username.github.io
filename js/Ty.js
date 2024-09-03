(() => {
  function Ty() {}
  Ty.prototype.get = (dom, isAll = false) => {
    if (isAll) {
      return document.querySelectorAll(dom);
    } else {
      return document.querySelector(dom);
    }
  };

  Ty.prototype.ErgNode = (nodes, callback) => {
    const allNode = document.querySelectorAll(nodes);
    for (let index = 0; index < allNode.length; index++) {
      callback(allNode[index], index);
    }
  };

  Ty.prototype.$Tab = (options) => {
    const { tabs, active, box } = options;
    const tab = tabs.split(".")[1];
    const boxs = $.get(box, true);
    let pre = null,
      pre_box = null;

    $.ErgNode(tabs, (item, index) => {
      if (index == 0) {
        pre = item;
        pre_box = boxs[index];
        item.className = `${tab} ${active}`;
        boxs[index].style.display = "block";
      }
      item.onclick = function () {
        pre.className = tab;
        pre_box.style.display = "none";
        this.className = `${tab}  ${active}`;
        boxs[index].style.display = "block";
        pre = this;
        pre_box = boxs[index];
      };
    });
  };

  Ty.prototype.$Ren = (options) => {
    const { fat, data, call } = options;
    let temp = "";
    const fat_1 = $.get(fat);

    data.forEach((item) => {
      temp += call(item);
    });

    fat_1.innerHTML = temp;
  };



  window.$ = new Ty();
})();
