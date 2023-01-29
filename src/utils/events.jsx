class Event {
    constructor() {
        this.events = {}

    }
    // 监听
    on (eventName, callback) {
        if (this.events[eventName]) {
            // 存在事件
            this.events[eventName].push(callback)
        } else {
            // 不存在事件
            this.events[eventName] = [callback]
        }
    }
    // 触发
    emit (eventName, params) {
        if (this.events[eventName]) {
            this.events[eventName].map((callback) => {
                callback(params)
            })
        }
    }

}
export default Event    