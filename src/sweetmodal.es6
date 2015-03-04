// SweetModal
// 2015 (c) - Kchan Zen 
// github.com/kchanzen/sweetmodal

(window, document, undefined) => {
  let modalClass = '.sm-modal',
    options = {
      element: null,
      allowOutsideClick: null,
      from: null
    }

  let getModal = () => {

    let $modal = document.querySelector('.sm-modal')

    if (!$modal) {
      initModal()
      $modal = getModal()
    }

    return $modal
  }

  let initModal = () => {

    let smWrap = document.createElement('div'),
      smHTML = `<div class="sm-wrapper"><div class="sm-modal"></div></div>`

    smWrap.innerHTML = smHTML

    while (smWrap.firstChild) {
      document.body.appendChild(smWrap.firstChild)
    }

  }

  let showModal = () => {

    let $modal = getModal(),
    $smWrap = document.querySelector('.sm-wrapper')
    $modal.classList.add('sm-modal-' + options.from)
    $modal.innerHTML = document.querySelector(options.element).innerHTML

    setTimeout(() => {
      $smWrap.classList.add('sm-wrapper-true')
      $modal.classList.add('sm-modal-center')
    }, 200)

  }

  let removeModal = () => {

    let $smWrap = document.querySelector('.sm-wrapper'),
      $modal = getModal()

    $modal.classList.remove('sm-modal-center')
    $smWrap.classList.add('sm-wrapper-false')
    setTimeout(() => {
      $smWrap.parentNode.removeChild($smWrap)
    }, 200)

  }

  document.onclick = (e) => {

    let target = e.target,
      isModal = target.classList.contains('sm-wrapper')

    if (isModal && options.allowOutsideClick) {
      sm.close()
    }

  }

  let sm = (element = null, allowOutsideClick = false, from = 'top') => {

    options.element = element
    options.allowOutsideClick = allowOutsideClick
    options.from = from

    showModal()

  }

  sm.close = () => {

    if (!document.querySelector('.sm-modal')) {
      return false
    }

    return removeModal()

  }

  sm.top = (element = null, allowOutsideClick = false) => {

    return sm(element, allowOutsideClick, 'top')

  }

  sm.bottom = (element = null, allowOutsideClick = false) => {

    return sm(element, allowOutsideClick, 'bottom')

  }

  window.sm = sm
}(window, document)