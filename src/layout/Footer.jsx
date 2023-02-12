function Footer() {
    return <footer className="page-footer #7c4dff deep-purple accent-2">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="#!">Rights</a>
      </div>
    </div>
  </footer>
}

export {Footer}