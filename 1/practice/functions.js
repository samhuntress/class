const Sum = (x, y) => {
  return x + y;
};

function anotherSum(x, y) {
  return x + y;
}

const inlineSum = (x, y) => x + y;

const addTwo = x => x * 2;

//Realistic example of a small function
//url slug

let post = 'How to be cool like Alex';

let toSlug = name => name.toLowerCase().replace(' ', '-');

let slug = toSlug(post);

console.log(slug);
