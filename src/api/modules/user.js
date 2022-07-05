import request from '../request'

const getCode = () => {
  return request({
    url: 'https://www.markerhub.com/vueadmin-java/captcha',
    method: 'GET'
  })
}

export default { getCode }
