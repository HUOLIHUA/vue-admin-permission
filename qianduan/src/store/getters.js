
const getters = {
  token: state => state.user.token,
  role: state => state.user.role,
  addRouters: state => state.permission.addRouters,
  routers: state => state.permission.routers
}

export default getters