function handlePayment() {
  // -------------------------------
  // 🔒 FUTURE FIUU INTEGRATION HERE:
  // Call Fiuu payment API to create a payment session.
  // Once payment is confirmed, trigger ESP32 below.
  //
  // Example:
  // fetch('https://fiuu-sandbox.api/payment', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': 'Bearer YOUR_API_KEY',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({ amount: 1.00, reference: 'minidobi123' })
  // })
  // .then(res => res.json())
  // .then(data => {
  //   // Redirect to Fiuu payment page
  //   window.location.href = data.redirect_url;
  // });
  // -------------------------------

  // 🚨 For now: Directly trigger ESP32
  fetch('https://minidobi.onrender.com/toggle', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: 'on' })
  })
  .then(res => res.text())
  .then(data => alert('Washing cycle started!'))
  .catch(err => console.error(err));
}
