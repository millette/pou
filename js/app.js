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
    $(this).blur()
    $par.toggleClass('full')
    $('[data-toggler=".hide"]').each(function () {
      var $this = $(this)
      if (hash !== $this.data('what')) { $this.foundation('toggle') }
    })
  })
})

$('button.close-button').click(function (ev) {
  var $p = $(this).parents('.callout')
  var $p2
  if (!$p.length) { return }
  $p2 = $p.prev('a')
  if (!$p2.length) { return }
  ev.preventDefault()
  $p2.click()
})

// everything is shown if js is disabled
$('.hidden').addClass('hidden2')
