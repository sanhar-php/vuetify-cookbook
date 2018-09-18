const debug = require("debug")("unit:vuex")
debug.enabled = true

import store from '@/store'

// debug('actions = %O', store['_actions'])

// debug('store.getters = %O', store.getters)

describe('test vuex', ()=> {
  beforeAll(() =>{
    let array = []
    array.push({a:1})
    debug('array = ', array)
  })
  describe('mutations', () => {
    test('list mutations', () => {
      const mutations = store['_mutations']
      debug('mutations = %O', mutations)
      // 断言结果
      expect(Object.keys(mutations).length).toBeGreaterThan(5)
    })
  })
})