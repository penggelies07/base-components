# Popover

## Desc
气泡

1.（组件内部生成target）
2.（组件外部生成target）

通过点击或覆盖目标元素进而改变显现元素visible，根据目标元素位置计算出显现元素位置

当组件渲染完成后，给目标元素添加点击触发事件

当组件更新完成后，根据props的visible来决定当前的popover是否显示，是执行onOpen()，不是执行onClose()；

当组件销毁完成之前，删除document对象的onClick事件，同时销毁poper对象；

onOpen执行时，判定是否设置disable，同时给popover背后的document对象设置onClick监听事件，当点击到document时，执行onClose()。随后执行createPopper()；

onClose执行时，判定是否设置disable，同时给popover背后的document对象撤销onClick监听事件，随后执行destroyPopper()；

createPopper执行时，在document对象上创建span用于放置popover，执行renderPopper()；

renderPopper执行时，根据创建好的container对象，将poper对象放入；

destoryPopper执行时，销毁popper对象，销毁container对象，删除document上的span。

## Props

- className
- style
- children

- anchor
- disable
- narrow
- trigger
- visible
- width

- onOpen
- onClose
- onMouseEnter
- onMouseLeave
- onRequestChange

## Process

## Bugs