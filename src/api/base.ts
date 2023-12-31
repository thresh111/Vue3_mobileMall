// 导出所有接口
const base = {
  host: 'http://121.89.205.189:3000/api', // 域名
  banner: '/banner/list', // 轮播图
  proList: '/pro/list', // 商品列表
  proDetail: '/pro/detail', // 商品详情
  login: '/user/login', //登录
  userinfo: '/user/info', // 获取用户信息
  register: '/user/dofinishregister', // 注册
  cartList: '/cart/list', //获取购物车列表
  addCart: '/cart/add', //添加到购物车
  updaetCartNum: '/cart/updatenum', //更新购物车商品数量
  removeCartItem: '/cart/remove', //删除购物车单条数据
  updateSelectCartItem: '/cart/selectone', // 更新商品选中状态
  selectCartAll: '/cart/selectall' //全选或全不选
}

export default base
