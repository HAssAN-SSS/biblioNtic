
import './getStart.css'
export default function GetStart () {

    return (
        <div className="getStart">
            <div className="getStart-content">
                <div className="biblio-logo">
                    logo
                </div>
                <div className='getStart-textDesc'>
                    <h2 className='About-Our-Lebrary'>About Our Lebrary</h2>
                    <h2 className='ISMONTIC-Bibliotheque'>ISMONTIC Bibliothèque</h2>
                    <p className='para1'>
                        Nous sommes heureux d'annoncer que la bibliothèque de notre école sera désormais ouverte au public. Nous accueillons donc tous les étudiants et membres de la communauté locale qui souhaitent explorer notre vaste collection de livres.

                    </p>
                    <p className='para2'>
                        Notre bibliothèque offre un espace calme et confortable pour étudier, travailler et se concentrer.
                    </p>
                    <button id='getStart-btn'>Get Started</button>
                </div>
            </div>
            <div className="getStat-img">
                <img src="simon-0EkEV2fKVCs-unsplash.jpg" alt="no se" width={'100%'} height={'100%'} />
            </div>
        </div>
    )
}