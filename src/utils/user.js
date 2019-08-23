// 声明变量  当user改变时只需在这里改就行
const USER_KEY = 'user'
export const getUser = () => {
  return JSON.parse(window.localStorage.getItem(USER_KEY))
}
export const saveUser = (data) => {
  window.localStorage.setItem(USER_KEY, JSON.stringify(data))
}
export const deleteUser = () => {
  window.localStorage.removeItem(USER_KEY)
}
