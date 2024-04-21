function Meal({ title, url, imageID, imageType }) {
  const imageSize = "312x231";
  const imageURL = `https://img.spoonacular.com/recipes/${imageID}-${imageSize}.${imageType}`;

  return (
    <section className="meal">
      <h3>{title}</h3>
      {imageURL && <img src={imageURL} alt="" />}
      {!imageURL && <p>Image not available</p>}
      {url && (
        <p>
          Recipe website:
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </p>
      )}
      {!url && <p>Website: Not available</p>}
    </section>
  );
}

export default Meal;
