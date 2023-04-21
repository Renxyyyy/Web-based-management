import React from 'react';
import { Accordion, Container, Row } from 'react-bootstrap';
import './Abouttop.css'
 
  function Content() {
    return (
       <div>

        <section className="background1">
        <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h2 class="header">Know about Rizal Village</h2>
               </div>
              </div>
          <Container>
            <Row lg={2} xl={2} md={1} sm={1} style={{paddingTop:"3.7rem", paddingBottom:"4rem"}}>
            <div className='Box'>
                <h3 className="about_text1">Rizal Village is a Subdivision in Muntinlupa, one of the top cities in Metro Manila. Rizal Village provides its 
                     residents with a lifestyle of privilege that many people can only dream of. Rizal Village is yet again breaking the boundaries of residential living
                     by bringing comfort and affordability, ensuring residents live the life they deserve as they create more amazing memories with their families.
                     </h3>
             </div>  
             <div>
             <img src="images/imageEntrance.jpg" style={{height:"20rem", width:"auto", display:"flex", justifySelf:"flex-end", border:'3px solid black', borderRadius:'10px'}} alt='image0'/>
             </div>
            </Row>
           
              
             {/* <div className="row">
              <h3 className="roadinfo"> The Road signs of the Rizal village are from the famous novels of Jose Rizal.</h3>
             </div> */}
          </Container>   
        </section>
 
       <section>
        <Container style={{marginTop:"4rem", marginBottom:"4rem"}}>
          <h1 className="my-5">INSIDE THE RIZAL VILLAGE</h1>
       <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0"> 
        <Accordion.Header>Road Signs</Accordion.Header>
        <Accordion.Body>
          <Row style={{marginLeft: '20px',}}>
        The Road Signs inside the Rizal Village are based on the popular novel of Jose Rizal.
        <img src='images/imageSigns.jpg' alt='sign' style={{heigt: '100vh', width: '30rem'}}></img>
        </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Covered Court</Accordion.Header>
        <Accordion.Body>
          <Row style={{marginLeft: '20px',}}>
          Covered Court
        <img src='images/imageCourt.jpg' alt='sign' style={{heigt: '100vh', width: '30rem'}}></img>
        </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Contact Us</Accordion.Header>
        <Accordion.Body>
        <p>Covered Court Contact: 029019210</p>
        <p>Home Owners Association: 092011801</p>
        <p>Email: rizalhome@gmail.com</p> 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
      
    </section>
 
     
    <section class="background1">    
     <div class="container">
      <div class="row text-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="header">Home Owners Association</h3>
         </div>
        <div class="col-md-4">
          <div class="testimonial mb-5" style={{border:'3px solid black', borderRadius:'10px'}}>
           <div class="avatar mx-auto">
            <img src="images/samplepic.png" style={{height: '10rem'}} class="rounded-circle z-depth-1 img-fluid" alt='image1'/>
          </div>
          <h4 class="Name">Anna Deynah</h4>
          <h6 class="Position">President</h6>
          <p class="Description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
        </div>
      </div>
 
      <div class="col-md-4">
        <div class="testimonial mb-5" style={{border:'3px solid black', borderRadius:'10px'}}>
          <div class="avatar mx-auto">
            <img src="images/samplepic.png" style={{height: '10rem'}} class="rounded-circle z-depth-1 img-fluid" alt='image2'/>
          </div>
          <h4 class="Name">John Doe</h4>
          <h6 class="Position">Vice President</h6>
          <p class="Description">Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
        </div>
 
      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5" style={{border:'3px solid black', borderRadius:'10px'}}>
          <div class="avatar mx-auto">
            <img src="images/samplepic.png" style={{height: '10rem'}} class="rounded-circle z-depth-1 img-fluid" alt='image3'/>
          </div>
          <h4 class="Name">Maria Kate</h4>
          <h6 class="Position">Treasurer</h6>
          <p class="Description">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.</p>
        </div>
        </div>

        <div class="col-md-4">
        <div class="testimonial mb-5" style={{border:'3px solid black', borderRadius:'10px'}}>
          <div class="avatar mx-auto">
            <img src="images/samplepic.png" style={{height: '10rem'}} class="rounded-circle z-depth-1 img-fluid" alt='image4'/>
          </div>
          <h4 class="Name">Maria Kate</h4>
          <h6 class="Position">Seargent of arms</h6>
          <p class="Description">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.</p>
        </div>
        </div>

        <div class="col-md-4">
        <div class="testimonial mb-5" style={{border:'3px solid black', borderRadius:'10px'}}>
          <div class="avatar mx-auto">
            <img src="images/samplepic.png" style={{height: '10rem'}} class="rounded-circle z-depth-1 img-fluid" alt='image5'/>
          </div>
          <h4 class="Name">Maria Kate</h4>
          <h6 class="Position">Treasurer</h6>
          <p class="Description">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.</p>
        </div>
        </div>

        <div class="col-md-4">
        <div class="testimonial mb-5" style={{border:'3px solid black', borderRadius:'10px'}}>
          <div class="avatar mx-auto">
            <img src="images/samplepic.png" style={{height: '10rem'}} class="rounded-circle z-depth-1 img-fluid" alt='image6'/>
          </div>
          <h4 class="Name">Maria Kate</h4>
          <h6 class="Position">Treasurer</h6>
          <p class="Description">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.</p>
        </div>
        </div>
      </div>
    </div> 
   </section> 
   </div>
    );
  }
   
  export default Content;