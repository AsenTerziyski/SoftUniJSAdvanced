function rr(element, match, replacer) {
    while(element.textContent.includes(match)) {
        element.textContent = element.textContent.replace(match, replacer)
    }
    // regex solution
    // let pattern = new RegExp(match, 'g');

    // element.textContent = element.textContent.replace(pattern, replacer);
    // return element;
}

// rr('1 aaa bbb ccc!', 'aaa', 'x');
// console.log(rr('1 aaa bbb ccc!', 'aaa', 'x'));