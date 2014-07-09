var Router = require('./router')
var view = require('./view')
var $ = require('jquery')


var apiClient = require('./api-client')

$(document).ready(function () {

  view.initialize({rootElement:'#outer'})
  var router = new Router()

    router.on('route', function (routeName, params) {
      // assume first route parameter is the homeId
      var homeId = params ? params[0] : null
      console.log('r', routeName, arguments)

      view.show(routeName, homeId)
    })

  var ac = new apiClient()
  var x = ac.getHome('1')

  router.history.start()
})