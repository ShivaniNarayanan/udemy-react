import Saleimage from "../assets/images/Sale -image-udemy.png"
function Sale() {
    return (<div>
        <div className="sale-image">
            <img src={Saleimage} alt="sale image"></img>
        </div>
        <div className="sale-image__offer">
            <h2>Udemy Flash Sale! 24 hours to Save.</h2>
            <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn</p>

        </div></div>)
}
export default Sale