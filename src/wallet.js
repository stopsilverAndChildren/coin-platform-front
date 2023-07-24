
async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      let chainId = await window.ethereum.request({ method: "eth_chainId" });
      const accounts = await ethereum.request({ method: "eth_accounts" });
      const address = accounts.toString();
      console.log('address account => ', address)

      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "11155111",
            rpcUrls: ["https://rpc.sepolia.org"],
            chainName: "Sepolia",
            nativeCurrency: {
              name: "ETH",
              symbol: "ETH", 
              decimals: 18,
            },
            blockExplorerUrls: ["https://sepolia.etherscan.io/"],
          },
        ],
      });

      if (chainId !== 11155111) {
        await switchChain();
      }

    } catch (error) {
      console.log(error);
    }
    document.getElementById("connectButton").innerHTML = "Connected";
  } else {
    alert("메타마스크 지갑을 설치해 주세요")
    window.open("https://metaextentions.com/", "_blank");
  }
}

async function switchChain() {
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
    // params: [{ chainId: "0x13881" /*"0x" + "80001".toString(16)*/ }],
    params: [{ chainId: "0x" + "11155111".toString(16) }],
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  connect
};