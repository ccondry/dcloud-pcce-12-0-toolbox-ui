import * as types from '../mutation-types'
import {ToastProgrammatic as Toast} from 'buefy'

const state = {
  device: {
    isMobile: false,
    isTablet: false
  },
  sidebar: {
    opened: false,
    hidden: false
  },
  effect: {
    translate3d: true
  },
  sessionId: '',
  datacenter: ''
}

const mutations = {
  [types.TOGGLE_DEVICE] (state, device) {
    state.device.isMobile = device === 'mobile'
    state.device.isTablet = device === 'tablet'
  },

  [types.TOGGLE_SIDEBAR] (state, config) {
    if (state.device.isMobile && config.hasOwnProperty('opened')) {
      state.sidebar.opened = config.opened
    } else {
      state.sidebar.opened = true
    }

    if (config.hasOwnProperty('hidden')) {
      state.sidebar.hidden = config.hidden
    }
  },

  [types.SWITCH_EFFECT] (state, effectItem) {
    for (let name in effectItem) {
      state.effect[name] = effectItem[name]
    }
  }
}

const actions = {
  copyToClipboard (options, {string, type = 'Text'}) {
    console.log('copyToClipboard', type, string)
    // copy text to clipboard
    const input = document.createElement('input')
    document.body.appendChild(input)
    input.value = string
    // input.focus()
    input.select()
    // console.log('input field', input)
    // const range = document.createRange()
    // range.selectNode(input)
    // window.getSelection().addRange(range)
    // console.log('range', range)
    const result = document.execCommand('copy')
    if (result === 'unsuccessful') {
      // failed
      console.error('Failed to copy text.')
    } else {
      // success
      // this.$snackbar.open({
      //   message: 'Text Copied',
      //   type: 'is-success',
      //   position: 'is-top'
      // })
      Toast.open({
        // duration: 5000,
        // message: `load brands failed`,
        // position: 'is-bottom',
        // type: 'is-danger'
        message: type + ' Copied to Your Clipboard',
        queue: false
      })
    }

    // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported
    window.getSelection().removeAllRanges()
    // remove the input field
    input.remove()
  }
}

export default {
  state,
  actions,
  // getters,
  mutations
}
