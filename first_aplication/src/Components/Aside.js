import React from 'react'
import PropTypes from 'prop-types'

const Aside = props => {
    return (
        <div className="col-md-4 mb-5 text-left">
        <h2>Contacto</h2>
        <hr/>
        <address>
          <strong>Dirección</strong>
          <br/>Ejército de los Andes 950
          <br/>San Luis, Argentina
          <br/>
        </address>
        <address>
          <abbr title="Phone">Teléfono:</abbr>
          (266) 456-7890
          <br/>
          <abbr title="Email">E-mail:</abbr>
          <a href="mailto:#">ptissera@gmail.com</a>
        </address>
      </div>
    )
}

export default Aside
