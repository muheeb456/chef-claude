export default function Ingredients(props) {
    return (
        <section className="process_ingredients">
            <h2 className={"ingredients_title"}>Ingredients on hand:</h2>
            <ul className={"ingredients_list"}>
                {props.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
            </ul>
            {props.ingredients.length > 3 &&
                <div className={"get_recipe_section"}>
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button
                        className={`button ${props.loading ? "loading" : ""}`}
                        onClick={props.getRecipe}
                    >
                        <div className="spinner"></div>
                        <div className="button-text">Get a recipe</div>
                    </button>
                </div>}
        </section>
    )
}