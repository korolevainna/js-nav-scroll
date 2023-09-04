class Nav {
    static #HOME_PAGE = 'https://google.com'
  
    // метод для кнопки назад
    static #back = () => {
      return history.back()
    }
  
    static #forward = () => {
      return history.forward()
    }
  
    static #reload = () => {
      return location.reload()
    }
  
    static #changePage = (href) => {
      return location.assign(href)
    }
  
    static #go = () => {
      try {
        const url = new URL(window.input.value)
        this.#changePage(url.href)
      } catch (e) {
        alert('Введіть коректну URL адресу')
        console.log(e)
      }
    }
  
    // метод для кнопки додому
    static #home = () => {
      return this.#changePage(this.#HOME_PAGE)
    }
  
    // метод запуску всьго коду
    static init = () => {
      window.back.onclick = this.#back
      window.forward.onclick = this.#forward
      window.reload.onclick = this.#reload
      window.home.onclick = this.#home
      window.go.onclick = this.#go
  
      window.input.value = location.href
    }
  }
  
  Nav.init()
