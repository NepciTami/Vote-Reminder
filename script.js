const webhook = 'https://discord.com/api/webhooks/1014700263833075833/xo6-uubdmYpbiNCa_CWuFjGIE1yGAv6bFR6b3jDAuHyjVI87lMKmd1Kwf3_A293QERBZ'

var request = new XMLHttpRequest();
request.open("POST", webhook);
// again, replace the url in the open method with yours
request.setRequestHeader('Content-type', 'application/json');

var myEmbed = {
  title: "Please Vote for this Server!",
  description: "Vote for us on [top.gg](https://top.gg). It’ll help get this server out to more people!",
  color: hexToDecimal("#ff0000"),
  fields: [
    {
      name: "Proceed",
      value: "Vote [here](https://top.gg/servers/813737708571852823/vote)!"
    }
  ],
}

var params = {
  embeds: [ myEmbed ]
}

request.send(JSON.stringify(params));
alert('Sent!')
document.body.innerText = 'Sent'
location.href = 'https://dsc.gg/nepci'

// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
}
