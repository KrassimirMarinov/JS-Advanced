window.addEventListener("load", solve);

function solve() {
        const form = document.querySelector("form");
        const nextButton = document.getElementById("next-btn");
        const infoList = document.querySelector(".info-list");
        const confirmList = document.querySelector(".confirm-list");
        const completeImg = document.getElementById("complete-img");
        const completeText = document.getElementById("complete-text");
      
        function createListItem(carModel, carYear, partName, partNumber, condition) {
          const listItem = document.createElement("li");
          listItem.classList.add("part-content");
          const article = document.createElement("article");
          const p0 = document.createElement("p");
          const p1 = document.createElement("p");
          const p2 = document.createElement("p");
          const p3 = document.createElement("p");
          const p4 = document.createElement("p");
      
          p0.textContent = "Car Model: " + carModel;
          p1.textContent = "Car Year: " + carYear;
          p2.textContent = "Part Name: " + partName;
          p3.textContent = "Part Number: " + partNumber;
          p4.textContent = "Condition: " + condition;
      
          article.appendChild(p0);
          article.appendChild(p1);
          article.appendChild(p2);
          article.appendChild(p3);
          article.appendChild(p4);
          listItem.appendChild(article);
          infoList.appendChild(listItem);
          form.reset();
          nextButton.disabled = true;
      
          addEditButton(listItem);
          addContinueButton(listItem);
        }
      
        function addEditButton(listItem) {
          const editButton = document.createElement("button");
          editButton.textContent = "Edit";
          editButton.className = "edit-btn";
          editButton.addEventListener("click", function () {
            const values = Array.from(listItem.querySelectorAll("p")).map(p => p.textContent.split(": ")[1]);
            const [carModel, carYear, partName, partNumber, condition] = values;
        
            document.getElementById("car-model").value = carModel;
            document.getElementById("car-year").value = carYear;
            document.getElementById("part-name").value = partName;
            document.getElementById("part-number").value = partNumber;
            document.getElementById("condition").value = condition;
        
            listItem.parentNode.removeChild(listItem);
            nextButton.disabled = false;
          });
        
          listItem.appendChild(editButton);
        }
      
        function addContinueButton(listItem) {
                const continueButton = document.createElement("button");
                continueButton.textContent = "Continue";
                continueButton.className = "continue-btn";
                continueButton.addEventListener("click", function () {
                  const confirmListItem = listItem.cloneNode(true);
                  confirmList.appendChild(confirmListItem);
              
                  listItem.parentNode.removeChild(listItem);
                  nextButton.disabled = false;
              
                  addConfirmButton(confirmListItem);
                  addCancelButton(confirmListItem);
              
                  // Check if the text content is "Confirm Order"
                  if (completeText.textContent === "Confirm Order") {
                    confirmListItem.querySelector(".edit-btn").remove();
                    confirmListItem.querySelector(".continue-btn").remove();
                  }
                  
                  // Remove the buttons from the confirm-order section
                  if (confirmList.contains(confirmListItem)) {
                    const confirmOrderSection = document.getElementById("confirm-order");
                    const confirmButtons = confirmOrderSection.querySelectorAll(".edit-btn, .continue-btn");
                    confirmButtons.forEach(button => button.remove());
                  }
                });
              
                listItem.appendChild(continueButton);
              }
      
        function addConfirmButton(confirmListItem) {
          const confirmButton = document.createElement("button");
          confirmButton.textContent = "Confirm";
          confirmButton.className = "confirm-btn";
          confirmButton.addEventListener("click", function () {
            confirmListItem.parentNode.removeChild(confirmListItem);
            nextButton.disabled = false;
            completeImg.style.visibility = "visible";
            completeText.textContent = "Part is Ordered!";
          });
      
          confirmListItem.appendChild(confirmButton);
        }
      
        function addCancelButton(confirmListItem) {
          const cancelButton = document.createElement("button");
          cancelButton.textContent = "Cancel";
          cancelButton.className = "cancel-btn";
          cancelButton.addEventListener("click", function () {
            confirmListItem.parentNode.removeChild(confirmListItem);
            nextButton.disabled = false;
          });
      
          confirmListItem.appendChild(cancelButton);
        }
      
        form.addEventListener("submit", function (event) {
          event.preventDefault();
      
          const carModel = document.getElementById("car-model").value;
          const carYear = parseInt(document.getElementById("car-year").value);
          const partName = document.getElementById("part-name").value;
          const partNumber = document.getElementById("part-number").value;
          const condition = document.getElementById("condition").value;
      
          if (carModel && carYear && partName && partNumber && condition && carYear >= 1980 && carYear <= 2023) {
            createListItem(carModel, carYear, partName, partNumber, condition);
          }
        });
      }
