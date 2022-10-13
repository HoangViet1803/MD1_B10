let num = +prompt("Enter a number:");
let total = 0;
while (num != -1) {
    num = +prompt("Enter an umber:");
    total += num;
    alert(`Total: ${total}`)
}