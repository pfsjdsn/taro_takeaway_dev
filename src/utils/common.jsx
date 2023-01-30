// 获取菜品数量 通过传入的信息来统计当前有多少个菜品
import Taro from "@tarojs/taro";
import Event from './events';
const foodkey = 'taro_meituan'
// 实例化一个事件管理器

const myEvent = new Event();
export function getFoodCount (food) {
    let store = Taro.getStorageSync(foodkey)
    if (store && store[food.id]) {
        return store[food.id].Num
    } else {
        return 0
    }
}


// 设置菜品数量 当加菜或减菜触发 Num 是由加减菜组件自身的state 存储的 加减
// 当减的数量等于0时 要删除菜品的数据结构
// 当加菜时 发现数据结构中没有该菜品 新增菜品数据结构

export function setFoodCount (food, Num, type, callback) {
    if (food) {
        let store = Taro.getStorageSync(foodkey)
        if (!store) store = {}
        if (type == 'cut') {
            // 减菜
            if (Num == 1) {
                // 菜品数据被删除
                if (store[food.id]) {
                    // 删除菜品数据结构
                    delete store[food.id]
                }
            }
            else {
                if (store[food.id]) {
                    // 数据减1，结构不变
                    store[food.id].Num = Num - 1
                }
            }
            // 进行缓存数据更新
            Taro.setStorageSync(foodkey, store)
            callback && callback()

        }
        if (type == 'add') {
            // 加菜
            if (store[food.id]) {
                // 已加过
                store[food.id].Num = Num + 1
            }
            else {
                // 未加过
                store[food.id] = { Num: 1, ...food }
            }
            // 进行缓存数据更新
            Taro.setStorageSync(foodkey, store)
            callback && callback()
        }
    }
}

export function getEvent () {
    return myEvent
}

// 获取所有菜品数量 及价格
export function getAllFoodInfo () {
    // 总价格
    let allPrice = 0
    // 总数量 
    let allNum = 0
    // 取菜品信息
    let store = Taro.getStorageSync(foodkey)
    if (store) {
        // 对store 进行遍历
        Object.keys(store).map((key) => {
            if (store[key]) {
                allPrice += store[key].price * store[key].Num
                allNum += store[key].Num
            }
        })
    }
    return { allPrice, allNum }

}
