export default function Navigation (props) {
  let active = props.config.active || true
  let toggleActive = props.toggle

  let btn = (
    <a className="btn-sm bg-success" href="#" tabindex="-1" onClick={ toggleActive }>Enable</a>
  )

  if (active) {
    btn = (
      <a className="btn-sm bg-warning" href="#" tabindex="-1" onClick={ toggleActive }>Disable</a>
    )
  }

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          YogurtMaster 6000
        </a>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
          <li className="nav-item">
            { btn }
          </li>
        </ul>
      </div>
    </nav>
  )
}
