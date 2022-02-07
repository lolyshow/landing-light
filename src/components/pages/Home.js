import React from 'react';
import Visa from "../images/visa-card.png";
import Paypal from "../images/paypal.png";
import Discover from "../images/discover.png";
import CardCard from "../images/card-card.png";
import Space from '../incs/Space';

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          cardNumber: '4324 5433 9382 1030',
          expDate:"03/24",
          securityCode:"420",
          postalCode:10119,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChangeExpDate = this.handleChangeExpDate(this);
        // this.handleChangePostalCode = this.handleChangePostalCode(this);
        // this.hanl
      }
    
      handleChange(event) {
        this.setState({cardNumber: event.target.value});
      }

      handleChangeExpDate(event) {
        this.setState({expDate: event.target.value});
      }

      handleChangePostalCode(event) {
        this.setState({postalCode: event.target.value});
      }

      handleChangeSecurityCode(event) {
        this.setState({securityCode: event.target.value});
      }
    
      handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }


    render(){
        return(
        <div>
            
            <section className = "section">
                <div className="container">
                    <div className = "row">
                        <div className = "col-md-12 text-center">
                            <h3 className = "main-heading"></h3>
                            <div className = "underline mx-auto"></div>
                        </div>

                        {/* left-side payment information start */}
                        <div className = "col-md-6">
                            <h5>Payment Information</h5>
                            <p style={{color:"#21252985", fontSize:12}}>choose your method of payment</p>

                            <div className = "main-card">
                                <div className = "card-body">
                                    <p>CARD NUMBER</p>
                                    <p>{this.state.cardNumber}</p>

                                    <img src ={CardCard} height="50" alt=""/>

                                    <p>EXPIRATION DATE</p>
                                    <p>{this.state.expDate}</p>
                                    <p>John Doe</p>
                                </div>
                            </div>
                        </div>
                        {/* left-side payment information ends */}

                        {/* right-side inserting card infor starts */}
                        <div className = "col-md-6">
                            <div className = "container">
                                <div className = "row">

                                    
                                    <div className = "col-md-6 offset-md-6 card-options" style = {{ marginBottom:10}}>
                                        <div className = "cardOption">
                                            <img src = {Visa} height = "20" alt = "visa"/>
                                        </div>

                                        <div className = "cardOption">
                                            <img src = {Discover} height = "20" alt = "discover"/>
                                        </div>

                                        <div className = "cardOption">
                                            <img src = {Paypal} height = "20" alt = "paypal"/>
                                            
                                        </div>

                                        <br/>
                                    </div>

                                    

                                    <Space />
                                    

                                    <div className = "col-md-12">
                                    
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                <label>Credit card number</label>
                                                <input type="text" className="form-control" value={this.state.cardNumber} style = {{backgroundColor:"#ebecee"}} onChange={this.handleChange} placeholder="Card No"/>
                                                </div>
                                                <div className="col-md-6">
                                                <label>Expiration date</label>
                                                <input type="text"  class="form-control" value={this.state.expDate} onChange={this.handleChangeExpDate} style = {{backgroundColor:"#ebecee"}} placeholder=""/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <br/><br/>

                                    <Space />

                                    <div className = "col-md-12 car-top-space">
                                    
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Security code</label>
                                                    <input type="text" value = {this.state.securityCode} onChange={this.handleChangeSecurityCode} className="form-control" style = {{backgroundColor:"#ebecee"}} placeholder="Security Code"/>
                                                </div>
                                                
                                            

                                                <div className="col-md-6">
                                                    <label>Postal Code</label>
                                                    <input type="text"value = {this.state.postalCode} onChange={this.handleChangePostalCode} className="form-control" style = {{backgroundColor:"#ebecee"}} placeholder="Code"/>
                                                </div>


                                                <Space/>

                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"/>
                                                    <label style = {{marginLeft:10}} class="custom-control-label" for="customRadioInline1"> Use this card for next time purchase</label>
                                                </div>

                                                <div className = "col-md-12">
                                                    <br/>
                                                    
                                                </div>
                                            
                                                <button type="button" style = {{width:500, marginLeft:10,backgroundColor:"#3f67e9"}} className="btn btn-primary btn-lg btn-block">Add Card</button>
                                            

                                                
                                            </div>
                                        </form>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        {/* right-side inserting card info ends */}



                        <div className = "col-md-12 text-center">
                            <h3 className = "main-heading"></h3>
                            <div className = "underline2"></div>
                        </div>

                        <div className = "container">

                            <div className = "row" >
                            
                                <Space />


                                <div className = "col-md-12">   
                                    <div className = "summary-Card">     
                                        <div className = "">
                                            <p>Subtotal</p>
                                        </div>
                                        
                                        <div className ="" style = {{float:'right'}}>
                                            <p><span>&#8358;</span>2,497.00</p>

                                        </div>
                                    </div>
                                </div>


                                <div className = "col-md-12">   
                                    <div className = "summary-Card">     
                                        <div className = "">
                                            <p>Estimated TAX</p>
                                        </div>
                                        
                                        <div className ="" style = {{float:'right'}}>
                                            <p><span>&#8358;</span>119.64</p>

                                        </div>
                                    </div>
                                </div>


                                <div className = "col-md-12">   
                                    <div className = "summary-Card">     
                                        <div className = "">
                                            <p>Promotional Code:<span class = "promoCode">Z4KXLM9A</span></p>
                                        </div>
                                        
                                        <div className ="" style = {{float:'right'}}>
                                            <p><span>&#8358;</span>-60.00</p>

                                        </div>
                                    </div>
                                </div>
                                    
                            </div>
                        </div>

                        <div className = "col-md-12 text-center">
                            <h3 className = "main-heading"></h3>
                            <div className = "underline"></div>
                        </div>

                        <div className = "col-md-12">   
                            <div className = "summary-Card">     
                                <div className = "">
                                <button type="button" style = {{ marginBottom:100,backgroundColor:'#3f67e9'}} className="btn btn-primary btn-md btn-block">Complete Payment</button>

                                </div>
                                
                                <div className ="" style = {{float:'right'}}>
                                    <b><p>TOTAL:<span>&#8358;</span>2556.64</p></b>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
        );
    }
}   

export default Home;