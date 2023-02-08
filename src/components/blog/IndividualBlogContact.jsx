import React from 'react'

const IndividualBlogContact = (props) => {
  return (
    <>
              <div className="individualBlogLeft my-4">
            <div className="row">
              <div className="col-6 individualH4P1">
                <h4 className="mb-3">PREV</h4>
                <p>{props.textLeft}</p>
              </div>
              <div className="col-6 individualH4P2">
              <h4 className="mb-3">NEXT</h4>
              <p>{props.textRight}</p>
              </div>
            </div>
          </div>
          <div className="individualBlogLeft mb-5">
            <div className="individualBlogContactH1">Leave a Reply</div>
            <div className="individualBlogContactP my-3">Your email address will not be published. Required fields are marked *</div>
            <div class="form-group">
    <label for="message" className='contactCommon'>Comment *</label>
    <textarea type="text" rows="10" cols="40" aria-invalid="false" class="form-control contactTextarea" id="message" />
  </div>  
  <div class="form-group">
    <label for="name" className='contactCommon'>Name *</label>
    <input type="text" class="form-control contactInp" id="name" /> 
  </div>
  <div class="form-group">
    <label for="email" className='contactCommon'>Email *</label>
    <input type="email" class="form-control contactInp" id="email" aria-describedby="emailHelp" /> 
  </div>
  <div class="form-group">
    <label for="subject" className='contactCommon'>Website</label>
    <input type="text" class="form-control contactInp" id="subject" />
  </div>
  <div class="form-check mb-3">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label ms-2" for="flexCheckDefault"> <b>
  Save my name, email, and website in this browser for the next time I comment.</b>
  </label>
</div>
<button type="submit" class="individualContactButton">Post Comment</button>
          </div>
    </>
  )
}

export default IndividualBlogContact