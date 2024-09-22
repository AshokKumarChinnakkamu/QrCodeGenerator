import { useState } from "react"

const QRcode = () => {
    let [img,setimage]=useState("");
    let [loading,setLoading]=useState(false);
    let [qrData,setQrData]=useState("");
    let [qrSize,setQrSize]=useState("")
    async function GenerateQR(){
       setLoading(true); 
        try {
            let url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setimage(url);
        }
        catch(error){
                console.error("Error generating QR CODE ",error)
        }
        finally{
            setLoading(false);
        }
    
    }
function downloadQR(){
  fetch(img).then((response)=>response.blob()).then((blob)=>{
    let link=document.createElement("a");
    link.href=URL.createObjectURL(blob);
    link.download="QrCode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

  return (
    
    <div className="app-container">
        
        <h3 className="title">QR CODE GENERATOR</h3>
        {loading && <p>Please wait......</p>}
        {img && <img className="qrimage" src={img}></img>}
        <label htmlFor="dataInput" className="inputlabel">Data for QR code: </label>
        <input type="text"  placeholder="Enter the url" value={qrData} id="dataInput" onChange={(e)=>setQrData(e.target.value)}></input>
        <label className="inputlabel">Size of QR code: </label>
        <input type="text" value={qrSize} placeholder="Eg 200" className="inputTextSize"  onChange={(e)=>setQrSize(e.target.value)}></input>
        <button className="Generate" onClick={GenerateQR}>Generate QR Code</button>
        <button className="download" onClick={downloadQR}>Download QR</button>
    </div>
  )
}

export default QRcode
