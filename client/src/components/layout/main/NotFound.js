import React from 'react'

const NotFound = () =>

  <div class="page-wrap d-flex flex-row align-items-center min-vh-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 text-center justify-content-center">
          <span class="display-1 d-block mb-5"><img className="img-fluid w-50 h-50 m-auto" src="/images/undraw_page_not_found.svg" alt="404" /></span>
          <div class="lead fw-bolder">Page not found</div>
          <div class="mb-4 lead">We are sorry but the page you are looking for does not exist.</div>
          <a href="/" class="btn btn-link">Go back to home page.</a>
        </div>
      </div>
    </div>
  </div>

export default NotFound