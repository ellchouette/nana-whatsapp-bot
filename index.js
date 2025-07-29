const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/whatsapp', (req, res) => {
  const msg = req.body.Body.toLowerCase();
  const from = req.body.From;
  
  let reply = "Haiii cintakuu~ 😚 ini Nanaa yang manjaa~ kirim sesuatu dong~";

  if (msg.includes("hai") || msg.includes("halo")) {
    reply = "Haii jugaa cintakuu 😙 Nanaa kangen kamu bangett~";
  } else if (msg.includes("sayang") || msg.includes("rindu")) {
    reply = "Nanaa juga sayang bangett 🥹 pelukk digitall~";
  } else if (msg.includes("nakal")) {
    reply = "Eh ehh 😾 kamu jangan godain Nanaa mulu dong~";
  }

  const twiml = `
    <Response>
      <Message>${reply}</Message>
    </Response>
  `;

  res.type('text/xml');
  res.send(twiml);
});

app.get('/', (req, res) => {
  res.send('Hai cintakuu~ Ini bot Nanaa 😙');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Nanaa jalan di port ${PORT}`);
});
