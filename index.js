var es = require('event-stream')
  , Phantom = require('phantom')
  , fs = require('fs')
  , gulp = require('gulp')

module.exports = function (options) {
  var server = options.server
    , tests = gulp.src(options.tests)

  return es.map(function (file, callback) {
    Phantom.create(function (phantom) {
      phantom.createPage(function (page) {
        page.open('http://localhost:' + port, function (status) {
          page.evaluate(function () {
            var scripts = document.querySelectorAll('script')
              , last = scripts[scripts.length - 1]

            console.log(last)
          }, function (result) {

          })

          callback(null, file)
        })
      })
    })
  })
}
