import Code from "../assets/images/Code.jpg"
import html from "../assets/images/html.jpg"
import Gitlab from "../assets/images/Gitlab.jpg"
import Photoshop from "../assets/images/Photo shop.jpg"
function Recommended() {
    return (
      <div className="Recommended">
        <h1 className="Recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div className="Recommended__container">
            <div className="course-card">
                <img src={Code} alt="python"></img>
                <h3>2024 Python Data Visualisation Materclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐⭐</p>
                <p>449 <del>2349</del></p>
            </div>
            <div className="course-card__one">
                <img src={html} alt="html"></img>
                <h3>Basic to Advance Web development 2024</h3>
                <p>Col Steele</p>
                <p></p>
                <p>4.9 ⭐⭐⭐⭐⭐</p>
                <p>449 <del>5444</del></p>
            </div>
            <div className="course-card__two">
                <img src={Gitlab} alt="html"></img>
                <h3>2024 Git & Github Bootcamp </h3>
                <p>Col Steele</p>
                <p></p>
                <p>4.0 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card__three">
                <img src={Photoshop} alt="html"></img>
                <h3>2024 Master in Photoshop & Animation</h3>
                <p>Col Steele</p>
                <p></p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449 <del>2559</del></p>
            </div>
        </div>

    </div>
    )
}
export default Recommended