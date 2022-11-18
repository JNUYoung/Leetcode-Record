// 判断是否为string或number类型
const isPrimitive = (x) => typeof x === 'string' || typeof x === 'number';

// 判断前后两个VNode是否发生变化
const sameVnode = (oldVnode, newVnode) => oldVnode.key === newVnode.key && oldVnode.tag === newVnode.tag;

// 对象形式的vnode的定义
function vnode(tag, props, children, text) {
    /**
     * tag: HTML元素名
     * props: HTML元素属性
     * children：子DOM节点
     * text：元素内的文本内容
     * 
     * 以对象字面量的形式返回一个虚拟节点的表示
     */
    return {
        tag,
        props,
        children,
        text
    }
}

// 生成vnode对象
function h(tag, props, children) {
    // 处理children中的元素的文本内容
    let text = null;
    if (isPrimitive(children)) {
        text = children;
        children = null;
    } else if (Array.isArray(children)) {
        children = children.map((child) => isPrimitive(child) ? vnode(null, null, null, child) : child);
    }
    return vnode(tag, props, children, text);
}

function createElementByVNode() {

}

function removeVNode() {

}

function addVNode() {
    
}

function updateProps() {

}

function updateChildren() {

}

function updateText() {

}

function patchVnode(oldVnode, newVnode) {

}

function patch(oldVnode, newVnode) {

}