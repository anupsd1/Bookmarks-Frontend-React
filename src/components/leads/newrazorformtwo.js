import React from 'react'

export class Newrazorformtwo extends React.Component {
    state = {
        name: "gaurav",
        email: "email",

    }

    render(){
        return(
            <div className="Razorpay">
                <form action="https://www.example.com/payment/success/" method="POST">
                    <script
                    src="https://checkout.razorpay.com/v1/checkout.js"
                    data-key="rzp_test_egWWu3rbMpGA8Z" 
                    data-amount="29935" 
                    data-currency="INR"
                    data-order_id="order_CgmcjRh9ti2lP7"
                    data-buttontext="Pay with Razorpay"
                    data-name="Acme Corp"
                    data-description="A Wild Sheep Chase is the third novel by Japanese author Haruki Murakami"
                    data-image="https://example.com/your_logo.jpg">

                    </script>
                <input name="name" value={this.state.name} />
                <input name="email" value={this.state.email} />

                <input type="hidden" custom="Hidden Element" name="hidden" />
                </form>
            </div>
        )}
}


export default Newrazorformtwo;