(window, document, undefined) => {
  let modalClass = '.sm-modal',
    options = {
      element: null
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

  let sm = (element = nul) => {

    options.element = element;

    showModal()
  }

  sm.close = () => {

    return removeModal()

  }

  window.sm = sm
}(window, document)