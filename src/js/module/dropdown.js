export default class Dropdown {
   constructor ({selector, open, close, data}) {
      this.$selector = document.querySelector(selector)
      this.$open = document.querySelector(open)
      this.$close = close
      this.data = data

      this.#setup()
   }

   #setup = () => {
      
      const options = this.$selector.querySelector('.ui-dropdown .options')
      options.insertAdjacentHTML('afterbegin', this.#render())

      this.$open?.addEventListener('click', this.onOpen)

      const closeItems = document.querySelectorAll(`.ui-dropdown ${this.$close}`)
      console.log(closeItems);
      closeItems.forEach(el => {
         el.addEventListener('click', this.onClose)
      })
   }

   #render = () => {
      const items = this.data.map(({ id, value }) => {
         return `<li data-id="${id}" class="option">${value}</li>`
      })
      return `
         ${items.join('')}
      `
   }

   onOpen = () => {
      this.$selector.classList.toggle('active')
   }

   onClose = () => {
      console.log(this.$close);
      this.$selector.classList.remove('active')
   }
}