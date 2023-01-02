const webhook = atob('aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA1OTU5NzgxNDYyOTQxNjk4MC9MMzVLQl83OUJpd25MQUtBYV9FVFZiOUdDRmRyMDFlS1ZHdVZ0enp0NjZ2UlFMbm5sRk1kNzNVLTdZUkx3dWpnNXEzVQ==')

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
