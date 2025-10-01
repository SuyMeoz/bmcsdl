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

    const coverSrc = cover || image || defaultLogo;
    const logoSrc = logo || image || defaultLogo;

    const formatPrice = (p) => {
        try {
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p);
        } catch (e) {
            return p + '';
        }
    };

    const shortDesc = description ? (description.length > 110 ? description.slice(0, 107) + '...' : description) : '';

    return (
        <div className="product-card">
            {/* Cover / hero image */}
            <div className="product-card-cover">
                <img
                    src={coverSrc}
                    alt={`${name} cover`}
                />
            </div>

            {/* Body: logo + meta */}
            <div className="product-card-body">
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <div className="product-card-logo">
                        <img src={logoSrc} alt={`${name} logo`} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="product-card-title-row">
                            <h5 className="product-card-title">{name}</h5>
                            <div style={{ textAlign: 'right' }}>
                                <div className="product-card-price">{formatPrice(price)}</div>
                            </div>
                        </div>
                        <div className="product-card-meta">
                            {category ? <span className="product-card-category">{category}</span> : null}
                            {rating ? <span className="product-card-rating">⭐ {rating} / 5</span> : null}
                        </div>
                    </div>
                </div>
                {shortDesc ? (
                    <p className="product-card-desc">{shortDesc}</p>
                ) : null}
                <div className="product-card-actions">
                    <button
                        className="btn btn-primary"
                        style={{ flex: 1, borderRadius: 8, padding: '10px 12px' }}
                        onClick={() => onBuyNow ? onBuyNow(software) : null}
                        aria-label={`Buy ${name}`}
                    >
                        Buy Now
                    </button>
                    <button
                        className="btn btn-outline-secondary"
                        style={{ borderRadius: 8, padding: '10px 12px' }}
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