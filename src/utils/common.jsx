// 获取菜品数量 通过传入的信息来统计当前有多少个菜品
import Taro from "@tarojs/taro";
const foodkey = 'taro_meituan'
export function getFoodCount (food) {
    let store = Taro.getStorageInfoSync(foodkey)
    if (store) {
        if (store[food.id]) {
            return store[food.id].Num
        }
        else {
            return 0
        }
    } else {
        return 0
    }
}

// 设置菜品数量 当加菜或减菜触发 Num 是由加减菜组件自身的state 存储的 加减
// 当减的数量等于0时 要删除菜品的数据结构
// 当加菜时 发现数据结构中没有该菜品 新增菜品数据结构

export function setFoodCount (food, Num, type, callback) { }