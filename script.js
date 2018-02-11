const priceInput = document.querySelector('[name=price]');
const quantityInput = document.querySelector('[name=quantity]');
const totalContainer = document.querySelector('[name=total]');
const quantityLabel = document.querySelector('.quantity-label');

function calculatePieCost(input){
  const price = priceInput.value;
  const quantity = quantityInput.value;
  const costTotal = price * quantity;
  totalContainer.innerText = '$'+costTotal.toFixed(2);
  console.log(costTotal);

}

function updateQuantityLabel(){
  const quantity = quantityInput.value;
  quantityLabel.innerText = quantity;
}

calculatePieCost();

priceInput.addEventListener('input', calculatePieCost);
quantityInput.addEventListener('input', calculatePieCost);
quantityInput.addEventListener('input', updateQuantityLabel);
