import request from '@/utils/request'

export function fetchTreeList(userId) {
    return request({
      url: '/menu/treeList',
      method: 'get',
      data: {
          userId: userId
      }
    })
  }
  