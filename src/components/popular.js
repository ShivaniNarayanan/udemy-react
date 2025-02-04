import Python from "../assets/images/Python.jpg"
import Java from "../assets/images/Java.jpg"
import Fullstack from "../assets/images/Fullstack.jpg"
import blockchain from "../assets/images/blockchain.jpg"
import circuit from "../assets/images/circuit.jpg"
import Code from "../assets/images/Code.jpg"
import codesmile from "../assets/images/codesmile.jpg"
import apps from "../assets/images/App.jpg"

function popular() {
    return (
      <div className="popular">
        <h1 className="popular__title">Most Popular</h1>
        <p className="popular__subtitle">Pick the best fit</p>
        <div className="popular__container">
            <div className="course-card">
                <img src={Python}alt="python"></img>
                <h3>2024 Python Data Visualisation Materclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐⭐</p>
                <p>449 <del>2349</del></p>
            </div>
            <div className="course-card1">
                <img src={Java} alt="python"></img>
                <h3>2024 Java Full stack development</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐⭐</p>
                <p>449 <del>2349</del></p>
            </div>
            <div className="course-card__one">
                <img src={Fullstack} alt="html"></img>
                <h3>Basic to Advance Web development 2024</h3>
                <p>Col Steele</p>
                <p></p>
                <p>4.9 ⭐⭐⭐⭐⭐</p>
                <p>449 <del>5444</del></p>
            </div>
            <div className="course-card__two">
                <img src={blockchain}alt="html"></img>
                <h3>Blockchain in 2023  </h3>
                <p>Col Steele</p>
                <p></p>
                <p>4.0 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div className="course-card__three">
                <img src={circuit}></img>
                <h3>2024 Master in Photoshop & Animation</h3>
                <p>Col Steele</p>
                <p></p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449 <del>2559</del></p>
            </div>
            <div className="course-card">
                <img src={Code}></img>
                <h3>2024 Python Data Visualisation Materclass</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐⭐</p>
                <p>449 <del>2349</del></p>
            </div>
            <div className="course-card1">
                <img src={codesmile} alt="python"></img>
                <h3>2024 Java Full stack development</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐⭐</p>
                <p>449 <del>2349</del></p>
            </div>
            <div className="course-card__one">
                <img src={apps} alt="html"></img>
                <h3>Basic to Advance Web development 2024</h3>
                <p>Col Steele</p>
                <p></p>
                <p>4.9 ⭐⭐⭐⭐⭐</p>
                <p>449 <del>5444</del></p>
            </div>

        </div>

    </div>
    )
  }

export default popular