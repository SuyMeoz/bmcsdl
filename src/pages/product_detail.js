import defaultLogo from '../logo.svg';
import './style/product_detail.css';

const ProductDetail = ({ software, onBuyNow }) => {
    if (!software) return <div>Không tìm thấy sản phẩm.</div>;
    const {
        name = 'Unknown',
        description = '',
        price = 0,
        image = null,
        cover = null,
        logo = null,
        category = '',
        rating = null,
    } = software;

    const coverSrc = cover || image || defaultLogo;
    const logoSrc = logo || image || defaultLogo;
    const formatPrice = (p) => {
        try {
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p);
        } catch (e) {
            return p + '';
        }
    };

    return (
        <div className="container my-4 product-detail-container">
            {/* Cover image */}
            <div className="product-detail-cover">
                <img src={coverSrc} alt={`${name} cover`} />
            </div>

            <div className="product-detail-main">
                {/* Logo + meta */}
                <div className="product-detail-logo">
                    <img src={logoSrc} alt={`${name} logo`} />
                    <div className="product-detail-category">
                        {category && <span>{category}</span>}
                    </div>
                </div>

                {/* Info */}
                <div className="product-detail-info">
                    <h2 className="product-detail-title">{name}</h2>

                    {rating && <div className="product-detail-rating">⭐ {rating} / 5</div>}

                    <div className="product-detail-price">{formatPrice(price)}</div>

                    {/* Buy button */}
                    <div>
                        <button
                            className="btn btn-primary product-detail-buy-btn"
                            onClick={() => onBuyNow ? onBuyNow(software) : null}
                        >
                            Mua ngay
                        </button>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="product-detail-desc-section">
                <h4 className="product-detail-desc-title">Mô tả sản phẩm</h4>
                <div className="product-detail-desc">
                    {description || 'Không có mô tả.'}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;