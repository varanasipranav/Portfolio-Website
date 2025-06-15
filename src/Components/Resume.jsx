import Header from "./header"

export default function Resume(){
    return(
        <>
        <Header/>
        <div style={{ width: '100%', height: 'calc(100vh - 60px)' }}> {/* Adjust height based on header size */}
            <h1 style={{ fontFamily: "Sixtyfour Convergence", textAlign: "center" }}>Resume</h1>
            <br />
            <iframe src="/Pranav_Varanasi_Resume.pdf" style={{ width: '100%', height: '100%' }}></iframe>
        </div>

        </>
    )
}