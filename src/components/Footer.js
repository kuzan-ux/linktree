import footer from "../assets/images/Footer.png"
import mobile from "../assets/images/Mobile.png"

function Footer() {
  return(
    <footer>
      <div id="foot">
        <img src= { footer } alt="Footer" className="desktop" />
        <img src= { mobile } alt="Footer" className="mobile" />
      </div>
    </footer>
  )
}

export default Footer