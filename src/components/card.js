import defaultLogo from '../logo.svg';
import './style/card.css';

const Card = ({ software, onBuyNow }) => {
    const {
        id,
        name = 'Unknown',
        description = '',
        price = 0,
        image = null, // fallback / legacy
        cover = null, // cover banner image
        logo = null,  // product logo/icon
        category = '',
        rating = null,
    } = software || {};

    const logoSrc = logo || image || defaultLogo;

    return (
        <div className="product-card">
            <div className="product-card-body product-card-body--center">
                <div className="product-card-logo product-card-logo--large">
                    <img src={logoSrc} alt={`${name} logo`} />
                </div>
                <h5 className="product-card-title product-card-title--center">{name}</h5>
                <div className="product-card-actions product-card-actions--center">
                    <button
                        className="btn btn-primary"
                        onClick={() => onBuyNow ? onBuyNow(software) : null}
                        aria-label={`Buy ${name}`}
                    >
                        Buy Now
                    </button>
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => { /* optional: view details */ }}
                        aria-label={`Details ${name}`}
                    >
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;