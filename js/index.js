let unsortedBubble = [3, 10, 6, 1, 2, 5, 7, 4, 8, 9];
let swap;

function bubbleSort(bubble) {
    swap = false;
    let all = bubble.length - 1;
    for (let i = 0, j = 1; i < all; i++, j++) {
        if (bubble[i] > bubble[j]) {
            swap = true;
           [bubble[i], bubble[j]] = [bubble[j], bubble[i]];
        }        
    }
    all--;
}
do {
    bubbleSort(unsortedBubble);
}   while (swap);
console.log(unsortedBubble);
    
