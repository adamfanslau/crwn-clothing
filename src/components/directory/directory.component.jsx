import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const Categories = ({categories}) => {
        
      return (
        <div className="categories-container">
          {categories.map(({ title, id, imageUrl }) => (
            <CategoryItem
              title={title}
              id={id}
              imageUrl={imageUrl}
            />
          ))}
        </div>
      );
}

export default Categories;