import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Gift.css";
// import "./ProductScreen.css";


class Buy extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Recipient_firstname: '',
            Recipient_lastname: '',
            Recipient_addressline1: '',
            Recipient_city: '',
            Recipient_addressline2: '',
            Recipient_mobile_no: '',
            Nearest_Delivery: '',
            Location_type: '',
            delivery_date: '',
            delivery_instructions: '',
            your_phone: '',
            your_email: '',
            district: [],
        }



    }

    componentDidMount() {
        axios.get(
            'https://locatesrilanka.herokuapp.com/districts')
            .then((response) => {
                if (response.data.message) {
                    alert(response.data.message)
                } else {
                    console.log(response.data);
                    this.setState({ district: response.data })

                }
            })
            .catch()        
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    onSubmit(e) {
        e.preventDefault();
        let order = {
            Recipient_firstname: this.state.Recipient_firstname,
            Recipient_lastname: this.state.Recipient_lastname,
            Recipient_addressline1: this.state.Recipient_addressline1,
            Recipient_city: this.state.Recipient_city,
            Recipient_addressline2: this.state.Recipient_addressline2,
            Recipient_mobile_no: this.state.Recipient_mobile_no,
            Nearest_Delivery: this.state.Nearest_Delivery,
            Location_type: this.state.Location_type,
            delivery_instructions: this.state.delivery_instructions,
            your_phone: this.state.your_phone,
            your_email: this.state.your_email


        }
        
        console.log('Data to send', order);
        axios.post('http://localhost:8089/order/saveorder', order)
            .then(response => {
                alert('order successfully placed');
            }).catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    }


    render() {
       
       const location = this.state.district.map((district) => (
            <option value={district.name_en}>
                {district.name_en}
            </option>
        ))

        console.log(location)
        return (
            <div>

                <div className="container">
                    <div class="col-md-6 offset-md-3">
                        <br />
                        <div class="card card-outline-secondary p-3 mb-2   text-black border-secondary mb-3" color="blue">
                            <div class="card-body">


                                <form onSubmit={this.onSubmit} class="row g-2 ">
                                    <h4><label>Receipients Information</label></h4>

                                    <div></div>
                                    <label>Contact Information</label>
                                    <div class="col-md-6 ">
                                        <label for="inputEmail4" class="form-label"></label>
                                        <input type="text" class="form-control" placeholder="Receipients first name" id="author" name="Recipient_firstname" value={this.state.Recipient_firstname} onChange={this.onChange} />
                                    </div>
                                    <div class="col-md-6 ">
                                        <label for="inputEmail4" class="form-label"></label>
                                        <input type="text" class="form-control" placeholder="Receipients Last name" id="author" name="Recipient_lastname" value={this.state.Recipient_lastname} onChange={this.onChange} />
                                    </div>
                                    <div class="col-6">
                                        <label for="inputAddress" class="form-label"></label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="Receipients address line 1" name="Recipient_addressline1" value={this.state.Recipient_addressline1} onChange={this.onChange} />
                                    </div>

                                    <div class="col-6">
                                        <label for="inputAddress" class="form-label"></label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="City" name="Recipient_city" value={this.state.Recipient_city} onChange={this.onChange} />
                                    </div>
                                    <div class="col-6">
                                        <label for="inputAddress" class="form-label"></label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="Receipients address line 2" value={this.state.Recipient_addressline2} name="Recipient_addressline2" onChange={this.onChange} />
                                    </div>

                                    <div class="col-6">
                                        <label for="inputAddress" class="form-label"></label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="Recipient_mobile_no" name="Recipient_mobile_no" value={this.state.Recipient_mobile_no} onChange={this.onChange} />
                                    </div><br /><br />


                                    <br /><br /><br /><br /><h4><label>Delivery Information</label></h4><br />
                                    <div class="col-md-6">
                                        <br /><select id="inputState" class="form-select" name="Nearest_Delivery" title="Nearest Delivery city" onChange={this.onChange}>
                                            <option disabled selected hidden>Nearest Delivery City</option>
                                            {location}

                                        </select>
                                    </div>


                                    <div class="col-md-6">
                                        <br /> <select id="inputState" class="form-select" name="Location_type" placeholder="Nearest Delivery city" onChange={this.onChange}>
                                            <option disabled selected hidden>location type</option>
                                            <option>House/Residence</option>
                                            <option>Office</option>
                                            <option>Apartment/flat</option>
                                            <option>Birthday party</option>
                                        </select>
                                    </div>

                                    <br /><br />
                                    <div class="col-6">
                                    </div>
                                    <div class="col-12">
                                        <br /> <label for="floatingTextarea" >Delivery Instructions (Optional) (Please do not use this section to request any preferred time for delivery other than the selected time slot)</label>
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="delivery_instructions" value={this.state.delivery_instructions} onChange={this.onChange}></textarea>
                                        </div>
                                    </div>



                                    <div></div>
                                    <br /><br /><h4><label>Your Information</label></h4>

                                    <div class="col-6">
                                        <label for="inputAddress" class="form-label"></label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="Your phone" name="your_phone" value={this.state.your_phone} onChange={this.onChange} />
                                    </div><br /><br />

                                    <div class="col-6">
                                        <label for="inputAddress" class="form-label"></label>
                                        <input type="email" class="form-control" id="inputAddress" placeholder="Your email" value={this.state.your_email} name="your_email" onChange={this.onChange} />
                                    </div><br /><br />

                                    <div class="col-6">
                                        <div class="d-flex justify-content-center ">
                                            <Link to={`/`}><button type="submit" className="btn btn-outline-primary" id="N-proceed">Back</button></Link>
                                        </div>
                                    </div>


                                    <br /><br /><div class="col-6">
                                        <div class="d-flex justify-content-center ">
                                            <button type="submit" className="btn btn-primary" id="N-proceed">Proceed</button>
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }



}

export default Buy;