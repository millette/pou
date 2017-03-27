/* global $ */

'use strict'

$(document).foundation()

$('.column.medium-4').each(function () {
  var $a = $('a', this)
  var a = $a[0]
  var hash = a && a.hash && a.hash.slice(1)
  if (!hash) { return }
  var $par = $(this)
  $par.data('what', hash)
  $a.click(function (ev) {
    $par.toggleClass('full')
    $('[data-toggler=".hide"]').each(function () {
      var $this = $(this)
      if (hash !== $this.data('what')) { $this.foundation('toggle') }
    })
  })
})
