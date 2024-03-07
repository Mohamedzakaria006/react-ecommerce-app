import styles from "./Category.module.css";

function Category({ category, setCategory }) {
  return (
    <>
      <p
        className={`${styles.cat} mb-2 p-2`}
        onClick={() => setCategory(category)}
      >
        {category}
      </p>
    </>
  );
}

export default Category;
