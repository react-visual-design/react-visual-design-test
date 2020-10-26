import request from '@/util/request'

const { get } = request

const gePageById = id => get(`/api/page/${id}`)

export { gePageById }
