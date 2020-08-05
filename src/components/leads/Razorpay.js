
const razorpay = {  
    "id": "pay_29QQoUBi66xm2f",
    "entity": "payment",
    "amount": 5000,
    "currency": "INR",
    "status": "captured",
    "method": "card",
    "order_id": "order_CjCr5oKh4AVC51",
    "description": "Payment for Adidas shoes",
    "amount_refunded": 0,
    "refund_status": null,
    "email": "test@razorpay.com",
    "contact": "9364591752",
    "notes": {},
    "fee": 1145,
    "tax": 145,
    "error_code": null,
    "error_description": null,
    "created_at": 1400826750
}

const mykeyid = "rzp_test_egWWu3rbMpGA8Z";
const myKeySecret = "H0SV22ONrpy2jWrjU7GXbMRi";


function makePayment(){
    curl -u mykeyid:myKeySecret \
    -X POST \
    --data "amount=5000" \
    https://api.razorpay.com/v1/payments/pay_29QQoUBi66xm2f/capture
    Copyvar request = require('request');

    request({
    method: 'POST',
    url: 'https://<YOUR_KEY_ID>:<YOUR_KEY_SECRET>@api.razorpay.com/v1/payments/pay_29QQoUBi66xm2f/capture',
    form: {
        amount: 5000
    }
    }, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
    });
}