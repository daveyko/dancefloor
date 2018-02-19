class ConfettiSpecs {
  constructor(el){
    this.el = el
    this.containerEl = null
    this.confettiInterval = function(){}
    this.confettiColors = ['#2F329F', '#2FF29F', '#FFFF0B', '#00FFFF']
    this.confettiAnimationSpeeds = ['slow', 'medium', 'fast']
  }

  setupElements(){
    const containerEl = document.createElement('div')
    containerEl.classList.add('confetti-container')
    containerEl.style.pointerEvents = 'none'
    this.el.appendChild(containerEl)
    this.containerEl = containerEl
  }

  renderConfetti(){
    console.log('renderConfetti!')
    this.confettiInterval = setInterval(() => {
      const confettiEl = document.createElement('div')
      const confettiSize = (Math.floor(Math.random() * 5) + 5) + 'px'
      const confettiColor = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)]
      const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px'
      const confettiAnimationSpeed = this.confettiAnimationSpeeds[Math.floor(Math.random() * this.confettiAnimationSpeeds.length)]
      confettiEl.classList.add('confetti-animation-' + confettiAnimationSpeed)
      confettiEl.style.left = confettiLeft
      confettiEl.style.backgroundColor = confettiColor
      confettiEl.style.width = confettiSize
      confettiEl.style.height = confettiSize
      confettiEl.removeTimeout = setTimeout(function(){
        confettiEl.parentNode.removeChild(confettiEl)
      }, 4000)
      this.containerEl.appendChild(confettiEl)
    }, 100)
  }
}

const confettiSetup = new ConfettiSpecs(document.querySelector('#app'))
confettiSetup.setupElements()
confettiSetup.renderConfetti()
