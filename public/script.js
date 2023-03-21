const loadingOverlay = document.querySelector('.loading-overlay')
const percentage = {
  value: 0
}

if (loadingOverlay) {
  const tl = gsap.timeline()
  .to(percentage, {
      value: 100,
      roundProps: 'value',
      duration: 2,
      onUpdate: () => {
        gsap.set(loadingOverlay, {
          '--percentage': `'${percentage.value}%'`,
        })
      },
      ease: 'power1.Out'
    })
  .to(loadingOverlay, {
    clipPath: 'inset(0 0 100% 0)',
    pointerEvents: 'none',
    duration: 0.4,
    onComplete: () => {
      document.querySelector('body').classList.remove('overflow-hidden')
    }
  })
  .from('.page-header .large-heading', {
    opacity: 0,
    y: 100
  })
  .from('.header', {
    y: 100
  })
}

const filledInputs = {
  name: 'Jouw naam',
  prefix: '',
  surname: '',
  gitHubHandle: 'JouwHandle',
  avatar: '../placeholder.jpg'
}

const previewCardName = document.querySelector('.preview-card .member-card__name')
const previewCardGithubHandle = document.querySelector('.preview-card .member-card__github-link')
const previewCardAvatar = document.querySelector('.preview-card .member-card__image img')
const updateCard = () => {
  previewCardName.innerText = `${filledInputs.name} ${filledInputs.prefix} ${filledInputs.surname}`
  previewCardGithubHandle.innerText = '@' +filledInputs.gitHubHandle
  previewCardAvatar.src = filledInputs.avatar
}

const formInputs = document.querySelectorAll('.js-listen')
if (formInputs) {
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.name == 'name') {
        filledInputs.name = input.value
      }
      if (input.name == 'prefix') {
        filledInputs.prefix = input.value
      }
      if (input.name == 'surname') {
        filledInputs.surname = input.value
      }
      if (input.name == 'gitHubHandle') {
        filledInputs.gitHubHandle = input.value
      }
      if (input.name == 'avatar') {
        filledInputs.avatar = input.value
      }
      updateCard()
    })
  })
}