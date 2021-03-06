import React from 'react'

function Testimonial() {
    return (
        <div class="testimonials-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-heading">
                <span>Testimonials</span>
                <h2>What they say about us</h2>
              </div>
            </div>
            <div class="col-md-10 offset-md-1">
              <div class="owl-testimonials ">
                <div class="testimonial-item">
                  <div class="icon">
                    <i class="fa fa-quote-right"></i>
                  </div>
                  <p>"Ut elementum a elit sed tristique. Pellentesque sed semper erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean quam erat, rutrum ut malesuada."</p>
                  <h4>William Smith</h4>
                  <span>New Co-Founder</span>
                </div>
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Testimonial
