let localStream;
let remoteStream;
let peerConnection;

let init= async() =>{
  localStream = await navigator.mediaDevices.getUserMedia({video:true,audio:false})

  document.getElementById('user-1').srcObeject = localStream;

  createOffer()
}
let createOffer = async() =>{
    peerConnection = new RTCPeerConnection({iceServers:[]})

    remoteStream = new MediaStream()
    document.getElementById('user-2').srcObeject=localStream

    let offer = await peerConnection.createOffer()
    await peerConnection.setLocalDescription(offer)

    console.log('Offer:',offer)
}
init()