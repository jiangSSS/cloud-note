import axios from 'axios'

const env = process.env.NODE_ENV  //生产环境下  被设置为production
                                  //开发环境下  被设置为development
let baseURL = env == "development" ? "/api" :"/"
const instance = axios.create({
  baseURL,
  timeout:15000
})
const xhr = {
  get(url, data, config) {
    return new Promise((resolve, reject) => {
        instance.get(url, { params: data }, config).then(res => {
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })

},
fetch(url, data, config, methods) {
    return new Promise((resolve, reject) => {
        instance[methods](url, data, config).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
},
post(url,data,config){
    return this.fetch(url,data,config,"post")
},
put(url,data,config){
    return this.fetch(url,data,config,"put")
}
}
export const $axios = xhr