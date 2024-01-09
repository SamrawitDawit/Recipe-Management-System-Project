
let recipeCount = 0;

        function showAddRecipeForm() {
          const recipeForm = document.getElementById("recipeForm");
          if (recipeForm.style.display === "none" || recipeForm.style.display === "") {
              recipeForm.style.display = "block";
          } else {
              recipeForm.style.display = "none";
          }
        }

        function addRecipe() {
            const recipeName = document.getElementById("recipeName").value;
            const ingredients = document.getElementById("ingredients").value;

            if (recipeName && ingredients) {
                recipeCount++;

                const newRecipe = document.createElement("div");
                newRecipe.classList.add("column", "is-one-third");
                newRecipe.innerHTML = `
                    <div class="food-item" id="recipe${recipeCount}">
                        <button class="buttonb">
                            <h3 class="is-size-4 has-text-white">${recipeName}</h3>
                        </button>
                        <p class="has-text-centered mt-4"><strong>Ingredients:</strong> ${ingredients}</p>
                        <button class="delete-button" onclick="deleteRecipe('recipe${recipeCount}')">Delete</button>
                    </div>
                `;

                document.getElementById("sampleFood").appendChild(newRecipe);

                document.getElementById("recipeName").value = "";
                document.getElementById("ingredients").value = "";

                document.getElementById("recipeForm").style.display = "none";
            } else {
                alert("Please fill in all fields.");
            }
        }

        function deleteRecipe(recipeId) {
            const recipeElement = document.getElementById(recipeId);
            if (recipeElement) {
                recipeElement.remove();
            }
        }
