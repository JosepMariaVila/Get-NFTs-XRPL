function getNet() {
  let net;
  net = "wss://xrplcluster.com";
  return net;
}

async function getTokens() {
  let net = getNet();
  const client = new xrpl.Client(net);
  results = "Connecting to " + net + "...";
  document.getElementById("resultField").value = results;
  await client.connect();
  results += "\nConnected. Getting Ridworld NFTs...";
  document.getElementById("resultField").value = results;
  const nfts = await client.request({
    method: "account_nfts",
    account: accountField.value,
  });
  console.log("\nNFTs:\n " + JSON.stringify(nfts, null, 2));
  results += "\nNFTs:\n " + JSON.stringify(nfts, null, 2);
  document.getElementById("resultField").value = results;
  client.disconnect();
}
