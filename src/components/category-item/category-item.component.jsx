import './category-item.styles.scss';

const CategoryItem = ({imageUrl, id, title}) => {
    return (
        <div className="category-container">
        <div className="background-image" style={{
          backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="category-body-container" key={id}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    );
}

export default CategoryItem;